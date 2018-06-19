import React from 'react';
import ReactDOM from 'react-dom';

const VideoDetail= ({video})=>{

    if(!video){
        return <div>Loading...</div>
    }

    const videoId=video.id.videoId;
    const url=`https://youtube.com/embed/${videoId}`;
    return(
        <div className='video-detail'>

            <iframe className='video-yt'src={url}></iframe>
            <div className='details'>
                <div className='title'>{video.snippet.title}</div>
                <div className='description'>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;
