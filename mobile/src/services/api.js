import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.103:3333' // localhost só funciona dentro da máquina, nao no celular
});

export default api;