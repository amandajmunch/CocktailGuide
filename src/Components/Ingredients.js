import React, { Component } from 'react';
import Axios from 'axios';

class Ingredients extends Component{
  constructor(){
    super();
    this.state = {
      search: "",
      ingredients: [],
      results: {}
    }
  }

  componentDidMount(){
    this.getIngredients();
  }

  getIngredients(){
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then((response) => {
        this.setState(() => {
          return { ingredients: response.data.drinks};
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  };


  handleChange(e) {
    this.setState({search: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.search}`)
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

  render(){
    return(
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
    )
  }
}

export default Ingredients;
