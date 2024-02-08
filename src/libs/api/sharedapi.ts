import {getRequest, postRequest, postRequestAuth} from './methods';

const getItemList = async () => await getRequest('get/voucher');
const addItem = async (payload: object) =>
  await postRequest('add/voucher', payload);
const deleteItem = async (payload: object) =>
  await postRequestAuth('delete/voucher', payload);

export const SharedApi = {
  getItemList,
  addItem,
  deleteItem,
};
