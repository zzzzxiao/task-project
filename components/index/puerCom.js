import React, { Component, PureComponent } from 'react';
// PureComponent 如果props穿过来的值指向的同一个引用地址，不会触发更新
// class ListOfWords extends PureComponent {
//     render() {
//         const newWord = this.props.words.join(",");
//         // debugger;
//         return <div>{newWord}</div>
//     }
// }
// export default ListOfWords;
// 无状态组件不管props带过来的值是简单值还是复杂值，都会更新
function ListOfWords (props){
    console.log(111);
 return <div>{props.words.join(",")}</div>
}
export {
    ListOfWords
}