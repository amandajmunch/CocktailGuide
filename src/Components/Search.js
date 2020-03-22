import React from 'react';
import Axios from 'axios';

class Search extends Component{
  constructor(){
    super();
    this.state = {
      search: "",
      results: {}
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
        })
        .catch(function(error){
          console.log(error);
        })
      })
  }

  render(){
    return(
      <div classname="search">
      </div>
    )
  }
}

export default Search;
