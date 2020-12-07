import React from 'react';

const Header = (props) => {
    return (
        <div className="card-header">
            <h1 className="title-header">You Have Task</h1>
            You have {props.todos} Todos
        </div>
    )
}

export default Header;