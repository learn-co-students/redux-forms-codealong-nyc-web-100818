import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  state = { text: '' }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="add_todo">add todo</label>
            <input
              type="text"
              name="todo"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

// export default connect()(CreateTodo)

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateTodo)
