import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import Drinks from './Drinks';

class Category extends Component{
  constructor(){
    super();
    this.state = {
      searchOptions: "Categories",
      searchValues: "Ordinary Drink",
      options: ['Categories', 'Glass', 'Ingredients', 'Alcoholic'],
      categories: [],
      results: null
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.searchOptions !== this.state.prevState) {
      let letter = this.state.searchOptions.charAt(0).toLowerCase();
      this.getSearchValues(letter);
    }
  }

  componentDidMount(){
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
  }

  getSearchValues(letter){
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?${letter}=list`)
      .then((response) => {
        let data = response.data.drinks;
        let searchItem = [];
        data.forEach(function(item){
          searchItem.push(Object.values(item));
        })
        searchItem = searchItem.flat();
        // let category = this.state.search;
         this.setState(() => {
           return { categories: searchItem};
         })
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  handleChangeOptions(e) {
    this.setState({searchOptions: e.target.value});
  }

  handleChangeValues(e) {
    this.setState({searchValues: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();

    let letter = this.state.searchOptions.charAt(0).toLowerCase();
    let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${letter}=${this.state.searchValues}`;

    Axios.get(url)
      .then(response=>{
        this.setState({
          results: response.data.drinks
        })
      })
      .catch(function(error){
        console.log(error);
      })
  }

  render(){
    return(
      <div className="categorySearch">
        <div className="dropdowns">
         <select onChange={this.handleChangeOptions.bind(this)}>
             {this.state.options.map((option, index) =>
              <option value={option}>{option}</option>
             )}
          </select>
          <select onChange={this.handleChangeValues.bind(this)}>
             {this.state.categories.map((category, index) =>
              <option value={category}>{category}</option>
             )}
          </select>
          <button type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
        </div>
        <div className="results">
          <Drinks results={this.state.results}/>
        </div>
      </div>
    )
  }
}

export default Category;
