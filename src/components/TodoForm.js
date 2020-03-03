import React  from 'react'

class TodoForm extends React.Component {
    state={
        task:"",
    }
    changeInput = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    addNewTodo = (e)=>{
        e.preventDefault();
        this.props.myAddTodo(this.state.task);
        this.setState({
            task:""
        })
    }
    
    render() {
        return (
            <div style={{padding:20}}>
                <h2>{this.state.task}</h2>
                <form>
                    
                    <div>
                        <label>Task</label>
                        <input type="text" placeholder="Enter Task" id="task" value={this.state.task}  onChange= {(e)=>this.changeInput(e)} />
                    </div>
                    <div>
                        <button onClick={(e)=>this.addNewTodo(e)}>ADD TODO</button>

                    </div>
                </form>
            </div>
        )
    }
}
export default TodoForm