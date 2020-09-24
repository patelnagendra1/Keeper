import React,{useState} from "react";

function CreateArea(props) {

  const [note,setnote]=useState({
    title:"",
    content:""
  })

  function handleChange(event){
     const {name,value} = event.target;

    setnote(prevnote => {
        return{
          ...prevnote,
          [name]:value
        }
    })
  }

function handleClick(event){
  props.addnote(note)
  setnote({
    title:"",
    content:""
  })
  event.preventDefault()
 
 
}

  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
