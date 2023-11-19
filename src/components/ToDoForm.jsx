import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ToDoForm = ({ toDos, setToDos }) => {
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if (title) {
          const newToDo = { id: uuidv4(), title};
          setToDos([newToDo, ...toDos]);
          // e.target.reset(); this will not work!!!!!
          // setBook({});
          setTitle('');
        }
      };

    const handleToDoChange = e => {
        setTitle(e.target.value);
      };

  return (
    <form onSubmit={handleSubmit}>
      <label>To Do</label>
      {/* <input type="text" name="title" onChange={handleChange} value={book.title} /> */}
      <input type="text" name="title" onChange={handleToDoChange} value={title} />
      {/* <input type="date" name="date" id="date" onChange={handleChange} value={book.date} /> */}
      <button>Add To do</button>
    </form>
  )
}
