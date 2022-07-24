import React, {
  useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Note from '@/components/Note';
import { getAsyncNotes, updateAsyncNotes } from '@/redux/noteSlice';

function NoteList() {
  const [showRemove, setShowRemove] = useState(true);
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.note.items);

  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(false);
  const [s3, setS3] = useState(false);

  const dragEvent = (id, e) => {
    if (e.type === 'dragstart') {
      e.dataTransfer.setData('text/plain', id);
      setShowRemove(false);
    } else if (e.type === 'dragend') {
      setShowRemove(true);
      setS1(false);
      setS2(false);
      setS3(false);
    }
  };

  const dropHandler = (e) => {
    e.preventDefault();
    dispatch(updateAsyncNotes({ id: e.dataTransfer.getData('text/plain'), status: e.currentTarget.id }));
    setS1(false);
    setS2(false);
    setS3(false);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    if (document.getElementById('todo').contains(e.currentTarget)) {
      setS1(true);
      setS2(false);
      setS3(false);
    } else if (document.getElementById('doing').contains(e.currentTarget)) {
      setS1(false);
      setS2(true);
      setS3(false);
    } else if (document.getElementById('done').contains(e.currentTarget)) {
      setS1(false);
      setS2(false);
      setS3(true);
    } else {
      setS1(false);
      setS2(false);
      setS3(false);
    }
  };

  useEffect(() => {
    dispatch(getAsyncNotes());
  }, []);

  return (
    <div className="flex mt-10 gap-3 w-[800px] mx-auto">
      <div
        id="todo"
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
        className={`bg-white rounded-lg w-1/3 shadow h-fit min-h-[100px] transition-all ${s1 ? 'shadow-xl' : ''}`}
      >
        <div className="bg-green-300 rounded-t-lg shad">
          <p className="text-lg text-gray-600 text-center select-none">To Do</p>
        </div>
        <div className="child-div p-2 flex flex-wrap gap-2">
          {notes.filter((item) => item.status === 'todo').map((note) => (
            <Note
              key={note.id}
              data={note}
              dragEvent={dragEvent}
              showRemove={showRemove}
            />
          ))}
        </div>
      </div>

      <div
        id="doing"
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
        className={`bg-white rounded-lg w-1/3 shadow h-fit min-h-[100px] transition-all ${s2 ? 'shadow-xl' : ''}`}
      >
        <div className="bg-green-300 rounded-t-lg shad">
          <p className="text-lg text-gray-600 text-center select-none">Doing</p>
        </div>
        <div className="p-2 flex flex-wrap gap-2">
          {notes.filter((item) => item.status === 'doing').map((note) => (
            <Note
              key={note.id}
              data={note}
              dragEvent={dragEvent}
              showRemove={showRemove}
            />
          ))}
        </div>
      </div>

      <div
        id="done"
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
        className={`bg-white rounded-lg w-1/3 shadow h-fit min-h-[100px] transition-all ${s3 ? 'shadow-xl' : ''}`}
      >
        <div className="bg-green-300 rounded-t-lg shad">
          <p className="text-lg text-gray-600 text-center select-none">Done</p>
        </div>
        <div className=" p-2 flex flex-wrap gap-2">
          {notes.filter((item) => item.status === 'done').map((note) => (
            <Note
              key={note.id}
              data={note}
              dragEvent={dragEvent}
              showRemove={showRemove}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default NoteList;
