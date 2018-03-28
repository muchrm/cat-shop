import React, { Component } from 'react';
import Cat from './Cat'
import axios from 'axios'
import HashImage from './HashImage'
import crypto from 'crypto';

class App extends Component {
  constructor(){
    super()
    this.state = {
      cats:[]
    }
    var current_date = (new Date()).valueOf().toString();
    var random = Math.random().toString();
    this.hash = crypto.createHash('sha1').update(current_date + random).digest('hex');
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
      <div>
        <HashImage hash={this.hash}/>
        <br/>
        <div className="columns is-multiline">
          {
            this.state.cats.map((cat)=>{
              return <Cat key={cat.id} cat={cat}/>
            })
          } 
        </div>
      </div>
    );

  }
}

export default App;