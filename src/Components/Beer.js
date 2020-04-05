import React, { Component } from 'react';
import Axios from 'axios';

class Beer extends Component{
  constructor(){
    super();
    this.state = {
      results: null
    }
  }

 componentDidMount(){
  Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer')
    .then(response=>{
      this.setState({
        results: response.data
      });
    })
    .catch(function(error){
      console.log(error);
    })
 }


 renderBeers(){
  if(this.state.results){
    return this.state.results.drinks.map((result,index)=>{
      return ([
        <img key={index} src={result.strDrinkThumb} alt="alt" />,
        <p key={result.idDrink}> {result.strDrink} </p>
        ]);
    });
  }
 }

  render() {
    return (
      <div className="beers">
        <h1>this is beer</h1>
        {this.renderBeers()}
      </div>
    );
  }
}

export default Beer;
