import React, {Component} from 'react';
import HotTable from 'react-handsontable';

export default class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handsontableData = [
      ["", "Ford", "Volvo", "Toyota", "Honda"],
      ["2016", 10, 11, 12, 13],
      ["2017", 20, 11, 14, 13],
      ["2018", 30, 15, 12, 13]
    ];
  }

  render() {
    return (
      <div id="example-component">
        <HotTable root="hot" data={this.handsontableData} colHeaders={true} rowHeaders={true} width="600" height="300" stretchH="all" />
      </div>
    );
  }
}