import axios from "axios";

const instance = axios.create({
    baseURL: "http://api.tvmaze.com",
    timeout: 3000,
    // headers: // Token 인증...
});

export default instance;