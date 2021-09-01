import React from 'react';

import './VideoList.css';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

    const renderedList = videos.map((vid,i) => {
        return <VideoItem video={vid} key={vid.id.videoId} onVideoSelect={onVideoSelect} />
    });

    return(
        <div className="video-list">
            {renderedList}
        </div>
    );
};


export default VideoList;