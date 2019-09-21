import React, { Component } from "react"


class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: '10px',
      backgroundColor: 'rgb(223, 223, 223)',
      borderBottom: '1px dotted #555',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, text } = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markChange.bind(this, id)} />
          {' '}
          {text}
          <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

const btnStyle = {
  backgroundColor: 'red',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '30%',
  float: 'right'
}

export default TodoItem