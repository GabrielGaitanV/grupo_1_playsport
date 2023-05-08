import React, { Component } from "react";

class Total extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            total:''
        }
    }
    
    apiCall(url, consecuencia ) {
        fetch(url)
            .then( response => response.json())
            .then( data => consecuencia(data))
            .catch(error => console.log(error));
    }
    
    componentDidMount(){
        this.apiCall('http://localhost:3007/api/users', this.mostrarImg)
    }

    mostrarImg = (data) => {
        console.log(data);
        this.setState(
            {
                total: data.count
            }
        )
    }
    
    render() {
        return (
            <div className="total">
                <h3>{this.state.total}</h3>
            </div>
        );
    }
  }

export default Total;