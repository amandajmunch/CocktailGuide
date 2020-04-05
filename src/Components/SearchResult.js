import React, { Component } from 'react';


class SearchResult extends Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      search:"",
      results: props.location.state.results
    }
  }

   componentWillReceiveProps(nextProps){
     if(nextProps.location.state.results !== this.props.location.state.results){
       this.setState({
        results: nextProps.location.state.results
        });
       console.log(nextProps);
     }
    }

  renderCocktails(){
     if(this.state.results){
       return this.state.results.drinks.map((result,index)=>{
        return ([
          <img key={index} src={result.strDrinkThumb} alt="alt"/>,
          <p key={result.idDrink}> {result.strDrink} </p>
          ]);
      });
    }
  }

  render() {
    return (
      <div className="searchResults">
      <h1>this is a result</h1>
      {this.renderCocktails()}
    </div>
    );
  }
}

export default SearchResult;
