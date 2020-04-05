import React, { Component } from 'react';

class Details extends Component {
   constructor(props){
    super(props);
    this.state = {
      results: {}
    };
  }

  render(){
    console.log("below are propsss");
    console.log(this.props);
    return(
    <div className="cocktailDetails">
      // strDrink, strCategory, strGlass, strDrinkThumb, strIngredient1 (to 4??), strMeasure1 (to 4+) strInstructions,
    </div>
    );
  }
}


export default Details;


