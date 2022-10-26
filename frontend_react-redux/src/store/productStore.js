import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from '../reducer/productReducer';

export const productStore = configureStore({ reducer: productReducer });