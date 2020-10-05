import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getPopularMovies, // those are action creators, which contain action type and payload 
  showLoadingSpinner,
  searchMovies,
  clearMovies,
  loadMoreMovies
} from '../actions';

import Home from '../components/Home/Home';

class HomeContainer extends Component {
  componentDidMount() { // react life-cycle hooker
    this.getMovies();
  }

  getMovies = () =>{
    this.props.showLoadingSpinner();
    this.props.getPopularMovies();
  }

  searchMovies = searchTerm => {
    this.props.clearMovies();
    this.props.showLoadingSpinner();
    this.props.searchMovies(searchTerm);
  }

  loadMoreMovies = () => {
    const { searchTerm, currentPage } = this.props; 
    this.props.showLoadingSpinner();
    this.props.loadMoreMovies(searchTerm, currentPage);
  }

  render() {
    return(
      <Home 
        { ...this.props }
        searchMovies = {this.searchMovies}
        loadMoreMovies = {this.loadMoreMovies}
      /> 
    );
  }
};

const mapStateToProps = state => {
  return state.home; // it stands for the home_reducer.js in the reducers folder 
};

const mapDispatchToProps =  {
  getPopularMovies, // they stand for the action creators from the action.js file 
  showLoadingSpinner,
  searchMovies,
  clearMovies,
  loadMoreMovies
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer); // it is high order function, in that way the HomeContainer is connected to the redux store