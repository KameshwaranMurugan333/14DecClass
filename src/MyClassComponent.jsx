import React from "react";

class MyClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

      render() {
        return <div>
            <h1>Class Component</h1>
            <h3>My Props</h3>
            <p>Count: {this.props.count}</p>
            <p>Name: {this.props.name}</p>
            <p>Class: {this.props.class}</p>
        </div>
    }
}

export default MyClassComponent;