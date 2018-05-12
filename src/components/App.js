import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
    }
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchItems();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchItems = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket 
        updateFilterCallback={this.handleFilterChange} 
        filters={this.state.filters} 
        currentFilter={this.state.currentFilter} 
        fruit={this.state.fruit}
      />
    )
  }
}

export default App;
