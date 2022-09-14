import React, { useState, useContext } from 'react'
import { nanoid } from "nanoid";

import { NotesContext } from "../contexts/NotesContext";

import { MdCheck } from "react-icons/md";
import { MdCreate } from "react-icons/md";
import TextareaAutosize from 'react-textarea-autosize';

const CreateNote = () => {

  const {notes, setNotes} = useContext(NotesContext);

  const [newNoteText, setNewNoteText] = useState("");

  const handleNewText = (event) => {
          setNewNoteText(event.target.value);
  }

  const handleSaveClick = () => {
    if(newNoteText.trim().length > 0) {
      handleAddNewNote(newNoteText);
      setNewNoteText("");
    }
  }

  const handleAddNewNote = (newNoteText) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      date: date.getTime(),
      text: newNoteText,
    }
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
    localStorage.setItem("my_notes_key",JSON.stringify(newNotes))
  }

  return (
    <div className="bottom-fixed">
      <div className="flex-center--vertical">
        <div className="side-indent--sm"></div>
        <div className="flex-end--vertical border--around-within">
          <div className="input-container">
            <div className="flex-end--vertical">
              <MdCreate className="icon" size={20}/>
              <TextareaAutosize
                className="textarea"
                value={newNoteText}
                onChange={handleNewText}
                placeholder="Write..."
              />
            </div>
          </div>
          <div className="btn-like pointer-cursor" onClick={handleSaveClick}>
            <span><strong>CREATE</strong></span>
            <MdCheck className="icon"  size={20}/>
          </div>
        </div>
        <div className="side-indent--sm"></div>
      </div>
      <div className="horizontal-indent"></div>
    </div>
  )
}

export default CreateNote
