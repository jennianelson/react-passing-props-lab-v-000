import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({updateFilterCallback, filters, currentFilter, fruit}) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={updateFilterCallback} filters={filters} />
      <FilteredFruitList
        filter={currentFilter} fruit={fruit} />
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {},
}

export default FruitBasket;
