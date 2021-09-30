import React, { Component } from "react";
import styles from "./app.css";
import secret from "./secret.scss";
import CSSModules from "react-css-modules";
import Handsontable from "handsontable";
// import './secret.scss';
import { findDOMNode } from "react-dom";
// import doAjax from './util/fetch';
// import {doAjax} from './util/fetch';
import * as pi from "./util/fetch";
import "./util/mock";
import ExampleComponent from "./tableExmaple";
import { Repeat, List } from "./customComponent";
class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        pi
            .doAjax({
                url: "/getUser",
                method: "get"
            })
            .then(response => {
                // debugger;
                console.log(response);
            });
        // alert(pi.PI)
        const El = findDOMNode(this);
        console.log(El);
        // console.log(this.refs.name.value);
        // table 例子
        var data = [["", "Tesla", "Volvo", "Toyota", "Honda"], ["2017", 10, 11, 12, 13], ["2018", 20, 11, 14, 13], ["2019", 30, 15, 12, 13]];

        // var container = document.getElementById('example');
        const container = this.example;
        var hot = new Handsontable(container, {
            data: data,
            rowHeaders: true,
            colHeaders: true
        });
    }

    render() {
        const isOverflow = true;
        const expand = false;
        return (
            <div styleName="title">
                局部css样式
                <div styleName="title">
                    全局css样式
                    <input placeholder="请输入名称" ref="name" defaultValue="张三" />
                </div>
                {/* <div className={`${style.item} ${style.item1} font`}>
            item1
          </div> */}
                <div styleName="name">
                    <a href="http://baidu.com">百度</a>
                </div>
                <div styleName="example">
                    <div
                        ref={ref => {
                            this.example = ref;
                        }}
                    />
                </div>
                <div styleName="example">
                    <ExampleComponent />
                </div>
                <div>
                    <p>调用 props.children 来获得传递的子代：</p>
                    <List />
                </div>
            </div>
        );
    }
}
export default CSSModules(App, styles);
