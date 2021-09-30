import React, { Component } from 'react';

import {ListOfWords} from './puerCom';
import Name from './name'

class WordAdder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ["marklar"],
            info:{name:'zhangsan', age:20},
            name:'zhangsan'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // This section is bad style and causes a bug
        const {words, info} = this.state;
        words.push("marklar");
        info.age = 50;
        console.log(words);
        this.setState({ words, info });
        // this.setState(prevState => ({
        //     words: prevState.words.concat(['marklar'])
        //   }));
        // this.setState(prevState=>{
        //     words: prevState.words.push('marklar')
        // });
    }
    handleChange(e){
        this.setState({
            name: e.target.value
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}> 点击改变</button>
                <input onChange={this.handleChange.bind(this)} />
                <ListOfWords words={this.state.words} />
                <Name name={this.state.name} info={this.state.info}/>
            </div>
        );
    }
}
export default WordAdder;
