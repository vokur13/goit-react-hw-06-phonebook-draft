import { configureStore } from '@reduxjs/toolkit'
import { createAction, createReducer } from '@reduxjs/toolkit'


export const add = createAction('items/add');
export const remove = createAction('items/remove');

const itemsReducer = createReducer([], {
    [add]: (state, action) => state + action.payload,
    [remove]: (state, action) => state - action.payload,
});

export const store = configureStore({
    reducer: {
        items: itemsReducer
    },
});