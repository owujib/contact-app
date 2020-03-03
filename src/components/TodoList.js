import React, { Component } from 'react'
import TodoItems from './TodoItems'

class TodoList extends Component {
    render() {
        const myTodo = this.props.myTodos.map((aTodo)=>(
            <TodoItems key={aTodo.id} list={aTodo} />
        ))
        return (
            <div>
                {myTodo}
            </div>
        )
    }
}
export default TodoList
