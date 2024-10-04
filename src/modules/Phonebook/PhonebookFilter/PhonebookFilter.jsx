import React from 'react';

export const PhonebookFilter = ({ filter, handleChange }) => {
  return (
    <label>
      Filter
      <input onChange={handleChange} type="text" name="filter" value={filter} />
    </label>
  );
};

export default PhonebookFilter;
