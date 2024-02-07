import {getRequest, postRequest, postRequestAuth} from './methods';

// ***************** ADMIN API REQUEST ********************
const getItemList = async () => await getRequest('get/voucher');
const addItem = async (payload: object) =>
  await postRequest('add/voucher', payload);
const deleteItem = async (payload: object) =>
  await postRequestAuth('delete/voucher', payload);

// ***************** REGISTRATION API REQUEST ********************
const login = async (payload: object) =>
  await postRequestAuth('auth/login', payload);

export const SharedApi = {
  getItemList,
  addItem,
  deleteItem,
  login,
};
