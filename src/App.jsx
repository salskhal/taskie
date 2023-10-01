import { useState } from "react";
import Header from "./components/Header";
import TaskContainer from "./components/TaskContainer";

function App() {
  const [isAddModal, setIsAddModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  return (
    <div className="bg-slate-800 min-h-screen">
      <Header setIsAddModal={setIsAddModal} isAddModal={isAddModal} />
      <TaskContainer setIsAddModal={setIsAddModal} isAddModal={isAddModal} isEditModal={isEditModal} setIsEditModal={setIsEditModal} />
    </div>
  );
}

export default App;
