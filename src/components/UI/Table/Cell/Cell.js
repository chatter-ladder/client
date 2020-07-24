import React from 'react';

import classes from './Cell.module.css';

const Cell = (props) => {

  let cellStyle = () => {
    let style = [];
    if (props.header) {
      style = [classes.Header]
    } else {
      style = [classes.Content]
    }

    if (props.fixed) {
      style.push(classes.FixedCell)
    } else {
      style.push(classes.Body)
    }

    return style.join(" ");
  }
 
  const cellHeight = props.height ? { height: `${props.height}px`} : undefined;

  return (
      <th className={cellStyle()} style={cellHeight}>
        {props.content}
      </th>
  );
}

export default Cell;
