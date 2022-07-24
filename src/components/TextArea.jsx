import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Palette from '@/components/Palette';
import { addAsyncNotes } from '@/redux/noteSlice';

function TextArea() {
  const [value, setValue] = useState('');
  const activeBgColor = useSelector((state) => state.color.value);
  const activeColor = useSelector((state) => state.color.activeColor);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addAsyncNotes({ value, activeColor }));
    document.querySelector('#textarea').value = '';
  };

  const typing = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="mx-auto w-fit mt-10 relative drop-shadow">
      <textarea
        onChange={typing}
        id="textarea"
        className={`resize-none w-[550px] mx-auto outline-none rounded-lg h-[200px] p-3 ${activeBgColor}`}
      />
      <div className="absolute bottom-4 left-3">
        <Palette />
      </div>
      <button
        onClick={add}
        type="button"
        className="px-6 py-1 rounded-full bg-green-400 absolute right-3 bottom-4 text-white hover:bg-green-300 transition-all"
      >
        Add
      </button>
    </div>
  );
}

export default TextArea;
