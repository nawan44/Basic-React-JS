import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: [1, 2, 3, 4, 5, 6, 7, 8],
      employees: ["saputra", "ruhendi", "rahmat", "gunawan"],
      employeeProfile: [
        {
          id: 1,
          name: "sapuptra",
          address: "Jl Raya"
        },
        {
          id: 2,
          name: "ruhendi",
          address: "Jl ABC"
        },
        {
          id: 3,
          name: "rahmat",
          address: "Jl ninja"
        }

      ]
    }
  }
  render() {
    const result = this.state.number.map((newNumber, index) => {
      return <li key={index}>{newNumber = 2}</li>
    })
    const listEmployee = this.state.employees.map((employee, index) => {
      return <li key={index}>{employee}</li>
    })
    const listEmployeeProfile = this.state.employeeProfile.map((employee, index) => {
      return (
        <React.Fragment>
          <li key={index}>{employee.name}</li>
          <li key={index}>{employee.address}</li>

        </React.Fragment>

      )

    })
    return (
      <div className="App">
        <h1>Looping</h1>
        {listEmployeeProfile}
      </div>
    );
  }
}

export default App;
