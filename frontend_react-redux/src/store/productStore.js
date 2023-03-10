import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from '../reducer/productReducer';

export const ProductStore = configureStore({ reducer: ProductReducer });
