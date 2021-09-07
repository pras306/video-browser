import React from 'react';

import './VideoBrowser.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import { PROXY_YOUTUBE_API } from '../../apis/requests';
import VideoTile from '../../components/VideoTile/VideoTile';
import VideoList from '../../components/VideoList/VideoList';

class VideoBrowser extends React.Component {

    state = { 
        videos: [] ,
        selectedVideo: null
    }

    onSearchSubmit = async(term) => {
        let response = await PROXY_YOUTUBE_API.get(term);

        this.setState({ 
            videos: response.data,
            selectedVideo: response.data[0]
        });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video});
    }

    render() {
        return(
            <div className="video-browser">
                <SearchBar label={"Search"} onSubmit={this.onSearchSubmit}/>
                <div className="video-browser__segment">
                    <VideoTile video={this.state.selectedVideo} />
                    <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                </div>
            </div>
        );
    }
};

export default VideoBrowser;
