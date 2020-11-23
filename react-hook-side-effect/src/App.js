import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import { useState } from 'react';
import "./App.css";
import MyClass from "./MyClass";
import MyFunc from "./MyFunc";
import NewsFeed from "./NewsFeed";

function App() {
  const [toogle, setToogle] = useState(true);
  const handleToggle = () => setToogle(currentState => !currentState)
  return (
    <Layout>
      <button onClick={handleToggle}> Toggle</button>
      {/* {toogle && <MyClass />} */}
      {/* {toogle && <MyFunc />} */}
      <NewsFeed />
    </Layout>
  );
}

export default App;
