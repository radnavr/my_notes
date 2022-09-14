import React from "react";

import { NotesProvider } from "./contexts/NotesContext";
import { SearchProvider } from "./contexts/SearchContext";
import { SortingProvider } from "./contexts/SortingContext";

import Controls from "./components/Controls";
import NoteList from "./components/NoteList";
import CreateNote from "./components/CreateNote";

function App() {

  return (
    <div>
      <NotesProvider>
        <SearchProvider>
          <SortingProvider>
            <Controls />
            <NoteList />
          </SortingProvider>
        </SearchProvider>
        <CreateNote />
      </NotesProvider>
    </div>
  );
}

export default App;