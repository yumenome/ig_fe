import axios from "axios";

const api_client = axios.create({
    baseURL: 'http://localhost:8000/api'
});

// before request 
api_client.interceptors.request.use((config) => {
    const token = localStorage.getItem('API_TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

// after request
api_client.interceptors.response.use((res) => {
    return res;
}, (err) => {
    const {res_err} = err;
    if(res_err === 401){
        localStorage.removeItem('API_TOKEN');
    }
    throw err;
});

export default api_client;