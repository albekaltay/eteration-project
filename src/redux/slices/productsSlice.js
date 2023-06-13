import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductAsync = createAsyncThunk(
  "products/getProduct",
  async () => {
    const response = await axios(
      "https://5fc9346b2af77700165ae514.mockapi.io/products"
    );
    return response.data;
  }
);

const initialState = {
  items: [],
  filteredItems: [],
  filteredBrands: [],
  filteredModels: [],
  selectedBrands: [],
  selectedModels: [],
  singleProduct: {},
  getProductIsLoading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    getSingleProduct(state, action) {
      const id = action.payload;

      const filteredProduct = state.items.filter(
        (product) => product.id === id
      );
      state.singleProduct = filteredProduct[0];
    },
    sortByProducts(state, action) {
      const value = action.payload;
      let sortedData;
      if (value === "OLD_TO_NEW") {
        sortedData = state.filteredItems.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      }
      if (value === "NEW_TO_OLD") {
        sortedData = state.filteredItems.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      }
      if (value === "PRICE_HIGH_TO_LOW") {
        sortedData = state.filteredItems.sort((a, b) => b.price - a.price);
      }
      if (value === "PRICE_LOW_TO_HIGH") {
        sortedData = state.filteredItems.sort((a, b) => a.price - b.price);
      }
      state.filteredItems = sortedData;
    },
    searchProducts(state, action) {
      const value = action.payload;
      if (value === "") {
        state.filteredItems = state.items;
      } else {
        const flteredData = state.filteredItems.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        );
        state.filteredItems = flteredData;
      }
    },
    searchBrands(state, action) {
      const value = action.payload;
      if (value === "") {
        state.filteredBrands = [
          ...new Set(state.items.map((item) => item.brand)),
        ];
      } else {
        const flteredData = state.filteredBrands.filter((brand) =>
          brand.toLowerCase().includes(value.toLowerCase())
        );
        state.filteredBrands = flteredData;
      }
    },
    toggleBrand(state, action) {
      const brand = action.payload;
      const index = state.selectedBrands.indexOf(brand);

      if (index === -1) {
        state.selectedBrands.push(brand);
      } else {
        state.selectedBrands.splice(index, 1);
      }
      if (state.selectedBrands.length === 0) {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter((product) =>
          state.selectedBrands.includes(product.brand)
        );
      }
    },
    toggleModel(state, action) {
      const model = action.payload;
      const index = state.selectedModels.indexOf(model);

      if (index === -1) {
        state.selectedModels.push(model);
      } else {
        state.selectedModels.splice(index, 1);
      }
      if (state.selectedModels.length === 0) {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter((product) =>
          state.selectedModels.includes(product.model)
        );
      }
    },
    searchModels(state, action) {
      const value = action.payload;
      if (value === "") {
        state.filteredModels = [
          ...new Set(state.items.map((item) => item.model)),
        ];
      } else {
        const flteredData = state.filteredModels.filter((model) =>
          model.toLowerCase().includes(value.toLowerCase())
        );
        state.filteredModels = flteredData;
      }
    },
  },
  extraReducers: {
    [getProductAsync.pending]: (state) => {
      state.getProductIsLoading = true;
    },
    [getProductAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
      state.filteredBrands = [
        ...new Set(action.payload.map((item) => item.brand)),
      ];
      state.filteredModels = [
        ...new Set(action.payload.map((item) => item.model)),
      ];
      state.getProductIsLoading = false;
    },
  },
});
export const {
  getSingleProduct,
  sortByProducts,
  searchProducts,
  searchBrands,
  searchModels,
  toggleBrand,
  toggleModel,
} = productsSlice.actions;
export default productsSlice.reducer;
