import { useState } from 'react'
import { Container } from './styles'
import Login from './components/Login'
import TodoList from './components/TodoList'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleLogin() {
    setIsLoggedIn(true)
  }

  function handleLogout() {
    setIsLoggedIn(false)
  }

  return (
    <Container>
      {isLoggedIn ? (
        <TodoList onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Container>
  )
}

export default App
