import { createSlice } from "@reduxjs/toolkit";
export interface IState{
    selectedCategory: string,
    navSearchValue: string,
    sortBtnActive: boolean,
    cartAddActive: boolean,
    basket: Basket[],
    currentPage:number, 
    total:number, 
    productCategory:string,
    categoryName: string[], 
    category:string,
   
    
   
}
 type Basket={
    id:number,
    amount:number,
    price:number,
    title:string,
    images:string[]
}
const initialState:IState = {
    selectedCategory: '',
    navSearchValue: '',
    sortBtnActive: false,
    cartAddActive: false,
    basket: [],
    currentPage:1,
    total:100,
    productCategory:'',
    categoryName: [],
    category:'',
   
    
}

export const category = createSlice({
    name: 'category',
    initialState,
    reducers: {
       
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        changeNavSearchValue: (state, action) => {
            state.navSearchValue = action.payload
        },
        changeSortBtnActive: (state) => {
            state.sortBtnActive = !state.sortBtnActive
        },
        changeCartAddActive: (state) => {
            state.cartAddActive = !state.cartAddActive
        },
        changeBasket: (state, action) => {
            const { id, amount } = action.payload;
            const productIndex = state.basket.findIndex(prod => prod.id === id);
            if (productIndex !== -1) {
                if (amount > 0) {
                    state.basket[productIndex].amount = amount;
                } else {
                    state.basket.splice(productIndex, 1);
                }
            } else {
                state.basket.push(action.payload);
            }
        },
        setCurrentPage: (state, action)=>{
            state.currentPage = action.payload
        }, 
        setCategory: (state, action)=>{
            state.category = action.payload
        },
        setCategoryName: (state, action)=>{
            state.categoryName = action.payload
        },
       
    }
})

export const { setSelectedCategory, changeNavSearchValue, changeSortBtnActive, changeCartAddActive, changeBasket, setCurrentPage, setCategory, setCategoryName } = category.actions