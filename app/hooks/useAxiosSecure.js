import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'http://192.168.0.222:5000/api',
});

export default function useAxiosSecure() {
    return axiosSecure;
}
