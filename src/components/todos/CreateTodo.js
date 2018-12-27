import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addTodo(this.state)
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
          <label>add todo</label>
          <input onChange={this.handleChange} type="text" value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
        {
          this.props.butter.length ? this.props.butter.map(todo => <p>{todo}</p>) : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    butter: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({
      type: "ADD_TODO",
      payload: formData
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
