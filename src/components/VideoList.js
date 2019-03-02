import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const videos=this.props.videos.map(video=>{
            return (
                <div>
                    <p>Video</p>
                    <VideoItem video={video}/>
                </div>
            )
        })
        return(
            <div>
                {videos}
            </div>
        )
    }
}

export default VideoList;