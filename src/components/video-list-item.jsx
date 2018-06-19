import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const VideoListItem = ({video,onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return <li onClick={()=>onVideoSelect(video)}>
        <div className='video-box'>
            <img className=''src={imageUrl}/>
        </div>
        <div className='video-title'>{video.snippet.title}</div>
    </li>
};

export default VideoListItem;
