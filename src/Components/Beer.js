import React, { Component } from 'react';
import Axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

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
        <div className="eachBeer">
          <img key={index} src={result.strDrinkThumb} alt="alt" width="200px" />
          <Link to={'/recipe/'+ result.idDrink} result={result}><strong>{result.strDrink}</strong></Link>
        </div>
        ]);
    });
  }
 }

  render() {
    return (
      <div className="beers">
        {this.renderBeers()}
      </div>
    );
  }
}

export default Beer;
