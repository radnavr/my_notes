import React, { useState, createContext } from 'react';

export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {

    const [searchedText, setSearchedText] = useState("");

    return (
        <div>
        <SearchContext.Provider value={{searchedText, setSearchedText}}>
            {children}
        </SearchContext.Provider>
        </div>
    )
}
