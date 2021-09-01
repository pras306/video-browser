import React from 'react';

import './VideoTile.css';

const VideoTile = ({ video }) => {
    const renderVideo = () => {
        return(
            <div className="video-tile__segment">
                <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title={video.snippet.title} className="video-tile__segment__video" />
                <h2>{video.snippet.title}</h2>
                <p>{video.snippet.description}</p>
            </div>
        )
    }

    return (
        <div className="video-tile">
            {video ? renderVideo() : "There are no videos to show at the moment."}
        </div>
    )
};


export default VideoTile;