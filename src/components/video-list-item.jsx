import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return <li>
        <div>
            <img src={imageUrl}/>
        </div>
        <div>{video.snippet.title}</div>
    </li>
};

export default VideoListItem;
