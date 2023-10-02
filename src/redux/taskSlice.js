import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const initialTask = null;

const initialState = {
  taskData: initialTask,
  tasks: data,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask: (state, action) => {
      state.taskData = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks.splice(index, 1);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks[index] = action.payload;
    },
  },
});

export const addTaskAsync = (task) => {
  return (dispatch) => {
    dispatch(addTask(task));
  };
};

export const deleteTaskAsync = (id) => {
  return (dispatch) => {
    dispatch(deleteTask(id));
  };
};

export const updateTaskAsync = (task) => {
  return (dispatch) => {
    dispatch(updateTask(task));
  };
};

export const { addTask, deleteTask, updateTask, setTask } = taskSlice.actions;

export default taskSlice.reducer;
