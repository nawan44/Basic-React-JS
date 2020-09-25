import React from 'react';

class Props extends React.Component {

    render() {
        const { functionIncrement } = this.props
        return (
            <button onClick={functionIncrement}>Increment</button>
        )
    }
}

export default Props;