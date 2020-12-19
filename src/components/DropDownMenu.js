import React, { useState } from "react";
import Select from "react-select";




export const DropDownMenu = React.forwardRef((props, ref) => {



  let optionList = props.optionValues.length > 0
    && props.optionValues.map((item, i) => {
      return (
        <option key={i} value={item[props.option]}>{item[props.option]} </option>
      )
    }, this);


  return (
    <>
      <select
        onChange={props.handleChange}
        ref={ref}
        className='text-gray-800 text-sm'
      >
        <option value="default">{props.defaultValue} |</option>
        {optionList}

      </select>

    </>
  );
})


export default DropDownMenu