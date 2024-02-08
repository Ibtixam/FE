import {getRequest, postRequestAuth} from './methods';

const login = async (payload: object) =>
  await postRequestAuth('auth/login', payload);
const getUserDetails = async () => await getRequest('auth/getUserDetails');

export const RegistrationApi = {
  login,
  getUserDetails,
};
