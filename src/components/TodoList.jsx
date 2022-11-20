import { useState } from 'react'
import { v4 as getId } from 'uuid'
import { Button, Title, TodosContainer, TodoItemsContainer } from '../styles'
import useLocalStorage from '../hooks/useLocalStorage'
import TodoHeader from './TodoHeader'
import NewTodo from './NewTodo'
import Todo from './Todo'

export const todoMaxLen = 25
export const isTodoValid = value => value.length && value.length <= todoMaxLen

function TodoList({ onLogout }) {
  const [todos, setTodos] = useLocalStorage('todos', [])
  const [isAddingNewTodo, setIsAddingNewTodo] = useState(false)
  const [newTodo, setNewTodo] = useState('')
  const [search, setSearch] = useState('')
  const [inEditMode, setInEditMode] = useState(null)

  const filteredTodos = todos.filter(todo => todo.value.includes(search))

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  function handleChangeNewTodo(event) {
    setNewTodo(event.target.value)
  }

  function handleAddNewTodoClick() {
    setIsAddingNewTodo(true)
    setInEditMode(null)
  }

  function handleAddTodo(value) {
    if (!isTodoValid) {
      return
    }

    setTodos(prevTodos => [{ id: getId(), value }, ...prevTodos])
    setIsAddingNewTodo(false)
    setNewTodo('')
  }

  function handleCloseNewTodo() {
    setIsAddingNewTodo(false)
  }

  return (
    <div>
      <Button className="outline logout" onClick={onLogout}>
        Logout
      </Button>
      <Title>My To-Do List</Title>
      <TodosContainer>
        <TodoHeader
          search={search}
          onChange={handleSearchChange}
          onClick={handleAddNewTodoClick}
        />
        <TodoItemsContainer>
          {isAddingNewTodo && (
            <NewTodo
              value={newTodo}
              onChange={handleChangeNewTodo}
              onSave={handleAddTodo}
              disabled={!isTodoValid(newTodo)}
            />
          )}
          {filteredTodos.map(todo => (
            <Todo
              key={todo.id}
              value={todo.value}
              id={todo.id}
              todos={todos}
              setTodos={setTodos}
              closeNewTodo={handleCloseNewTodo}
              isInEditMode={inEditMode === todo.id}
              setInEditMode={setInEditMode}
            />
          ))}
        </TodoItemsContainer>
      </TodosContainer>
    </div>
  )
}

export default TodoList
