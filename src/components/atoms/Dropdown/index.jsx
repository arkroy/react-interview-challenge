/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

// TODO: Write a function to consume an array and prepopulate select options in the dropdown
const Dropdown = ({ label, selectedValue, handleChange }) => {
  return (
    <>
      <InputLabel htmlFor={`${label}-native-simple`}>{label}</InputLabel>
      <Select
        native
        value={selectedValue}
        onChange={handleChange}
        inputProps={{
          name: `${label}`,
          id: `${label}-native-simple`,
        }}
      >
       <option value='HW'>
          'HELLO WORLD'
        </option>
      </Select>
    </>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Dropdown;
