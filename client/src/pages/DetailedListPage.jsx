import React, {useState, useEffect} from 'react';
import TodoList from '../components/TodoList';

export default function DetailedListPage(props) {
  const [data, setData] = useState(null);
  const id = props.match.params.id
  const url = `http://localhost:3000/api/${id}`

  //GET data from API for a single todoList
  const fetchData = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
  };

  useEffect(() => {
    fetchData()
  }, [])

  //DELETE a single todoList
  const deleteData = () => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }) 
    .then(response => response.json())
    .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
    .catch(err => console.log(err)) // Do something with the error
  }

  return (
    <section>
      <h2>This is detailed list page</h2>
      {data && 
        <TodoList {...data}/>
      }
      <button>Edit</button>  
      <button onClick={deleteData()}>Delete</button>
    </section>
  )
}
