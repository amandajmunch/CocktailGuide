import React, { Component } from 'react';
import Axios from 'axios';
import '../App.css';

class Details extends Component {
   constructor(props){
    super(props);
    this.state = {
      drink: []
    };
  }

  showDetails(){
      Object.filter = (obj, predicate) =>
          Object.keys(obj)
                .filter( key => predicate(obj[key]) )
                .reduce( (res, key) => (res[key] = obj[key], res), {} );

      let filtered = Object.filter(this.state.drink, item => item != null);
      let valueArray = [];

      for (let [key, value] of Object.entries(filtered)) {
        if(key.includes('strIngredient') || key.includes('strMeasure')){
          console.log(key + ' : ' + value);
           valueArray.push(value);
        }
      }

      console.log('ingredients and measurements: ' + valueArray);
      let length = valueArray.length;

      if(length % 2 !== 0){
        valueArray.push(' ');
      }

      let ingredients = valueArray.splice(0,(valueArray.length/2));
      let measurements = valueArray.splice(0,(valueArray.length));
      let ingrAndMeas = [];

      for(let i = 0; i < (length/2); i++){
        if(measurements[i] === undefined){
          measurements.splice(i,0,' yes');
        }

       ingrAndMeas.push(<p key={i}>{measurements[i]} {ingredients[i]}</p>);
      }

      return ingrAndMeas;
  }

  componentDidMount(){
    this.getDetails();
  }

  getDetails(){
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`)
      .then((response) => {
        this.setState(() => {
          return { drink: response.data.drinks[0]};
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  };


  render(){
    return(
    <div className="cocktailDetails">
     <div className="leftCocktail">
      <img src={this.state.drink.strDrinkThumb} alt="src" width="400px"/>
      <p>Ingredients</p>
      <p>Style: {this.state.drink.strCategory}</p>
     </div>
     <div className="rightCocktail">
      <h2>{this.state.drink.strDrink}</h2>
      <p>Serve in a {this.state.drink.strGlass}</p>
      <p>How to make: {this.state.drink.strInstructions}</p>
        {this.showDetails()}
     </div>
    </div>
    );
  }
}


export default Details;


