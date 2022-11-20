import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 40px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin: 0 0 30px;
`

const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  border-bottom: 2px solid #d9d9d9;
  transition: border 0.3s;

  &:focus {
    border-bottom: 2px solid #333;
  }

  &.error {
    border-bottom: 2px solid #c80000;
  }
`

const Form = styled.form`
  width: 100%;
`

const FormControl = styled.div`
  margin-bottom: 25px;
`

const InputContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 10px;

  span {
    position: absolute;
    height: calc(100% - 15px);
    bottom: 0;
    left: 0;
    opacity: 0.7;
    transition: 0.3s;

    &.search {
      height: calc(100% - 6px);
      transform: scale(0.8);
    }

    &:has(+ input:focus) {
      opacity: 1;
    }
  }
`

const Label = styled.label`
  font-size: 1.2rem;
  color: #333;
`

const Button = styled.button`
  outline: none;
  border: none;
  background: none;
  padding: 10px 25px;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 8px;

  &.primary {
    background: #6a7fec;
    color: #fff;
  }

  &.secondary {
    background: #6c757d;
    color: #fff;
  }

  &.outline {
    color: #fff;
    border: 2px solid #fff;
  }

  &.icon {
    padding: 5px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      opacity: 0.5;
    }
  }

  &.login {
    width: 100%;
    height: 50px;
    margin: 15px 0 10px;
    border-radius: 25px;
    font-size: 2rem;
  }

  &.logout {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.8rem;
  }

  span {
    transition: all 0.3s;
  }

  &:hover {
    opacity: 0.9;

    span {
      opacity: 0.7;
    }
  }
`

const Error = styled.div`
  color: red;
  font-size: 1.2rem;

  &.center {
    text-align: center;
  }
`

const TodosContainer = styled.div`
  width: 350px;
  padding: 0 15px;
  margin: 20px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  border-radius: 10px;
  font-size: 1.4rem;

  input {
    width: 70%;
  }
`

const StyledTodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #06182c66;

  input {
    padding: 0 5px 0 26px;
  }
`

const TodoItemsContainer = styled.ul`
  height: 260px;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0.44, rgb(122, 153, 217)),
      color-stop(0.72, rgb(73, 125, 189)),
      color-stop(0.86, rgb(28, 58, 148))
    );
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
  width: 100%;
`

const TodoRow = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

const LoginWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px 15px;

  input {
    height: 55px;
    padding: 0 7px 0 35px;
  }
`

export {
  Container,
  Title,
  Input,
  Form,
  FormControl,
  InputContainer,
  Label,
  Button,
  Error,
  TodosContainer,
  StyledTodoHeader,
  TodoItemsContainer,
  Row,
  TodoRow,
  LoginWrapper
}
