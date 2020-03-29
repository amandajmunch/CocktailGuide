import React, { Component } from 'react';
import Axios from 'axios';


class SearchResult extends Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      search:"",
      results: null
    }
  }

 // componentDidMount(){
 //    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.search}`)
 //      .then(response=>{
 //        this.setState({
 //          results: response.data
 //        });
 //      })
 //      .catch(function(error){
 //        console.log(error);
 //      })
 //  }

  renderCocktails(){
     if(this.state.results){
       return this.state.results.drinks.map((result,index)=>{
        return ([
          <img key={index} src={result.strDrinkThumb} />,
          <p key={result.idDrink}> {result.strDrink} </p>
          ]);
      });
    }
  }

  render() {
    return (
      <div className="searchResults">
      <h1>this is a result</h1>
    </div>
    );
  }
}

export default SearchResult;
