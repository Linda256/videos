import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={term:''}
    }
    handleInput=(e)=>{
        console.log("e.target.value",e.target.value);
        this.setState({term:e.target.value})
    }

    formSubmit=(e)=>{
        e.preventDefault();
        const term=this.state.term;
        this.props.handleSearchSubmit(term)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.formSubmit}>
                    <input
                        placeholder="searchin..."
                        value={this.state.term}
                        onChange={this.handleInput}
                    >
                    </input>
                </form>
            </div>
        )
    }
}

export default SearchBar;