import { getRequest, postRequest } from "./methods";

// ***************** ADMIN API REQUEST ********************
const getItemList = async () => await getRequest("get/products");
const addItem = async (payload: object) =>
  await postRequest("add/products", payload);

// ***************** REGISTRATION API REQUEST ********************
const login = async (payload: object) =>
  await postRequest("auth/login", payload);

export const SharedApi = {
  getItemList,
  addItem,
  login,
};
