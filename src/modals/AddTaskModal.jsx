import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAsync } from "../redux/taskSlice";
import "./modal.css";

const AddTaskModel = ({ setIsAddModal }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setIsAddModal(false);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();

    try {
      dispatch(
        addTaskAsync({
          id: Math.floor(Math.random() * 100),
          title: name,
          description: description,
          status: status,
          priority: priority,
        })
      );
      setIsAddModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <div className="modal w-4/5 md:w-2/5">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="text-center mb-5">
            <h1 className="text-3xl font-extrabold text-gray-900">
              Add your task
            </h1>
          </div>
          <form className="flex flex-col gap-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="
                    shadow
                    appearance-none
                    border
                    rounded
                    w-full
                    py-2
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                    "
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Description
              </label>
              <textarea
                className="
                    shadow
                    appearance-none
                    border
                    rounded
                    w-full
                    py-2
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                    "
                id="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Status
              </label>
              <select
                id="status"
                className="
                    shadow
                    appearance-none
                    border
                    rounded
                    w-full
                    py-2
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                    "
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="todo">todo</option>
                <option value="doing">doing</option>
                <option value="done">done</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="priority"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Priority
              </label>
              <select
                id="priority"
                className="
                    shadow
                    appearance-none
                    border
                    rounded
                    w-full
                    py-2
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                    "
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="
                    bg-blue-500
                    hover:bg-blue-700
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded
                    focus:outline-none
                    focus:shadow-outline
                    "
                type="submit"
                onClick={(e) => handleAdd(e)}
              >
                Update Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModel;
