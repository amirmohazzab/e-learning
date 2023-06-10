import { getCart, addToCart, deleteFromCart, deleteFromCartMulti, clearCart } from "../services/cartService.js";


export const getBasket = () => {
    return async dispatch => {
        const { data } = await getCart();
        await dispatch({ type: "GET_CART", payload: data.data });
    };
};

export const addToBasket = (courseId) => {
    console.log(courseId);
    return async dispatch => {
        const {data} = await addToCart(courseId);
        console.log(data);
        await dispatch({ type: "ADD_CART", payload: data.data});
    };
};


export const deleteFromBasket = (courseId) => {
    return async dispatch => {
        const { data } = await deleteFromCart(courseId);
        await dispatch({ type: "DELETE_CART", payload: data.data });
    };
};


export const deleteFromBasketMulti = (courseId) => {
    return async dispatch => {
        const { data } = await deleteFromCartMulti(courseId);
        await dispatch({ type: "DELETE_MULTI_CART", payload: data.data });
    };
};



export const clearBasket = () => {
    return async dispatch => {
        const {data} = await clearCart();
        console.log('hi')
        console.log(data)
        dispatch({ type: "CLEAR_CART"});
    };
};