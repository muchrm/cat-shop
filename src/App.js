import React, { Component } from 'react';
import Cat from './Cat'
import axios from 'axios'
class App extends Component {
  constructor(){
    super()
    this.state = {
      cats:[]
    }
  }
  componentDidMount(){
    axios.get('http://www.mocky.io/v2/5ab7e14e3400007a0067ac75')
    .then((response) => {
      this.setState({
        cats:response.data
      });
    });
  }
  render() {
    return (
      <div className="columns is-multiline">
        {
          this.state.cats.map((cat)=>{
            return <Cat key={cat.id} cat={cat}/>
          })
        } 
      </div>
    );
  }
}

export default App;