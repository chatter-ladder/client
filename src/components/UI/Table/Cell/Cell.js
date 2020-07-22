import React from 'react';

import classes from './Cell.module.css';

const Cell = (props) => {

  let headerStyle = () => {
    let style = [classes.Header]
    if (props.fixed) {
      style.push(classes.FixedCell)
    } else {
      style.push(classes.Body)
    }
    return style.join(" ")
  }

  let contentStyle = () => {
    let style = [classes.Content]
    if (props.fixed) {
      style.push(classes.FixedCell)
    } else {
      style.push(classes.Body)
    }
    return style.join(" ")
  }
 
  return (
    props.header
    ? (
      <th className={headerStyle()}>
        {props.content}
      </th>
    ) : (
      <th className={contentStyle()}>
        {props.content}
      </th>
    )
  );
}

export default Cell;
