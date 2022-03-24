import axios from 'axios';

const prod = 'https://sandbox.ws.suitpay.app/api/v1/';
const api = axios.create({
  baseURL: prod,
});

export default api;
