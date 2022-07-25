import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function SearchBox() {
  const notes = useSelector((state) => state.note.items);
  const [spans, setSpans] = useState([]);
  const [input, setInput] = useState('');

  const handleOnChange = async (e) => {
    await setInput(e);
    const regex = new RegExp(e, 'gi');
    spans.forEach((span) => {
      if (e.length !== 0) {
        if (!span.textContent.match(regex)) {
          span.parentNode.classList.add('opacity-30');
        } else {
          span.parentNode.classList.remove('opacity-30');
        }
      } else {
        span.parentNode.classList.remove('opacity-30');
      }
    });
  };

  useEffect(() => {
    setSpans([...document.getElementsByClassName('todo-text')]);
  }, [notes]);

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="w-fit mx-auto mt-10"
      >
        <input
          type="text"
          placeholder="Search..."
          value={input}
          spellCheck="false"
          onChange={(e) => handleOnChange(e.target.value)}
          className="bg-white pl-4 text-gray-600 rounded-[13px] text-2xl h-10 w-[450px] outline-none focus:drop-shadow-lg drop-shadow"
        />
      </form>
    </div>
  );
}

export default SearchBox;
