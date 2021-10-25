import React, {useState, useEffect} from 'react'

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

  return (
    <div>
      { data && data.map((todoList, index) => {
        return (
          <>
          <h3>{todoList.title}</h3>
          <p>{todoList.content}</p>
          </>
        )
      })}
    </div>
  )
}