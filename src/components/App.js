import React from 'react';

import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import CurrentVideo from './CurrentVideo';
import VideoList from './VideoList';


class App extends React.Component{
    constructor(){
        super();
        this.state={
            videos:[],
            currVideo:null
            
        }
    }

    handleSearchSubmit=async term =>{
        console.log("term in App",term);
        const response=await youtube.get(
            '/search',
            {params:{q:term}}
            )
        const videos=response.data.items
        console.log("result from youtube",videos);
        this.setState({videos});
    }

    handleSelect=(video)=>{
        //console.log("id handleSelect",video);
        this.setState({currVideo:video})

    }
    render(){
        return(
            <div>
                 Video Search
                <SearchBar handleSearchSubmit={this.handleSearchSubmit}/>
                <div className="ui grid">
                    <div className="ten wide column">
                        <CurrentVideo currVideo={this.state.currVideo}/>
                    </div>
                    <div className="six wide column">
                    <VideoList videos={this.state.videos} handleSelect={this.handleSelect}/>
                    </div>
                </div>
        
             </div>
        )
        
    }
}

export default App;