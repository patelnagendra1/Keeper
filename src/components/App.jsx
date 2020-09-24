import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    
    const [notearr,setnotearr] = useState([]);

    function add(newnote){
         
        setnotearr(prevnotearr => {
            return [...prevnotearr,newnote]
        })
        
    }

    function deletenote(id){
        
        setnotearr(prevnotearr => {
            return prevnotearr.filter((item,index) => {
                return index!==id
            })
        })
    }

  return (
    <div>
      <Header />
      <CreateArea 
        addnote={add}
      />
      {notearr.map((noteitem,index) => {
          return(
          <Note 
            key={index}
            id={index} 
            title={noteitem.title} 
            content={noteitem.content}
            clickbutton={deletenote}     
          />)
      })
      }
      <Footer />
    </div>
  );
}

export default App;