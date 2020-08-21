import React, { Component } from 'react';

import classes from './Table.module.css';
import Cell from './Cell/Cell';

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cellHeights: []
    }
    this.tableRef = React.createRef();
  }

  componentDidMount() {
    this.cellHeightResizeHandler();
  }

  renderHeadingRow = (content, colIndex) => {
    return (
      <Cell
        key={content}
        content={content}
        header={true}
        fixed={colIndex === 0}
        height={this.state.cellHeights[0]}
      />
    )
  }

  renderBodyRow = (row, rowIndex) => {
    return (
      <tr key={rowIndex}>
        {row.map((content, contentIndex) => {
          return (
            <Cell
              key={`${rowIndex}-${contentIndex}`}
              content={content}
              header={false}
              fixed={contentIndex === 0}
              height={this.state.cellHeights[rowIndex + 1]}
            />
          )
        })}
      </tr>
    )
  }

  getTallestCellHeights = () => {
    const rows = Array.from(this.tableRef.current.getElementsByTagName('tr'));
    let {heights} = this.state;
    
    (heights = rows.map((row) => {
      const fixedCell = (row.childNodes)[0];
      return Math.max(row.clientHeight, fixedCell.clientHeight);
    }));

    return heights;
  }

  cellHeightResizeHandler = () => {
    this.setState({cellHeights: this.getTallestCellHeights()});
  }

  render () {
    const headingRows = (
      <tr>
        {this.props.headings.map((heading, colIndex) => this.renderHeadingRow(heading, colIndex))}
      </tr>
    )

    const bodyRows = this.props.rows.map(this.renderBodyRow)

    return (
      <div className={classes.Container}>
        <div className={classes.ScrollContainer}>
          <table className={classes.Table} ref={this.tableRef}>
            <thead>{headingRows}</thead>
            <tbody>{bodyRows}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
