import axios from 'axios';

const agFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json"
    },
});

export default agFetch;