import React from 'react';

import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return(
        <div className="video-item" onClick={() => onVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} className="video-item__image"/>
            <div className="video-item__title">{video.snippet.title}</div>
        </div>
    );
}


export default VideoItem;