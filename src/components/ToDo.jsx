import React from 'react'

export const ToDo = ({toDos}) => {

    const [isUpdate, setUpdate] = useState(false);
    const handleDelete = () => {
        // filter
        // setState


    }

    const handleUpdate = () => {
        //map 
        //setState
    }
  return (
    <section>
      {toDos.map(toDo => (
        <div key={toDo.id}>
          {isUpdate ? (
            <input value={toDo.title} />
          ) : (
            <h2>{toDo.title}</h2>
          )}

        </div>
      ))}
    </section>
  )
}
