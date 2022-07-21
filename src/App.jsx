import React from 'react';
import SearchBox from '@/components/SearchBox';
import TextArea from '@/components/TextArea';

function NotesApp() {
  return (
    <div>
      <p className="text-center text-5xl text-gray-400 font-semibold">NotesApp</p>
      <SearchBox />
      <TextArea />
    </div>
  );
}

function App() {
  return (
    <div className="container mx-auto p-10">
      <NotesApp />
    </div>
  );
}

export default App;
