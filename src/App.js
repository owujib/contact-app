import React, { Component } from 'react'
import TodoList from './components/TodoList'
import Form from './components/Form'
import Header from './components/Header'
import TodoForm from './components/TodoForm'

class App extends Component {
    state={
      myTasks: [
        {id:1, text:"Write code"},
        {id:2, text:"Take a bath"},
      ]
    }
    addTodo = (newText)=>{
      this.setState((prevState)=>{
        let newId = prevState.myTasks.length
        console.log(prevState)
        let newTodo = {id: ++newId, text: newText}
        return {
          myTasks : [...prevState.myTasks, newTodo]
        }
      })
      
    }
    render() {
      // console.log(this.state)
        return (
            <div style={styles.cont}>
              <Header />
              <TodoForm myAddTodo={(text)=>this.addTodo(text)} />
              <TodoList myTodos={this.state.myTasks} />
            </div>
        )
    }
}
const styles = {
  cont:{
    width: "50%",
    padding: 20,
    margin:"auto"
  }
}
export default App
