import React from "react";

function InputBox(props) {
  const handleInput = (e) => {
    // Add code here
  };
  const addTaskChild = () => {
    // Add code here
  };
  return (
    <div className="inputbox">
      <input type="text" />

      <button onClick={addTaskChild}>Add Task</button>
    </div>
  );
}

export default InputBox;
