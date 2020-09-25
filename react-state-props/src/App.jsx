import React from 'react';
import Increment from './Props';
import Props from './Props';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            val1: 1,
            val2: 2,
            resu: 0
        }
    }

    functionIncrement = () => {
        this.setState({
            val1: parseInt(this.state.val1) + 1
        })
    }

    render() {
        return (
            <div>
                Hello World React JS

                <p>
                    {this.state.val1}
                </p>
                <p>
                    {this.state.val2}
                </p>
                <p>{this.state.resu}</p>

                <Increment functionIncrement={this.functionIncrement}/>

            </div>
        )
    }
}

export default App;