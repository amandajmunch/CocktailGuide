import React, { Component } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom';

class Search extends Component{
  constructor(){
    super();
    this.state = {
      search: "",
      results: null
    }
  }

  handleChange(e) {
    this.setState({search: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.search}`)
      .then(response=>{
        this.setState({
          results: response.data
        })
      })
      .catch(function(error){
        console.log(error);
      })
  }

  showResults(){
    if(this.state.results){
      return(
       <Redirect to={{
          pathname: '/results',
          state: { results: this.state.results }
        }}/>
      );
    }
    if(this.state.results === null){
      console.log('no results');
    }
  }


  render(){
    return(
      <div className="searchPage">
        <div className="search">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text"
              className="searchfield"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleChange.bind(this)}
            />
            <input type="submit" value="Submit"/>
          </form>
        </div>
        {this.showResults()}
      </div>
    )
  }
}

export default Search;
