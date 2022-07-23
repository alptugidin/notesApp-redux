import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Note({ data }) {
  const textColors = useSelector((state) => state.color.textColors);
  const bgColors = useSelector((state) => state.color.bgColors);
  const bgColor = bgColors.find((item) => item.name === data.color).color;

  const textColor = textColors.find((item) => {
    if (item.name === data.color) {
      return item.color;
    }
    return 'text-gray-800';
  });

  return (
    <div
      draggable="true"
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
