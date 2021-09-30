import React, { Component } from 'react';
class Name extends Component {
    render() {
        const name = this.props.name;
        const age = this.props.info.age;
        return <div>My name is :{name} age is {age}</div>
    }
}
export default Name;