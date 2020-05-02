import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


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
          <div className="eachCocktail">
            <Link to={'/recipe/'+ result.idDrink} result={result}><img key={index} src={result.strDrinkThumb} alt="alt" width="200px"/></Link>
            <Link to={'/recipe/'+ result.idDrink} result={result}><strong>{result.strDrink}</strong></Link>
          </div>
          ]);
      });
    }
  }

  render() {
    return (
      <div className="searchResults">
      {this.renderCocktails()}
    </div>
    );
  }
}

export default SearchResult;
