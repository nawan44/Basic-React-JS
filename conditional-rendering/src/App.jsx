import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }
  logoutMethod = () => {
    this.setState({ isLoggedIn: false })
  }
  loginMethod = () => {
    this.setState({ isLoggedIn: true })
  }

  render() {
    let { isLoggedIn } = this.state;
    const renderButton = () => {
      if (isLoggedIn) {
        return <button onClick={this.logoutMethod}>Logout</button>
      }
      else {
        return <button onClick={this.loginMethod}>Login</button>
      }
    }
    return (
      <div className="App">
        <h1>Conditional Rendering</h1>
        {isLoggedIn ? <button onClick={this.logoutMethod}>Logout</button> : <button onClick={this.loginMethod}>Login</button>}
      </div>
    );
  }
}
export default App;
