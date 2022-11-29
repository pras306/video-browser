import axios from "axios";

export const PROXY_YOUTUBE_API = axios.create({
    baseURL: "https://api-proxy-server.up.railway.app/api/v1/videos/search/"
});