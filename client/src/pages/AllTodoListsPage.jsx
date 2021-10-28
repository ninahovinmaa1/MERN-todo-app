import React, {useState, useEffect} from 'react'
import Form from '../components/Form';
import TodoList from '../components/TodoList';

export default function AllTodoListsPage() {

  const [data, setData] = useState(null);

  const fetchData = () => {
    const url = "http://localhost:3000/api/"
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
  };

  useEffect(() => {
    fetchData()
  }, [])

  const addTask = (title) => {
    console.log(title)
  }

  return (
    <div>
      <Form addTask={addTask}/>
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
