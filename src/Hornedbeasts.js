import React, { Component } from 'react'

export class Hornedbeasts extends Component {
    render() {
        return (
            <div> 
                <h1>{this.props.title}</h1>
                <img src={this.props.imgUrl} alt= {this.props.description}/>
                <p>{this.props.description}</p>
                
            </div>
        )
    }
}

export default Hornedbeasts
