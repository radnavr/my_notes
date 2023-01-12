import React, { useContext, useEffect } from 'react';

import { NotesContext } from "../contexts/NotesContext";
import { SearchContext } from "../contexts/SearchContext";
import { SortingContext } from '../contexts/SortingContext';

import Note from './Note';

const NoteList = ({ handleDeleteNote }) => {

  const {notes, setNotes} = useContext(NotesContext);
  const {searchedText, setSearchedText} = useContext(SearchContext);
  const {fromNewest, setFromNewest} = useContext(SortingContext);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("my_notes_key"));
    if (savedNotes && savedNotes.length > 0)  { //??
      setNotes(savedNotes);
    }
  }, [fromNewest]);

  return (
    <div className="flex-center--vertical">
      <div className="side-indent--lg"></div>
      <div className="note-container border--on-sides-within">
          {notes
            .filter((note) => note.text.toLowerCase().includes(searchedText))
            .map((note) => (
              <Note
                key={note.id}
                id={note.id}
                text={note.text}
                date={new Date(note.date).toLocaleDateString()}
                handleDeleteNote={handleDeleteNote}
              />
            ))
          }
      </div>
      <div className="side-indent--lg"></div>
    </div>
  )
}

export default NoteList
