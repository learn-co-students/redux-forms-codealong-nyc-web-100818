import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type='text' onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type='submit'/>
        </form>
        {this.state.text}
        {this.props.todos.map(todo => (<p>{todo.text}</p>))}
      </div>
    )
  }
}

const mapState = (state) => {
  return {todos: state.todos}
}

const mapDispatch = dispatch => {
  return {
    addTodo: (text) => dispatch({ type: 'ADD_TODO', payload: text })
  }
}

export default connect(mapState, mapDispatch)(CreateTodo);
