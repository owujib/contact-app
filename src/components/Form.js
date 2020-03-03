import React  from 'react'

class Form extends React.Component {
    state={
        username:"",
        password:"",
        para:""
    }
    changeInput = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    updatePara = (e)=>{
        e.preventDefault();
        this.setState((prevState)=>{
            return {
                para: `Your username is ${prevState.username} and your password is ${prevState.password}`
            }
        })

        // this.setState({
        //     para: `Your username is ${this.state.username} and your password is ${this.state.password}`
        // })
    }
    
    render() {
        return (
            <div style={{padding:20}}>
                {/* <h3>Username: {this.state.username} </h3>
                <h3>Password: {this.state.password}</h3> */}
                <h3>{this.state.para}</h3>
                <form onSubmit={(e)=>this.updatePara(e)}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username"  placeholder="Enter Username" onChange={(e)=>this.changeInput(e) } />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" id="password"  onChange= {(e)=>this.changeInput(e)} />
                    </div>
                    <div>
                        <button>Send</button>

                    </div>
                </form>
            </div>
        )
    }
}
export default Form