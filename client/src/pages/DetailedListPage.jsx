import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import TodoList from '../components/TodoList';

export default function DetailedListPage(props) {
  const [data, setData] = useState(null);
  const history = useHistory();
  const id = props.match.params.id;

  const url = `http://localhost:3000/api/${id}`;


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
  function deleteData() {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => alert(`Removed todo-list:${data.title}`)) // alert that todo-list is removed
      .then(() => history.push('/'));
  }

  return (
    <section>
      <h2>This is detailed list page</h2>
      {data && 
        <TodoList {...data}/>
      } 
      <Link to={`/edit/${id}`} className="btn btn-primary">Edit</Link>
      <button onClick={deleteData} className="btn btn-secondary">Delete</button>
    </section>
  )
}
