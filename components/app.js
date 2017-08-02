import React, { Component } from 'react';
import style from './app.css';
// import style from './App.css';
import { findDOMNode } from 'react-dom';
// import doAjax from './util/fetch';
// import {doAjax} from './util/fetch';
import * as pi from './util/fetch';
import './util/mock'
// const App = () => (
//   <div className="app">
//     <h2>Hello,good girl,my love is you !!vvvv</h2>
//   </div>
// );

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    pi.doAjax({
      url: '/getUser',
      method: 'get'
    }).then(response => {
      // debugger;
      console.log(response);
    });
    // alert(pi.PI)
    const El = findDOMNode(this);
    console.log(El);
    // console.log(this.refs.name.value);
  }
  
  render() {
    const isOverflow = true;
    const expand = false;
    return (
      <div className={style.title}>
        局部css样式
        <div className="title">
          全局css样式
          <input placeholder="请输入名称" ref="name" defaultValue="张三" />
        </div>
        <div>
          <div className={`${style.item} ${style.item1} font`}>
            item1
          </div>
        </div>
      </div>
     
    );
  }
};