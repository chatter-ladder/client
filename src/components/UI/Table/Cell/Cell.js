import React from 'react';

import classes from './Cell.module.css';

const Cell = (props) => {
  return (
    props.header
    ? (
      <th className={classes.Header}>
        {props.content}
      </th>
    ) : (
      <th className={classes.Content}>
        {props.content}
      </th>
    )
  );
}

export default Cell;
