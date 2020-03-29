import React, { Component } from 'react';
import Axios from 'axios';

class Details extends Component {
   constructor(props){
    super(props);
    this.state = {
      results: {}
    };
  }
  // having beer with that ID render on page load
// componentDidMount(){
//     this.viewBeer();
//   }

// show individual beer from server
  // viewBeer(beerID, e){
  //   Axios.get(`https://sleepy-caverns-11180.herokuapp.com/api${this.props.location.pathname}`)
  //     .then((response) => {
  //       this.setState(() => {
  //         return { results: response.data };
  //       })
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // };

  render(){
    console.log("below are propsss");
    console.log(this.props);
    console.log(this.state.results);
    // console.log(this.state.beers.entries(this.state.beers));
    // console.log(props);
    return(
    <div className="cocktailDetails">
          //  <img src={this.state.beers.image_url} alt="a beer" className="beerImage" />

          // <div className="details">
          //   <p>Name: {this.state.beers.name}</p>
          //   <p>ABV: {this.state.beers.abv}</p>
          //   <p>IBU: {this.state.beers.ibu}</p>
          //   <p>Tagline: {this.state.beers.tagline}</p>
          //   <p>{this.state.beers.description}</p>
          //   <div>Primary Malt: {this.state.beers.malt}</div>
          //   <div>Primary Hop: {this.state.beers.hops}</div>
          //   <div>Food Pairing: {this.state.beers.food_pairing}</div>
          //   <br/>
          //   <div>Brewer's Tips: {this.state.beers.brewers_tips}</div>
          // </div>
          // <br/>

    </div>
    );
  }
}


export default Details;


