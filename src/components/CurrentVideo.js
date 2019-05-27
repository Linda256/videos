import React from 'react';

const CurrentVideo = (props)=>{
    return (
        !props.currVideo ? <div>Please wait...</div> :
        <div className="ui card" style= {{width:"720px"}}>
            <iframe style={{height:'400px'}} src={`https://www.youtube.com/embed/${props.currVideo.id.videoId}?autoplay=1`} allowFullScreen/>
            <div className="content">
                <a className="header">{props.currVideo.snippet.title}</a> 
                <div className="description">
                {props.currVideo.snippet.description}
                </div>
            </div>
        </div>
    )
}

export default CurrentVideo;