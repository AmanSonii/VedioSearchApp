import React from 'react';

const VedioDetail = ({vedio}) =>
{
    
    if(vedio!=null)
    {
        const vedioUrl = `https://www.youtube.com/embed/${vedio.id.videoId}`;
        return (
       <div>
           <div className='ui embed'>
               <iframe src={vedioUrl}></iframe>
           </div>
            <div className='ui segment'>
     <h4 className='ui header'>{vedio.snippet.title}</h4>
     <p>{vedio.snippet.description}</p>
            </div>
            </div>
        )
    }
  else{
      return <div>Please select a vedio</div>
  }
}

export {VedioDetail};