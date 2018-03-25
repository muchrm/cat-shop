import React, { Component } from 'react';
import Media from './Madia'
class Cat extends Component {
    render(){
        return (
        <div className="column is-one-quarter">
        <Media image={this.props.cat.image}/>
        <button>Add to cart</button>
        </div>
        )
    }
}

export default Cat;