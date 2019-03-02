import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component{
    constructor(props){
        super(props)
        
    }
    
    render(){
        console.log("props in VideoList",this.props)
        const videos=this.props.videos.map(video=>{
            return (
                <div>
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