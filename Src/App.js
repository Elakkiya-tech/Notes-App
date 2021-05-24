import React, { useState } from 'react';
import Area from './Components/Area';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Note from './Components/Note';
import './App.css';

function App() {
  const[notes, setNotes]= useState([]);
  function addnote(newnote)
  {
   setNotes(prevnotes => {
     return[...prevnotes,newnote];
   })
  }
  function deleteNote(id)
  {
    setNotes(prevnotes => {
      return prevnotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="App">
    <Header />
    <Area onadd={addnote} />
    {notes.map((noteItem, index) =>
    {
      return <Note
    key={index}
    id={index} 
    onDelete ={deleteNote}
    title={noteItem.title}
    content={noteItem.content} />
    
    })}
    <Footer />
    
      
    </div>
  );
}

export default App;
