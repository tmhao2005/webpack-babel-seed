import React from "react";
import BaseSelect, { Option, SelectProps } from "rc-select";
import "rc-select/assets/index.less";

import "./index.css";

interface Props extends SelectProps {
  options: any[];
}

export const Select = React.forwardRef<any, Props>((props, ref) => {
  const { options, value, menuItemSelectedIcon, ...other } = props;
  return (
    <>
      <BaseSelect
        ref={ref}
        value={value}
        menuItemSelectedIcon={menuItemSelectedIcon}
        {...other}
      >
        {options.map((option) => {
          return (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          );
        })}
      </BaseSelect>
    </>
  );
});

Select.defaultProps = {
  value: undefined,
  menuItemSelectedIcon: null
};

export const ReactSelectTestComponent = (props: any) => {
  const { options } = props;

  const onChange = (event: any) => {
    if (props.onChange) {
        props.onChange(event);
    }
  };

  return (
    <div data-testid="my-select-component">
      <Select
        menuItemSelectedIcon={() => null}
        className="basic-single"
        placeholder="Select an option"
        options={options}
        onChange={onChange}
      />
    </div>
  );
};
