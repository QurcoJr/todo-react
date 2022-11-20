import { Input, StyledTodoHeader, Button, InputContainer } from '../styles'

function TodoHeader({ search, onChange, onClick }) {
  return (
    <StyledTodoHeader>
      <InputContainer>
        <span className="material-symbols-outlined search">search</span>
        <Input
          className="search"
          type="search"
          placeholder="Search"
          value={search}
          onChange={onChange}
        />
      </InputContainer>
      <Button className="secondary" onClick={onClick}>
        New
      </Button>
    </StyledTodoHeader>
  )
}

export default TodoHeader
