import React from "react";
const Repeat = props => {
    const items = [];
    const len = props.numTimes;
    for (let i=0; i < len; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
};
const List = () => <Repeat numTimes={10}>{index => <div key={index}>This is item {index} in the list</div>}</Repeat>;
export { Repeat, List };
