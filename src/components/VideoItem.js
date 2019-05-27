import React from 'react';

const VideoItem=(props)=>{
    //console.log("props in VideoItem:",props.video.snippet.title);
    const getCurrentVideo=()=>{
        const currVideo=props.video;
        props.handleSelect(currVideo);
    }
    return(
        <div className="ui card" onClick={()=>getCurrentVideo()}>
            <div className="image" >
                <img 
                    alt={props.video.snippet.description}
                    src={props.video.snippet.thumbnails.high.url}
                />
            </div>
            <div className="content">
                <a className="header">{props.video.snippet.title}</a> 
                <div className="description">
                {props.video.snippet.description}
                </div>
            </div>
        </div>
    )  
}

export default VideoItem;