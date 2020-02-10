import React from 'react';
import VideoItem from './VideoItem'
    const VedioList = (props) => {
        
       const renderedList = props.vedios.map((video)=>{
            return <VideoItem  onVedioSelect={props.slectedVedio} key={video.etag} video={video} />
        });

    return <div className='ui relaxed divided list'>{ renderedList}</div>;
    }

    export default VedioList;