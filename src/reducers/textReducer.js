import { createReducer } from '@reduxjs/toolkit';
import { textUpdate } from '../actions/textActions';

const initialSt = {
    value: ''
};

export const textReducer = createReducer(initialSt, (builder) => {
    builder
        .addCase(textUpdate, (state, action) => {state.value = action.payload})
        .addDefaultCase((state, action) => {})
    }); 