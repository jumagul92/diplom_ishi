import { configureStore } from "@reduxjs/toolkit";
import { category } from "./category";


export const store = configureStore({
    reducer: {
      category: category.reducer
    }
})

