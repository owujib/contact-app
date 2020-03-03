import React, { Component } from 'react'
import TodoList from './TodoList'
import Form from './Form'

class Todo extends Component {
    state=[
        {id:1, text:"Write code"},
        {id:1, text:"Write code"}
    ]
    render() {
        return (
            <div>
                <Form />
                <TodoList myTodos={this.state} />
            </div>
        )
    }
}
export default Todo
