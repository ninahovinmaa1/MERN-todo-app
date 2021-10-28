import React, {useState, useEffect} from 'react';
import TodoList from '../components/TodoList';

export default function DetailedListPage(props) {
  const [data, setData] = useState(null);

  const fetchData = () => {
    const id = props.match.params.id
    const url = `http://localhost:3000/api/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
  };

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>
      <h2>This is detailed list page</h2>
      {data && 
        <TodoList {...data}/>
      }
    </div>
  )
}
