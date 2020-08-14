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
    // console.log(this.state.cellHeights)
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
    // console.log(`rowIndex: ${rowIndex}`)
    // console.log(this.state.cellHeights[rowIndex + 1])
    return (
      <tr key={rowIndex}>
        <Cell
          key={`${rowIndex}-${1}`}
          content={row.word}
          header={false}
          fixed={true}
          height={this.state.cellHeights[rowIndex + 1]}
        />
        <Cell
          key={`${rowIndex}-${2}`}
          content={row.translation}
          header={false}
          fixed={false}
          height={this.state.cellHeights[rowIndex + 1]}
        />
        <Cell
          key={`${rowIndex}-${3}`}
          content={''}
          header={false}
          fixed={false}
          height={this.state.cellHeights[rowIndex + 1]}
        />
        <Cell
          key={`${rowIndex}-${4}`}
          content={row.progress}
          header={false}
          fixed={false}
          height={this.state.cellHeights[rowIndex + 1]}
        />
        {/* {row.map((content, contentIndex) => {
          return (
            <Cell
              key={`${rowIndex}-${contentIndex}`}
              content={content}
              header={false}
              fixed={contentIndex === 0}
              height={this.state.cellHeights[rowIndex + 1]}
            />
          )
        })} */}
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

    // const bodyRows = (
    //   this.props.rows.map((row, rowIndex) => {
    //     return (
    //       <tr key={rowIndex}>
    //         {row.map((content, contentIndex) => this.renderBodyRow(content, rowIndex, contentIndex))}
    //       </tr>
    //     )
    //   })
    // );

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
