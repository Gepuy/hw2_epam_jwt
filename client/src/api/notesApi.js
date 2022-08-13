import axios from "axios";

const $host = axios.create({
    baseURL: process.env.BACKEND_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.BACKEND_API_URL
});

// const authInterceptor = config => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//     return config;
// }

// $authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost,
}
