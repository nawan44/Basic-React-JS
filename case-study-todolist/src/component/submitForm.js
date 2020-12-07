import React from 'react'



export default class SubmitForm extends React.Component {

    state = { value: "" };

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.value === '') return;
        this.props.onFormSubmit(this.state.value);
        this.setState({ value: '' })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input
                    type="text"
                    className="input"
                    placeholder="Add New Task"
                    value={this.state.value}
                    onChange={(e) => this.setState({ value: e.target.value })}
                />
                <button className="button">Submit</button>
            </form>
        )
    }
}