import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '@/redux/colorSlice';

function Palette() {
  const [buttons, setButtons] = useState([]);
  const dispatch = useDispatch();
  const colorArray = ['blue', 'red', 'green', 'orange', 'purple', 'yellow'];

  const hoverArray = [
    'hover:bg-blue-400',
    'hover:bg-red-400',
    'hover:bg-green-400',
    'hover:bg-orange-400',
    'hover:bg-purple-400',
    'hover:bg-yellow-400',
  ];

  const borderArray = [
    'border-blue-700',
    'border-red-700',
    'border-green-700',
    'border-orange-700',
    'border-purple-700',
    'border-yellow-700',
  ];

  const bgArray = [
    'bg-blue-300',
    'bg-red-300',
    'bg-green-300',
    'bg-orange-300',
    'bg-purple-300',
    'bg-yellow-300',
  ];

  const pick = (e) => {
    dispatch(changeColor(e.target.dataset.color));

    buttons.forEach((button) => {
      if (button.dataset.color === e.target.dataset.color) {
    	  button.classList.remove('hidden');
      } else {
    	  button.classList.add('hidden');
      }
    });
  };

  useEffect(() => {
    dispatch(changeColor('white'));
    setButtons([...document.querySelectorAll('.custom-border')]);
  }, []);

  return (
    <div
      id="palette"
      className="flex gap-2"
    >
      {
		colorArray.map((color, i) => (
  			<div
    			onClick={pick}
    			role="presentation"
    			key={color}
    			data-color={color}
    			className={`w-8 h-8 rounded-full cursor-pointer transition-all ${bgArray[i]} ${hoverArray[i]}`}
  			>
    			<div
      				data-color={color}
      				className={`custom-border w-8 h-8 rounded-full bg-transparent border border-2 ${borderArray[i]} hidden`}
    			/>
  			</div>
		))
	  }

    </div>
  );
}

export default Palette;
