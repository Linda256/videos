import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component{
    
    render(){
        console.log("props in VideoList",this.props)
        const videos=this.props.videos.map(video=>{
            return (
                <div>
                    <VideoItem key={video.id}  video={video} handleSelect={this.props.handleSelect}/>
                </div>
            )
        })
        return(
            <div className="ui relaxed divided list">
                {videos}
            </div>
        )
    }
}

export default VideoList;