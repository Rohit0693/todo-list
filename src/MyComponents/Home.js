import React from 'react'
import { Todos } from './Todos'
import { AddTodo } from './AddTodo'
import { useEffect, useState } from 'react';
export const Home = () => {
    let inittodo = [];
    if (localStorage.getItem("todos") !== null) {
        inittodo = JSON.parse(localStorage.getItem("todos"));
    }
    const onDelete = (todo) => {
        console.log("OnDelete", todo);
        settodos(todos.filter((e) => {
            return e !== todo;
        }))
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    const addTodo = (work, time) => {
        let todo = {
            work: work,
            time: time
        }
        if (todos.length) todo.sno = todos[todos.length - 1].sno + 1;
        else todo.sno = 1;
        settodos([...todos, todo]);
    }
    const [todos, settodos] = useState(inittodo);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    return (
        <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
        </>
    )
}
