import { useState } from "react";
const Header = ({ setIsAddModal }) => {
  const handleClick = (e) => {
    // e.preventDefault()
    setIsAddModal(true);
  };
  return (
    <nav className="flex  gap-5 justify-between items-center flex-row p-5 md:px-10 py-5 w-full">
      <div>
        <h1 className="font-bold text-2xl text-white">Task Manager</h1>
      </div>
      <div>
        <button
          className="bg-indigo-600 py-3 px-5 rounded-lg text-white text-lg"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </nav>
  );
};

export default Header;
