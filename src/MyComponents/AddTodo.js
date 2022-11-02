import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const AddTodo = (props) => {
    const [work,setwork]=useState("");
    const [time,settime]=useState(0);
    const submit=(e)=>{
        e.preventDefault();
        if(!work){
            alert("work cannot be blank");
        }
        else if(!time){
            alert("time cannot be blank");
        }
        else {
          props.addTodo(work,time);
          // setwork("");
          // settime(0);
        }
    }
  return (
    <div className="container">
        <h1>Add Todo</h1>
    <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="work" value={work} onChange={(e)=>setwork(e.target.value)}>
        <Form.Label>Todo Work</Form.Label>
        <Form.Control type="text" placeholder="Enter work" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="time" value={time} onChange={(e)=>settime(e.target.value)}>
        <Form.Label>Time</Form.Label>
        <Form.Control type="text" placeholder="Time" />
      </Form.Group>
      <Button variant="primary" type="submit" className='btn btn-sm btn-success'>
        Add Todo
      </Button>
    </Form></div>
  )
}
