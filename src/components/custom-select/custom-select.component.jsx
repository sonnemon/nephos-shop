import React from 'react';
import Select from 'react-select';

const CustomSelect = ({ options, defaultValue }) => {
  return (
    <Select
      defaultValue={defaultValue}
      options={options}
      components={{
        IndicatorSeparator: () => null,
      }}
      styles={{
        control: (styles) => ({
          ...styles,
          backgroundColor: '#fff',
          border: 'none',
          height: '36px',
          fontSize: '14px',
          borderRadius: '50px',
          fontWeight: 500,
          boxShadow: 'none',
        }),
        singleValue: (provided) => ({
          ...provided,
          marginLeft: '10px',
          top: '0%',
          transform: 'translateY(0%)',
          position: 'sticky',
          color: '#666',
        }),
        placeholder: (defaultStyles) => ({
          ...defaultStyles,
          top: '0%',
          color: '#666',
          transform: 'translateY(0%)',
          position: 'sticky',
        }),
        menu: (styles) => ({
          ...styles,
          backgroundColor: '#fff',
        }),
        option: (provided, state) => ({
          ...provided,
          color: state.isSelected || state.isFocused ? 'blue' : '#888',
          backgroundColor: '#fff',
          fontSize: '14px',
        }),
      }}
    />
  );
};
export default CustomSelect;
