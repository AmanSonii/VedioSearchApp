import React from 'react';
import './VideoItem.css';

 

const VideoItem = ({video,onVedioSelect}) =>
{
    return <div className='vedio-item item' onClick={()=>{onVedioSelect(video)}}>
       <img src={video.snippet.thumbnails.medium.url} className='ui-image' alt="building"></img>
       <div className='content'>
           <div className=''>
           {video.snippet.title}
           </div>
       
           </div>
       
    </div>
}

export default VideoItem;