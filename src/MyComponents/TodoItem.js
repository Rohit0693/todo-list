import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const TodoItem = ({todo,onDelete}) => {
  return (
    <div className="container">
      <h4>{todo.work}</h4>
      <p>{todo.time}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
