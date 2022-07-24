import React, { createRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsyncNotes } from '@/redux/noteSlice';

function Note({ data, dragEvent, showRemove }) {
  const textColors = useSelector((state) => state.color.textColors);
  const textColor = textColors.find((item) => item.name === data.color).color;
  const bgColors = useSelector((state) => state.color.bgColors);
  const bgColor = bgColors.find((item) => item.name === data.color).color;
  const noteRef = createRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const eventArr = ['dragstart', 'dragend'];
    const multipleDragEvents = (ref, events, handler) => {
      events.forEach((event) => {
        ref.addEventListener(event, (e) => {
          handler(e.target.dataset.id, e);
        });
      });
    };

    multipleDragEvents(noteRef.current, eventArr, dragEvent);
  }, []);

  const remove = () => {
    dispatch(deleteAsyncNotes({ id: data.id }));
  };

  return (
    <div
      ref={noteRef}
      draggable="true"
      data-id={data.id}
      className={`note w-full relative mx-auto rounded-lg shadow-lg p-1 ${bgColor} hover:cursor-grab transition-all`}
    >
      {showRemove && (
        <button
          type="button"
          onClick={remove}
          className="remove-svg absolute right-1 w-[24px] h-[24px] rounded-full border border-1 hover:border-red-400 opacity-0 transition-all"
        >

          <img
            src="/remove.svg"
            alt="remove"
            className="hover:cursor-pointer"
          />

        </button>
      )}
      <span className={`todo-text text-md ${textColor}`}>{data.name}</span>

    </div>
  );
}

export default Note;
