import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
  // Outline Handler 
  clickYo = () => {
    alert('Outline Handler')
  }
  render() {
    return (
      <div className="App">
        {/* Inline Handler */}
        <button onClick={() => alert('Inline Handler')}>Click me!</button>
        {/* Outline Handler */}
        <br />
        <button onClick={this.clickYo}>Click</button>
      </div>
    );
  }
}
export default App;
