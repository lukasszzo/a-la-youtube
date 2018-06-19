import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video}/>
    });
    return (<ul className='video-list'>{videoItems}</ul>)
}

export default VideoList;
