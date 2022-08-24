import React, { useState, useEffect, useRef } from "react";

export default function TodoHeader() {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <div>
        <input
          id="new-task-input"
          value={input}
          ref={inputRef}
          onChange={(e) => setInput(e.target.value)}
          name="text"
          className="todo-input"
          style={{ width: "600px" }}
          placeholder="What do you have planned?"
        />
        <button id="new-task-submit" onClick={handleSubmit}>
          Add Todo
        </button>
      </div>
    </form>
  );
}
