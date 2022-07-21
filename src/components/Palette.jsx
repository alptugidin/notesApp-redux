import React, { useEffect, useState } from 'react';

function Palette() {
  const [buttons, setButtons] = useState([]);
  const [activeColor, setActiveColor] = useState('');

  const pick = (e) => {
    setActiveColor(e.target.dataset.color);
    buttons.forEach((button) => {
      if (button.dataset.color === e.target.dataset.color) {
    	  button.classList.remove('hidden');
      } else {
    	  button.classList.add('hidden');
      }
    });
  };

  useEffect(() => {
    setButtons([...document.querySelectorAll('.custom-border')]);
  }, []);

  return (
    <div id="palette" role="presentation" className="flex gap-2">
      {
		Array.of('green', 'red', 'blue', 'orange', 'purple', 'yellow').map((color) => (
  			<div
    			onClick={pick}
    			role="presentation"
    			key={color}
    			data-color={color}
    			className={`w-8 h-8 rounded-full cursor-pointer transition-all bg-${color}-400 hover:bg-${color}-300`}
  			>
    			<div
      				data-color={color}
      				className={`custom-border w-8 h-8 rounded-full bg-transparent border border-2 border-${color}-800 hidden`}
    			/>
  			</div>
		))
	  }

    </div>
  );
}

export default Palette;
