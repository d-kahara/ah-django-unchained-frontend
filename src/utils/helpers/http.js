import axios from 'axios';

export const http = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: { 
        "Content-Type": "application/json", 
        "Accept": "application/json"
    }
});


export default http
