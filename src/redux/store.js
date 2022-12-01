import { configureStore } from '@reduxjs/toolkit'
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit'


// export const add = createAction('items/add');
// export const remove = createAction('items/remove');


// IMMER
// const itemsReducer = createReducer([], {
//     // [add]: (state, action) => [...state, action.payload],
//     [add]: (state, action) => state.push(action.payload),
//     // [remove]: (state, action) => [...state, action.payload],
//     [remove]: (state, action) => state.filter(item=>item.id!==action.payload)
// });

// CreateSlice
const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
           return state.filter(item=>item.id!==action.payload)
        }
    }
})

export const { add, remove } = itemsSlice.actions;

// export const store = configureStore({
//     reducer: {
//         items: itemsReducer
//     },
// });

export const store = configureStore({
    reducer: {
        items: itemsSlice.reducer
    },
});