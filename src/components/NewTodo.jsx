import { Form, Input, Button, Row } from '../styles'
import { todoMaxLen } from './TodoList'

function NewTodo({ value, onChange, onSave, disabled }) {
  return (
    <Form
      onSubmit={event => {
        event.preventDefault()
        onSave(value)
      }}
    >
      <Row>
        <Input
          value={value}
          onChange={onChange}
          maxLength={todoMaxLen}
          placeholder="Type a todo"
          autoFocus={true}
        />
        <Button type="submit" className="primary" disabled={disabled}>
          Save
        </Button>
      </Row>
    </Form>
  )
}

export default NewTodo
