import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


class Drinks extends Component{
  constructor(props){
    super(props);
    this.state = {
      results: null
    }
  }

    componentDidMount(props){
     if(this.props.results !== null){
       this.setState({
          results: this.props.results
        });
     }
     else{
      console.log('empty objects');
      console.log('here are props: ' + this.props);
     }
    }

  componentWillReceiveProps(nextProps){
     if(nextProps.results !== this.props.results){
       this.setState({
        results: nextProps.results
        });
       console.log('next props: ' + nextProps);
     }
    }

  renderCocktails(){
     if(this.state.results){
       return this.state.results.map((result,index)=>{
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
    // console.log('state:'  + this.state.results);
    return (
      <div className="Drinks">
        {this.renderCocktails()}
      </div>
    );
  }
}

export default Drinks;
