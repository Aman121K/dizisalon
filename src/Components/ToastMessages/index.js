import React from 'react';
import { ToastContainer } from 'react-native-toast-message';

const ToastMessages = () => {
  return (
    <ToastContainer ref={(ref) => ToastService.toastRef = ref} />
  );
};

export default ToastMessages;