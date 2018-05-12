import React from 'react';

const Filter =({handleChange, filters}) => {
  return (
    <select onChange={handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  );
}

Filter.defaultProps = {
  handleChange: "",
  filters: [],
}

export default Filter;
