import React, { Component } from 'react';
import Axios from 'axios';

class Random extends Component {
  constructor(){
    super();
    this.state = {
      randomDrink: {}
    }
  }


  componentDidMount(){
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response=>{
        this.setState({
          //put in results in state results: response.data
          randomDrink: response.data.drinks[0]
        });
      })
      .catch(function(error){
        console.log(error);
      })
  }

  render(){
    return(
      <div className="random">
        <img src={this.state.randomDrink.strDrinkThumb} alt='test'/>
        <h1>{this.state.randomDrink.strDrink}</h1>
      </div>
    );
  }
}

export default Random;
