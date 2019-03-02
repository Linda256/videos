import React from 'react';

import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import CurrentVideo from './CurrentVideo';
import VideoList from './VideoList';

import Authorization from "../config/Authorization";

class App extends React.Component{
    constructor(){
        super();
        this.state={
            videos:[],
            
        }
    }

    handleSearchSubmit=async term =>{
        console.log("term in App",term);
        const response=await youtube.get(
            '/search',{params:{
                q:term,
                part:"snippet",
                maxResults:5,
                key:Authorization.youtubeKey
            }}
            )
        const videos=response.data.items
        console.log("result from youtube",videos);
        this.setState({videos});
    }
    render(){
        return(
        <div>
            Video Browser
            <SearchBar handleSearchSubmit={this.handleSearchSubmit}/>
            <CurrentVideo />
            <VideoList videos={this.state.videos}/>

        </div>)
        
    }
}

export default App;