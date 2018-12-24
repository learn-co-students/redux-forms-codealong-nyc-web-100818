import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  state = {
    text: ''
  }

  onInputChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <p>
            <label>add todo</label>
            <input value={this.state.text} onChange={this.onInputChange} type="text" />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({
      type: 'ADD_TODO',
      payload: formData
    })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
