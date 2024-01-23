import axios from 'axios';
import {BASE_URL} from '../../utils/constant';
import {header} from '../../utils/helpers';

export const getRequest = async (url: string) => {
  const API_URL = `${BASE_URL}/api/${url}`;
  const headers = header();
  try {
    const res = await axios.get(API_URL, {headers});
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postRequest = async (url: string, payload: object) => {
  const API_URL = `${BASE_URL}/api/${url}`;
  const headers = header();
  try {
    const res = await axios.post(API_URL, payload, {headers});
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
