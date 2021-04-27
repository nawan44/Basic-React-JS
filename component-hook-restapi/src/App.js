import logo from './logo.svg';
import './App.css';
import ApiComponent from './apiComponent';
import ApiHook from './apiHook';
import {Row, Col} from 'reactstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt=""/>
       <h1> Compare : 
         <p>React Component & React Hook</p>
         <h5>@nawan44</h5>

         </h1>

      </header>
     <Row>
       <Col>
       <h1>React Component</h1>
       <ApiComponent />

       </Col>
       <Col>
       <h1>
       React Hook
       </h1>
       <ApiHook />

       </Col>
     </Row>
    </div>
  );
}

export default App;
