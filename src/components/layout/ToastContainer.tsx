"use client";
import { ToastContainer as RootToastContainer, Bounce } from "react-toastify";

export const ToastContainer = () => (
  <RootToastContainer
    className="toast-container"
    position="bottom-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Bounce}
  />
);

export default ToastContainer;
