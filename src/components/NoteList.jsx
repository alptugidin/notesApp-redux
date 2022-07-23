import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Note from '@/components/Note';
import { getAsyncNotes } from '@/redux/noteSlice';

function NoteList() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.note.items);

  useEffect(() => {
    dispatch(getAsyncNotes());
    const draggableNotes = document.querySelectorAll('.note');

    draggableNotes.forEach((note) => {
      note.addEventListener('dragstart', (e) => {
        console.log(e);
      });
    });
  }, []);

  return (
    <div className="flex mt-10 gap-3 w-[800px] mx-auto">

      <div className="bg-white rounded-lg w-1/3 shadow h-fit min-h-[100px]">

        <div className="bg-green-300 rounded-t-lg shad">
          <p className="text-lg text-gray-600 text-center">To Do</p>
        </div>
        <div className="p-2 flex flex-wrap gap-2">
          {notes.map((note) => (
            <Note key={note.id} data={note} />
          ))}
        </div>

      </div>

      <div className="bg-white rounded-lg w-1/3 shadow h-fit min-h-[100px]">
        <div className="bg-green-300 rounded-t-lg shad">
          <p className="text-lg text-gray-600 text-center">Doing</p>
        </div>
        <div className=" p-2 flex flex-wrap gap-2">
          {/* <Note /> */}
        </div>
      </div>

      <div className="bg-white rounded-lg w-1/3 shadow h-fit min-h-[100px]">
        <div className="bg-green-300 rounded-t-lg shad">
          <p className="text-lg text-gray-600 text-center">Done</p>
        </div>
        <div className=" p-2 flex flex-wrap gap-2">
          {/* <Note /> */}
        </div>
      </div>

    </div>
  );
}

export default NoteList;
