import React, { useState } from 'react';

export default function Form(props) {
  const [inputTitle, setInputTitle] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(inputTitle);
    setInputTitle("");
}

  function handleChange(e) {
    setInputTitle(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        className="input input__lg"
        name="title"
        placeholder="task title"
        value={inputTitle}
        onChange={handleChange}
      />
      {/* <input
        type="text"
        className="input input__lg"
        name="content"
        value="taskcontent"
      /> */}
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  )
}
