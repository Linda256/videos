import React from 'react';

const CurrentVideo = (props)=>{
    const currVideoId=props.currVideo!=null? props.currVideo.id.videoId : "FcB8ekBdf98";
    return (
        <div>
            CurrentVideo
            <iframe style={{height:'400px', width:'720px'}} src={`https://www.youtube.com/embed/${currVideoId}?autoplay=1`} allowFullScreen/>
        </div>
        
    )
}

export default CurrentVideo;