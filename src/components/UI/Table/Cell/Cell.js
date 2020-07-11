import React from 'react';

const Cell = () => {
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
    );
  );
}

export default Cell;
