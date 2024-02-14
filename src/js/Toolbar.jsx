import React from 'react';
import '../css/toolbar.css'

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="toolbar">
      {filters.map(filter => (
        <button
          key={filter}
          className={filter === selected ? 'selected' : ''}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;