import React from 'react';

function SearchBox() {
  return (
    <div>
      <form
        action=""
        className="w-fit mx-auto mt-10"
      >
        <input
          type="text"
          placeholder="Search..."
          className="bg-white pl-4 text-gray-600 rounded-[13px] text-2xl h-10 w-[450px] outline-none focus:drop-shadow-lg drop-shadow"

        />
      </form>
    </div>
  );
}

export default SearchBox;
