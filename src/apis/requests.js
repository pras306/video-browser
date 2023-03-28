import axios from "axios";

export const PROXY_YOUTUBE_API = axios.create({
    baseURL: "https://api-proxy-server-6xbe.onrender.com/api/v1/videos/search/"
});