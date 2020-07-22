import React, { Component } from 'react';

import classes from './Table.module.css';
import Cell from './Cell/Cell';

class Table extends Component {

  renderHeadingRow = (content, colIndex) => {
    return (
      <Cell
        key={content}
        content={content}
        header={true}
        fixed={colIndex === 0}
      />
    )
  }

  renderBodyRow = (content, rowIndex, contentIndex) => {
    // console.log(rowIndex)
    // console.log(contentIndex)
    return (
      <Cell
        key={`${rowIndex}-${contentIndex}`}
        content={content}
        header={false}
        fixed={contentIndex === 0}
      />
    )
  }

  render () {
    const headingRows = (
      <tr>
        {this.props.headings.map((heading, colIndex) => this.renderHeadingRow(heading, colIndex))}
      </tr>
    )

    const bodyRows = (
      this.props.rows.map((row, rowIndex) => {
        return (
          <tr key={rowIndex}>
            {row.map((content, contentIndex) => this.renderBodyRow(content, rowIndex, contentIndex))}
          </tr>
        )
      })
    );

    return (
      <div className={classes.Container}>
        <div className={classes.ScrollContainer}>
          <table className={classes.Table}>
            <thead>{headingRows}</thead>
            <tbody>{bodyRows}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
