import React from 'react';

const VideoItem=(props)=>{
    console.log("props in VideoItem:",props.video.snippet.title);
    return(
        <div className="ui card">
            <div className="image">
                <img 
                    src={props.video.snippet.thumbnails.medium.url}
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