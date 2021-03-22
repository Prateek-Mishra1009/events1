import React from 'react'
//import ReactDOM from 'react-dom';
export default class event2 extends React.Component{
    state={name:'something'};
    handelerChange=()=>
    {
       this.setState({name: document.getElementById('name2').value});

    }
    render(){
        return(
            <div style={{margin:'50px auto'}}>
                <form >
                <table style={{border:'2px solid',width:'500px',height:'500px'}}>
                    Enter Your Name:<input type='Name' onChange={this.handelerChange } ></input>
                    <h2> get lost</h2>
                   <textarea value={this.state.name} id='name2' style={{borderColor:'red',height:'100px'}} > </textarea>
                   </table>
                   </form>
            </div>
        );
    }
}