import React, { Component } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";


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
          //put in results in state results: response.data
          results: response.data
        })
        console.log('response options: ', response);
        })
        .catch(function(error){
          console.log(error);
        })
  }


  handleClick(){
    useHistory.push('/results');
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
            <input type="submit" value="Submit" onClick={this.handleClick.bind(this)}/>
          </form>
        </div>
      </div>
    )
  }
}

export default Search;
