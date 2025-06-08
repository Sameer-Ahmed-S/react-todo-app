import React from "react";

function InputBox(props) {
  const {addTask} =props;
  const [task,setTask]= useState('');

  const handleInput = (e) => {
    setTask(e.target.value);
  };
  const addTaskChild = () => {
    if(task.trim()){
      addTask(task);
      setTask('');

    }
  };
  return (
    <div className="inputbox">
      <input type="text" 
            value={task}
            onChange={handleInput}
            placeholder="Add a new task"
            />

      <button onClick={addTaskChild}>Add Task</button>
    </div>
  );
}

export default InputBox;
