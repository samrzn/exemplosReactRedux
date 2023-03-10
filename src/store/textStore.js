import { configureStore } from '@reduxjs/toolkit';
import { textReducer } from '../reducers/textReducer';

export const textStore = configureStore({ reducer: textReducer });
