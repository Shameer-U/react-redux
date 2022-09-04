import { ActionTypes } from "../constants/action-types"

const initialState = {
    products:[],
}

//each time a function gets dispatched dispatch() function automatically passes corresponding "state" of each reducer function from combineReducers as first parameter.
//whatever the reducer function returns, dispatch() function makes it as the new state of the corresponding reducer in combineReducers. 

//so here each time this function gets dispatched the dispatch() function passes "allProducts" state from combineReducers (refer combineReducers in index.js) as first parameter to this function.
//whatever this reducer function returns, dispatch() function makes it as the new "allProducts" state in combineReducers. 
export const productReducer = (state = initialState, {type, payload}) => {  
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}


//so here each time this function  gets dispatched the dispatch() function passes the current "product" state (refer combineReducers in index.js) as first parameter to this function.
//whatever this reducer function returns, dispatch() function makes it as the new "product" state in combineReducers. 
export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}