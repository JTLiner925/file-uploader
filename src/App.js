import React, { Component } from 'react';
import './App.css';
import SearchBar from './searchBar/SearchBar';
import FilterableList from './filterableList/FilterableList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <FilterableList files={this.props.files} />
      </div>
    );
  }
}

export default App;