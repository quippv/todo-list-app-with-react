import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    text: ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.text)
    this.setState({
      text: ''
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="text"
          style={{ flex: '10', padding: '10px' }}
          placeholder="Add new todo"
          value={this.state.text}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    )
  }
}


export default AddTodo
