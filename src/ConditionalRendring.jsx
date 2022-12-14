import React from "react";

export const ConditionalRendering = (props) => {

    const giveMeTitle = () => {
        if(props.showMeTitle === true){
            return <p>{props.title}</p>
        }else if(props.showMeTitle === undefined){
            return <p>404</p>
        } else {
            return <p>Title is hidden</p>
        }
    }

    if(props.showDifferentCompoent){
        return <div>
            <h1>I am totaly Changed</h1>
        </div>
    }

    return <div>
        <h1>Conditional Rendering</h1>
        
        {/* Type 1 */}
        {props.showMeTitle ? <p>{props.title}</p> : <p>Title is hidden</p>}

        {/* Type 2 */}
        {giveMeTitle()}

        {/* Type 3 */}
        {props.showMeTitle && <p>{props.title}</p>}
    </div>
}