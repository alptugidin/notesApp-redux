import React from 'react';
import { Provider } from 'react-redux';
import SearchBox from '@/components/SearchBox';
import TextArea from '@/components/TextArea';
import NoteList from '@/components/NoteList';
import { store } from '@/redux/store';

function NotesApp() {
  return (
    <div className="container mx-auto p-10">
      <p className="text-center text-5xl text-green-400 opacity-60 font-semibold">NotesApp</p>
      <Provider store={store}>
        <TextArea />
        <SearchBox />
        <NoteList />
      </Provider>
    </div>
  );
}

function App() {
  return <NotesApp />;
}

export default App;
