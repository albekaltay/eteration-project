import React from "react";
import AppContainer from "../../components/layout/AppContainer";
import ProductDetail from "../../components/Documents/ProductDetail";
import { useDispatch, useSelector } from "react-redux";
import Cart from "@/components/Documents/Cart";
import Checkout from "@/components/Documents/Checkout";
import { addProductToCart, decrementQuantity } from "@/redux/slices/cartSlice";
import cogoToast from "cogo-toast";

const ProductDetailPage = () => {
  const singleProduct = useSelector((state) => state.products.singleProduct);
  const cartItems = useSelector((state) => state.cart.items);

  let hiddenSmallScreen = false;

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  const handleDecrementQuantity = (product) => {
    product.quantity === 1
      ? cogoToast.warn("You can not decrease more than 1 quantity!")
      : dispatch(decrementQuantity(product));
  };

  return (
    <AppContainer
      hiddenSmallScreen={hiddenSmallScreen}
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
      <ProductDetail
        singleProduct={singleProduct}
        handleAddToCart={handleAddToCart}
      />
    </AppContainer>
  );
};

export default ProductDetailPage;
