import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import Drinks from './Drinks';

class Category extends Component{
  constructor(){
    super();
    this.state = {
      search: "",
      options: ['Categories', 'Glass', 'Ingredients', 'Alcoholic'],
      categories: [],
      glass:[],
      ingredients:[],
      alcoholic:[],
      results: null
    }
  }

   componentDidMount(){
    this.getIngredients();
  }

  getIngredients(){
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((response) => {
        let data = response.data.drinks;
        let categories = [];
        data.forEach(function(item){
          categories.push(Object.values(item));
        })
        categories = categories.flat();
         this.setState(() => {
           return { categories: categories};
         })
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  handleChange(e) {
    this.setState({search: e.target.value});
    // console.log(e.target.value);
  }

  handleSubmit(e){
    e.preventDefault();
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${this.state.search}`)
      .then(response=>{
        this.setState({
          //put in results in state results: response.data
          results: response.data.drinks
        })
        console.log('this.state.results: ', this.state.results);
      })
      .catch(function(error){
        console.log(error);
      })
    // console.log('hit');
  }

// category, glass, ingredients, alcoholic
  render(){
    return(

      <div className="categorySearch">
       <select onChange={this.handleChange.bind(this)}>
           {this.state.options.map((option, index) =>
            <option value={option}>{option}</option>
           )}
        </select>
        <select onChange={this.handleChange.bind(this)}>
           {this.state.categories.map((category, index) =>
            <option value={category}>{category}</option>
           )}
        </select>
        <button type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
        <Drinks results={this.state.results}/>
      </div>

    )
  }
}

export default Category;
