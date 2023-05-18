import axios from 'axios';

const agFetch = axios.create({
    //API local
    baseURL: "http://localhost:4001",
    
    //API Online
    //baseURL: "http://ec2-34-234-67-50.compute-1.amazonaws.com:4000",
    headers: {
        "Content-Type": "application/json"
    },
});

export default agFetch;