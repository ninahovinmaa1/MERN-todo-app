import React from 'react';
import {Link} from 'react-router-dom';

export default function TodoList({_id, title, content, updatedAt}) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <p>Latest updated: {updatedAt}</p>
          <Link to={`/${_id}`} className="btn btn-primary">Go to</Link>
        </div>
      </div>
    </>
  )
}
