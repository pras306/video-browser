import axios from 'axios';

export const YOUTUBE_API = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
});

export const YOUTUBE_API_BASE_PARAMS = {
    part: "snippet",
    type: "video",
    maxResults: 15,
    key: process.env.REACT_APP_YOUTUBE_API_KEY
};