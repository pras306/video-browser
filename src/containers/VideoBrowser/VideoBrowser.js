import React from 'react';

import './VideoBrowser.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import { YOUTUBE_API, YOUTUBE_API_BASE_PARAMS } from '../../apis/axios';
import requests from '../../apis/requests';
import VideoTile from '../../components/VideoTile/VideoTile';
import VideoList from '../../components/VideoList/VideoList';

class VideoBrowser extends React.Component {

    state = { 
        videos: [] ,
        selectedVideo: null
    }

    onSearchSubmit = async(term) => {
        let response = await YOUTUBE_API.get(requests.getVideos,{
            params:{
                ...YOUTUBE_API_BASE_PARAMS,
                q: term
            }
        });

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
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
