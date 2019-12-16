import { toast } from 'react-toastify';

export const toastError = error => {
  if(typeof error === 'string'){
    toast.error(error);
    return;
  }
  let message = null;
  if (typeof error === 'object' && error.message) {
    ({ message } = error);
    console.log(message)
  }
  if (message !== null && typeof message !== 'undefined' && message !== '') {
    toast.error(message);
    console.log(error);
  }
};

export const toastSuccess = message => {
  if (message !== null && typeof message !== 'undefined' && message !== '') {
    toast.success(message);
  }
};
