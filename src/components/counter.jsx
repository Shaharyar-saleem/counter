import React, { Component } from 'react';
class Counter extends Component {
    state={
        count: 0
    }
    render() { 
    return <div><span>{this.countingFucntion()}</span><button>Increment</button></div>;
    }

    countingFucntion(){
        return this.state.count === 0 ? 'zero' : this.state.count;
    }
}
 
export default Counter;
