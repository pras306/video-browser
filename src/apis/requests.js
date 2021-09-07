import axios from "axios";

export const PROXY_YOUTUBE_API = axios.create({
    baseURL: "https://backend-portfolio-proxy.herokuapp.com/api/v1/videos/search/"
});