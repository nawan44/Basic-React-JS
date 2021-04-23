import Axios from 'axios';
import React, { useEffect, useState } from 'react';


function ApiHook(){

    const [data, setData] = useState([]);

    useEffect(() => {
      Axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
        setData(res.data);
      });
    });
  
  
    return (
      <div >
        <p>React Hooks Rest API</p>
        <ul>
          {data.map(item => (
            <li>{item.title}</li>
          ))}
        </ul>
      </div >
    );
}
