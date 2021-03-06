import React, { useState } from 'react';

export default function Form() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  //Create a new todoList on submit
  function handleSubmit(e) {
    //prevent page from refreshing
    e.preventDefault();
    
    const todoList = { title, content }

    fetch("https://api-todo-app-be3.herokuapp.com/api/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(todoList) 
    })
    .then(setTitle(''))
    .then(setContent(''))
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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="input input__lg"
        name="content"
        placeholder="task content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="btn btn-primary">Add List</button>
    </form>
  )
}
