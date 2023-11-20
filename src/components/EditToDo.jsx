import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


 const EditToDo = ({ toDos, editToDo, toDo, setToDos, updateToDo }) => {

    const [edit, setEdit] = useState(toDo.title);

    const handleSubmit = e => {
        e.preventDefault();
        if (edit) {updateToDo(toDo.id, edit);
        }
      };

    const handleToDoChangeEdit = e => {
        setEdit(e.target.value);
      };

      const emptyInput = e => {
        setTitle('');
      };

  return (
    <form onSubmit={handleSubmit}>
    
      {/* <label className=''>To Do</label> */}
      {/* <input type="text" name="title" onChange={handleChange} value={book.title} /> */}
      {/* <input type="text" name="title" onChange={handleToDoChange} value={title} /> */}
      {/* <input type="date" name="date" id="date" onChange={handleChange} value={book.date} /> */}
      {/* <button className=''>Add To do</button> */}

        <div className='container flex items-center gap-1'>
            <div className="relative rounded-md shadow-sm center items-center">
                <input
                type="text"
                name="title"
                value={edit}
                //id="key"
                onChange={handleToDoChangeEdit}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-gold sm:text-sm sm:leading-6"
                //placeholder="Your to do..."
                autoComplete="off"
                />
            </div>

            <div className="flex items-center justify-end gap-x-6">
                <button
                type="submit"
                className="rounded-md bg-tailwind-grey px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lighter-grey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lighter-grey"
                >
                Update
                </button>
            </div>
        </div>
    </form>
  )
}

export default EditToDo