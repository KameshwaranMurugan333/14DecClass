import React from "react";

export const MyFunctionalComponent = (props) => {

    return <div>
        <h1>Functional Component</h1>
        <h3>My Props</h3>
        <p>Count: {props.count}</p>
        <p>Name: {props.name}</p>
        <p>Class: {props.class}</p>
    </div>
}