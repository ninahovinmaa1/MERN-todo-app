import React, {useState, useEffect} from 'react'
import Form from '../components/Form';
import TodoList from '../components/TodoList';

export default function AllTodoListsPage() {

  const [data, setData] = useState(null);

  const fetchData = () => {
    const url = "https://api-todo-app-be3.herokuapp.com/api"
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Form/>
      { data && data.map((todoList, index) => {
        return (
          <>
            <TodoList key={index} {...todoList}/>
          </>
        )
      })}
    </div>
  )
}
