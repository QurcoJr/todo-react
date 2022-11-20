import { useState } from 'react'
import { TodoRow, Button } from '../styles'
import NewTodo from './NewTodo'
import { isTodoValid } from './TodoList'

function Todo({
  isInEditMode,
  todos,
  setTodos,
  value,
  id,
  closeNewTodo,
  setInEditMode
}) {
  const [todoState, setTodoState] = useState(value)

  function handleChangeTodo(event) {
    setTodoState(event.target.value)
  }

  function handleEditTodo() {
    if (!isTodoValid) {
      return
    }

    const newTodos = [...todos]
    const foundIndex = todos.findIndex(todo => todo.id === id)
    newTodos[foundIndex] = { id, value: todoState }
    setTodos(newTodos)
    setInEditMode(null)
  }

  function handleDeleteTodo() {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  return (
    <TodoRow>
      {!isInEditMode ? (
        <>
          <p>{value}</p>
          <div>
            <Button
              className="icon"
              onClick={() => {
                setInEditMode(id)
                closeNewTodo()
              }}
            >
              <span className="material-symbols-outlined">edit</span>
            </Button>
            <Button className="icon" onClick={handleDeleteTodo}>
              <span className="material-symbols-outlined">delete</span>
            </Button>
          </div>
        </>
      ) : (
        <NewTodo
          value={todoState}
          onChange={handleChangeTodo}
          onSave={handleEditTodo}
          disabled={!isTodoValid(todoState)}
        />
      )}
    </TodoRow>
  )
}

export default Todo
