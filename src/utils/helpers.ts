import Swal from 'sweetalert2';
import {IMAGE_BASE_URL} from './constant';

export const swalAlert = (text: string, type: any = 'success') => {
  Swal.fire({
    text,
    icon: type,
    timer: 2000,
  });
};

export const header = (formdata?: object) => {
  const token = localStorage.getItem('token');
  const option = {
    'Content-Type': formdata ? 'multipart/form-data' : 'application/json',
    'auth-token': token,
  };
  return option;
};

export const currencyFormat = (price: number) => {
  const currencyUGX = new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: 'UGX',
  });
  return currencyUGX.format(price);
};

export const getImageURL = (fileName: string) => {
  return `${IMAGE_BASE_URL}/${fileName}`;
};
