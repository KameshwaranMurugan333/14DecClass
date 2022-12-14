import React from "react";

export const EventHandling = (props) => {

    const onBtnClick = (e) => {
        console.log('e:', e)
    }

    const onBtn2Click = (message) => {
        console.log(message, " - Welcome to ReactJS Class")
    }

    return <div>
        <h1>Event Handling</h1>
        <button id="myBtn" onClick={onBtnClick} >Click Me</button>
 
        <button id="myBtn2" onClick={() => onBtn2Click("Kamesh")} >Clike Me Again</button>
    </div>
}