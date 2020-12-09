import React from 'react'

<div id="root"></div>

class App extends React.Component {
    constructor(){
        super()
        this.state ={
            isLoggedIn : false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(){
        
        this.setState(prevState =>{
            return{
            isLoggedIn : !prevState.isLoggedIn
            }
        })
    }   
     
    render(){
        let buttonText = this.state.isLoggedIn ? "LOG OUT"  : "LOG IN"

      return (
        <div>
        <button onClick={this.handleClick}>{buttonText}</button>
        <h1>{displayText}</h1>
            
        </div>
      )   
   }
    
}

ReactDOM.render(<App />, document.getElementById("root"))