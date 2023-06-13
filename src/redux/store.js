import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productsSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const cartPersistConfig = {
    key: 'cart',
    storage: storage,
    blacklist: ['someStateToExclude']
  };
  
const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice);

const productsPersistConfig = {
    key: 'products',
    storage: storage,
    blacklist: ['someStateToExclude']
  };
  
const persistedProductsReducer = persistReducer(productsPersistConfig, productSlice);

const store = configureStore({ 
    reducer:  {
        products: persistedProductsReducer,
        cart: persistedCartReducer
    }

});

const persistor = persistStore(store);

export {store, persistor};