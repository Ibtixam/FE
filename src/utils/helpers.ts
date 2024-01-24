import Swal from 'sweetalert2';

export const swalAlert = (text: string, type: any = 'success') => {
  Swal.fire({
    text,
    icon: type,
    timer: 2000,
  });
};

export const header = () => {
  const token = localStorage.getItem('token');
  const option = {
    'Content-Type': 'application/json',
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
