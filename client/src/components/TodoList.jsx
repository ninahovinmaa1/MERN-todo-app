import React from 'react';

export default function TodoList({title, body}) {
  return (
    <>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{body}</p>
          <a href="#" class="btn btn-primary">Go to</a>
        </div>
      </div>
    </>
  )
}
