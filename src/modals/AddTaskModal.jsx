import "./modal.css";
const AddTaskModel = ({ setIsAddModal }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setIsAddModal(false);
    }
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <div className="modal w-4/5 md:w-2/5">da</div>
    </div>
  );
};

export default AddTaskModel;
