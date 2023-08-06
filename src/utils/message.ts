import { ToastContent, toast } from "react-toastify";

export const successMessage = (message: ToastContent<unknown>): void => {
    toast.success(message, {
        position: "top-right",
        closeOnClick: true
    });
};

export const errorMessage = (message: ToastContent<unknown>): void => {
    toast.error(message, {
        position: "top-right",
        closeOnClick: true
    });
};