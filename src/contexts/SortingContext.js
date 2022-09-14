import React, { useState, createContext } from 'react';

export const SortingContext = createContext();

export const SortingProvider = ({ children }) => {

    const [fromNewest, setFromNewest] = useState(true);

    return (
        <div>
        <SortingContext.Provider value={{fromNewest, setFromNewest}}>
            {children}
        </SortingContext.Provider>
        </div>
    )
}
