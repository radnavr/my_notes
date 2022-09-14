import React, { useContext } from 'react';
import { NotesContext } from "../contexts/NotesContext";
import { MdClose } from "react-icons/md"

const Note = ({ date, id, text }) => {

  const {notes, setNotes} = useContext(NotesContext);

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem("my_notes_key",JSON.stringify(newNotes));
  }


  return (
      <div className="note border--around-within">
          <div className="note-header border--bottom">
              <span className="note-date"><strong>{date}</strong></span>
              <MdClose 
                className="icon pointer-cursor" 
                onClick={() => handleDeleteNote(id)} 
              />
          </div>
          <p className="note-text">{text}</p>
      </div>
  )
}

export default Note
