import React, { Component } from 'react'

class TodoItems extends Component {
    render() {
        return (
            <div style={styles.cont}>
                
                <div>
                    
                    <p> <input type="checkbox" /> 
                    
                    {this.props.list.text}
                    </p>
                </div> 
            </div>
        )
    }
}
export default TodoItems
const styles ={
    cont:{
        display:"flex",
        justifyContent:"row"
    }
}