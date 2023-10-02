import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StatusCard from "./StatusCard";
import EditTaskModel from "../modals/EditTaskModel";
import AddTaskModel from "../modals/AddTaskModal";

const TaskContainer = ({
  isAddModal,
  setIsAddModal,
  isEditModal,
  setIsEditModal,
}) => {
  const taskList = useSelector((state) => state.task);
  const { tasks } = taskList;

  //   const [isAddModal, setIsAddModal] = useState(false);
  //   const [isEditModal, setIsEditModal] = useState(false);

  // let todo = [];
  // let doing = [];
  // let completed = [];

  // const [todo, setTodo] = useState([]);
  // const [doing, setDoing] = useState([]);
  // const [done, setDone] = useState([]);

  // useEffect(() => {
  //   tasks.forEach((task) => {
  //     if (task.status === "todo") {
  //       todo.push(task);
  //     } else if (task.status === "doing") {
  //       doing.push(task);
  //     } else if (task.status === "done") {
  //       done.push(task);
  //     }
  //   });
  // }, [tasks, todo, doing, done]);

  const [todo, setTodo] = useState([]);
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(() => {
    // Reset the state arrays before recalculating
    setTodo([]);
    setDoing([]);
    setDone([]);

    tasks.forEach((task) => {
      if (task.status === "todo") {
        setTodo((prevTodo) => [...prevTodo, task]);
      } else if (task.status === "doing") {
        setDoing((prevDoing) => [...prevDoing, task]);
      } else if (task.status === "done") {
        setDone((prevDone) => [...prevDone, task]);
      }
    });
  }, [tasks]);
  return (
    <div>
      <main
        className="  p-10
    md:p-20"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-slate-100 px-4 py-8 flex flex-col gap-3 rounded-2xl">
            <div className="flex items-center justify-between">
              <p className="font-medium">To Do</p>
              <p className="text-green-600 px-3 py-1 rounded-md bg-green-200">
                {todo.length}
              </p>
            </div>
            {todo.map((task) => (
              <StatusCard
                task={task}
                key={task.id}
                setIsEditModal={setIsEditModal}
              />
            ))}
          </div>
          <div className="bg-slate-100 px-4 py-8 flex flex-col gap-3 rounded-2xl">
            <div className="flex items-center justify-between">
              <p className="font-medium">Doing</p>
              <p className="text-green-600 px-3 py-1 rounded-md bg-green-200">
                {doing.length}
              </p>
            </div>
            {doing.map((task) => (
              <StatusCard
                task={task}
                key={task.id}
                setIsEditModal={setIsEditModal}
              />
            ))}
          </div>
          <div className="bg-slate-100 px-4 py-8 flex flex-col gap-3 rounded-2xl">
            <div className="flex items-center justify-between">
              <p className="font-medium">Completed</p>
              <p className="text-green-600 px-3 py-1 rounded-md bg-green-200">
                {done.length}
              </p>
            </div>
            {done.map((task) => (
              <StatusCard
                task={task}
                key={task.id}
                setIsEditModal={setIsEditModal}
              />
            ))}
          </div>
        </div>
      </main>
      {isEditModal && (
        <EditTaskModel
          setIsEditModal={setIsEditModal}
          isEditModal={isEditModal}
        />
      )}
      {isAddModal && <AddTaskModel setIsAddModal={setIsAddModal} />}
    </div>
  );
};

export default TaskContainer;
