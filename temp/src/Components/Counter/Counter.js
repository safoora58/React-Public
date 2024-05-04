import React from "react";
import './Counter.css';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.start || 0,
            rangeClass: this.getRangeClass(props.start || 0), // Calculate initial class
        };
    }

    // Helper function to determine range class based on count
    getRangeClass(count) {
        if (count >= 10) return "max";
        if (count < 5) return "min";
        return "normal";
    }

    // Function to increment count and update range class
    incrementCount = (event, num1, num2) => {
        if (this.state.count >= this.props.end) return;
        this.setState((prevState) => ({
            count: prevState.count + 1,
            rangeClass: this.getRangeClass(prevState.count + 1),
        }));
        console.log(num1, num2);
        console.log(event);
    }

    // Function to decrement count and update range class
    decrementCount = () => {
        if (this.state.count <= 0) return;
        this.setState((prevState) => ({
            count: prevState.count - 1,
            rangeClass: this.getRangeClass(prevState.count - 1),
        }));
    }

    render() {
        const { count, rangeClass } = this.state;
        return (
            <div className="Counter">
                <div className="counter-container">
                    <h1 className={rangeClass}>Counter</h1>
                    <h2>{count}</h2>
                    <nav>
                        <button onClick={(event) => this.incrementCount(event,1, 2)}>Add Count</button>
                        <button onClick={this.decrementCount}>Lower Count</button>
                    </nav>
                </div>
            </div>
        );
    }
}
