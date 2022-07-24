import React, { createRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';

function Note({ data, dragEvent }) {
  const textColors = useSelector((state) => state.color.textColors);
  const textColor = textColors.find((item) => item.name === data.color).color;
  const bgColors = useSelector((state) => state.color.bgColors);
  const bgColor = bgColors.find((item) => item.name === data.color).color;
  const noteRef = createRef();

  // useEffect(() => {
  //   const eventArr = ['dragstart', 'dragend', 'drop'];
  //   const multipleDragEvents = (ref, events, handler) => {
  //     events.forEach((event) => {
  //       ref.addEventListener(event, (e) => {
  //         handler(e.target.dataset.id);
  //       });
  //     });
  //   };
  //
  //   multipleDragEvents(noteRef.current, eventArr, dragEvent);
  // }, []);

  return (
    <div
      draggable="true"
      ref={noteRef}
      data-id={data.id}
      className={`note w-full relative mx-auto rounded-lg shadow-lg p-1 cursor-move ${bgColor}`}
    >
      <div
        className="remove-svg absolute right-1 w-[24px] h-[24px] rounded-full border border-1 hover:border-red-400 opacity-0 transition-all"
      >
        <img
          src="/remove.svg"
          alt="remove"
          className="hover:cursor-pointer"
        />
      </div>
      <span className={`text-md ${textColor}`}>{data.name}</span>

    </div>
  );
}

export default Note;
