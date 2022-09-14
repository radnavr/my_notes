import React, {useState, createContext} from 'react';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {

    const [notes, setNotes] = useState([]);

    return (
        <div>
            <NotesContext.Provider value={{notes, setNotes}}>
                {children}
            </NotesContext.Provider>
        </div>
    )
}
