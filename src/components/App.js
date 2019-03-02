import React from 'react';

import SearchBar from './SearchBar';
import CurrentVideo from './CurrentVideo';
import VideoList from './VideoList';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            videos:[],
            
        }
    }

    handleSearchSubmit=(term)=>{
        console.log("term in App",term);
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