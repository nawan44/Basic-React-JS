import React, {Component}from 'react'
import Axios from 'axios';


class ApiComponent extends Component{
    constructor() {
            super();
            this.state = {
              data: []
            };
          }
          componentDidMount() {
            Axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
              this.setState({ data: res.data });
            });
          }
        
          render() {
            return (
              <div >
                <p>React Hooks Rest API</p>
                <ul>
                  {this.state.data.map(item => (
                    <li>{item.title}</li>
                  ))}
                </ul>
              </div >
            );
          }
}

export default ApiComponent;