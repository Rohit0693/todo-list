import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  let Style={
    minHeight:"60vh",
    margin: "auto"
  }
  return (
    <div className="container" style={Style}>
      <h2 className='my-3'>Todos List</h2>
      { props.todos.length===0? <h3>No todos to display</h3> :
        props.todos.map((todo)=>{
          return( <><TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/></>)
        })
      }
    </div>
  )
}
    