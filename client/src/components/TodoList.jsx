import React from 'react'

export default function TodoList({title, body}) {
  return (
    <>
      <h3>{title}</h3>
      <p>{body}</p>
    </>
  )
}
