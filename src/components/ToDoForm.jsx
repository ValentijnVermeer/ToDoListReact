import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

 const ToDoForm = ({ toDos, setToDos }) => {

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
    
      {/* <label className=''>To Do</label> */}
      {/* <input type="text" name="title" onChange={handleChange} value={book.title} /> */}
      {/* <input type="text" name="title" onChange={handleToDoChange} value={title} /> */}
      {/* <input type="date" name="date" id="date" onChange={handleChange} value={book.date} /> */}
      {/* <button className=''>Add To do</button> */}

        <div className='w-2/4 container'>
            <div className="flex col-span-full">
                <label htmlFor="text"  className="add-to-dos text-m font-bold leading-6 text-gray-800 text-left ml-1">
                    Add your to-dos:
                </label>
            </div>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                type="text"
                name="title"
                value={title}
                //id="price"
                onChange={handleToDoChange}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-gold sm:text-sm sm:leading-6"
                placeholder="Your to do..."
                autoComplete="off"
                />
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                type="submit"
                className="rounded-md bg-tailwind-grey px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lighter-grey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lighter-grey"
                >
                Save
                </button>
            </div>
        </div>
    </form>
  )
}

export default ToDoForm