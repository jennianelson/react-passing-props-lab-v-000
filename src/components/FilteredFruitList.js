import React from 'react';

const FilteredFruitList = ({filter, fruit}) => {
  const list = !filter || filter === 'all' ? fruit : fruit.filter(i => i.fruit_type === filter);
  return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

export default FilteredFruitList;
