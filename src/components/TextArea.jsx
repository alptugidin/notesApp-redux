import React from 'react';
import Palette from '@/components/Palette';

function TextArea() {
  return (
    <div className="mx-auto w-fit mt-10 relative drop-shadow">
      <textarea className="resize-none w-[550px] mx-auto outline-none rounded-lg h-[200px] p-3" />
      <div className="absolute bottom-4 left-3">
        <Palette />
      </div>

      <button
        type="button"
        className="px-6 py-1 rounded-full bg-green-400 absolute right-3 bottom-4 text-white hover:bg-green-300 transition-all"
      >
        Add
      </button>
    </div>
  );
}

export default TextArea;
