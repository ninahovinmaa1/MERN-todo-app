import React from 'react';
import {Link} from 'react-router-dom';

export default function TodoList({_id, title, content}) {
  return (
    <>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{content}</p>
          <Link to={`/${_id}`} class="btn btn-primary">Go to</Link>
        </div>
      </div>
    </>
  )
}
