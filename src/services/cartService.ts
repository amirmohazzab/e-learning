import http from './httpService';
import config from './config.json';


export const getCart = () => {
    return http.get(`${config.localapi}/api/cart`);
};

export const addToCart = (courseId: string) => {
    return http.post(`${config.localapi}/api/cart/${courseId}`);
};


export const deleteFromCart = (courseId: string) => {
    return http.delete(`${config.localapi}/api/cart/${courseId}`);
};

export const deleteFromCartMulti = (courseId: string) => {
    return http.delete(`${config.localapi}/api/cart/multi/${courseId}`);
};

export const clearCart = () => {
    return http.delete(`${config.localapi}/api/cart`);
};

