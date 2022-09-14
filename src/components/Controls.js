import React, { useContext } from 'react';

import { NotesContext } from '../contexts/NotesContext';
import { SearchContext } from '../contexts/SearchContext';
import { SortingContext } from '../contexts/SortingContext';

import { MdSearch } from "react-icons/md";
import { MdFilterList } from "react-icons/md";

const Controls = () => {

  const {notes, setNotes} = useContext(NotesContext);
  const {searchedText, setSearchedText} = useContext(SearchContext);
  const {fromNewest, setFromNewest} = useContext(SortingContext);

  
  const handleSorting = () => {

    setFromNewest(!fromNewest);

    if (fromNewest) {
      let wantedSorting = notes.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });

      localStorage.setItem("my_notes_key",JSON.stringify(wantedSorting));
      setNotes(wantedSorting);
    }

    if (!fromNewest) {
      let wantedSorting = notes.sort((a, b) => {
        return new Date (b.date) - new Date(a.date);
      })

      localStorage.setItem("my_notes_key",JSON.stringify(wantedSorting));
      setNotes(wantedSorting);
    }

  }

  return (
    <div>
      <div className="horizontal-indent"></div>
      <div className="flex-center--vertical">
        <div className="side-indent--sm"></div>
        <div className="flex-center--vertical border--around-within">
          <div className="input-container">
            <MdSearch className="icon" size={20}/>
            <input
              type={"text"}
              placeholder="Search..."
              onChange={(event) => setSearchedText(event.target.value)}
            />
          </div>
          <div onClick={handleSorting} className="btn-like pointer-cursor">
            <span><strong>{fromNewest ? "NEWEST" : "OLDEST"}</strong></span>
            <MdFilterList className="icon" size={20}/>
          </div>
        </div>
        <div className="side-indent--sm"></div>
      </div>
    </div>
  )
}

export default Controls
