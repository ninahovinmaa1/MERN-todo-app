import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function EditListPage(props) {
  const [oldData, setOldData] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();
  const id = props.match.params.id;
  const url = `https://api-todo-app-be3.herokuapp.com/api/${id}`;

  //GET oldData from API for a single todoList
  const fetchData = () => {
    fetch(url)
      .then(res => res.json())
      .then(oldData => {
        setOldData(oldData)
        setTitle(oldData.title)
        setContent(oldData.content)
      })
  };

  useEffect(() => {
    fetchData()
  }, [])

  //update edited data on submit
  function handleSubmit(e) {
    e.preventDefault();
    
    const updatedTodoList = { title, content }

    fetch(`https://api-todo-app-be3.herokuapp.com/api/${id}`, {
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
      { !oldData ? <h3>Loading...</h3> :  
          <>
            <input
              type="text"
              className="input input__lg"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value) 
              }
            />
            <input
              type="text"
              className="input input__lg"
              name="content"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button className="btn btn-primary">Save changes</button>
          </>
      }
    </form>
  )
}
