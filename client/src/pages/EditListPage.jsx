import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function EditListPage(props) {
  const [oldData, setOldData] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();
  const id = props.match.params.id;
  const url = `http://localhost:3000/api/${id}`;

  //GET oldData from API for a single todoList
  const fetchData = () => {
    fetch(url)
      .then(res => res.json())
      .then(oldData => {
        setOldData(oldData)
      })
  };

  useEffect(() => {
    fetchData()
  }, [])

  //update edited data on submit
  function handleSubmit(e) {
    e.preventDefault();
    
    const updatedTodoList = { title, content }
    
    console.log(updatedTodoList)

    fetch(`http://localhost:3000/api/${id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedTodoList) 
    }).then(() => alert("item saved"))
    .then(() => history.push("/"))


}

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label className="label__lg">
          Edit todo-list
        </label>
      </h2>
      { oldData && 
        <>
          <input
            type="text"
            className="input input__lg"
            name="title"
            placeholder={oldData.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="input input__lg"
            name="content"
            placeholder={oldData.content}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="btn btn-primary">Save changes</button>
        </>
      }
    </form>
  )
}
