import AppContainer from "@/components/layout/AppContainer";
import BrandsCard from "@/components/Documents/BrandsCard";
import SortByCard from "../components/Documents/SortByCard";
import ModelCard from "@/components/Documents/ModelCard";
import Cart from "@/components/Documents/Cart";
import Checkout from "@/components/Documents/Checkout";
import Loading from "@/components/loadingS/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProductCard from "@/components/Documents/ProductCard";
import { getProductAsync } from "../redux/slices/productsSlice";
import { addProductToCart, decrementQuantity } from "../redux/slices/cartSlice";
import Pagination from "../components/paginations/Pagination";
import cogoToast from "cogo-toast";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const getProductIsLoading = useSelector(
    (state) => state.products.getProductIsLoading
  );
  const cartItems = useSelector((state) => state.cart.items);
  const filteredProducts = useSelector((state) => state.products.filteredItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductAsync());
    const cartItems = localStorage.getItem("cartItems");
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  const handleDecrementQuantity = (product) => {
    product.quantity === 1
      ? cogoToast.warn("You can not decrease more than 1 quantity!")
      : dispatch(decrementQuantity(product));
  };

  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <AppContainer
      rightToolbar={
        <>
          <SortByCard />
          <BrandsCard />
          <ModelCard />
        </>
      }
      leftToolbar={
        <>
          <Cart
            cartItems={cartItems}
            handleAddToCart={handleAddToCart}
            handleDecrementQuantity={handleDecrementQuantity}
          />
          <Checkout />
        </>
      }
    >
      {getProductIsLoading && <Loading />}
      <div className="flex flex-col justify-between h-full">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4 px-10 sm:px-0">
          {currentProducts.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
          onPageChange={handlePageChange}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />
      </div>
    </AppContainer>
  );
}
