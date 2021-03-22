import { render } from '@testing-library/react'
import React from'react'

class App extends React.Component
{
  state={content:'hey i am here'};

  changed=()=>
  {
    this.setState({content :'i amnot here anymore'})
  }
  render()
  {
    return(
      <div>
      <h1> {this.state.content}</h1>
      <button onClick={this.changed}>  clic me</button>
      </div>
    );
  }
};export default App