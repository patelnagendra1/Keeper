import React from 'react';


function Note(props){

    function clickAction(){
        props.clickbutton(props.id)
    }

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p> 
            <button onClick={clickAction}>Delete</button>
        </div>
    )
}

export default Note;