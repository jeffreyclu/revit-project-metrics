import React, { useState, useEffect } from 'react';
import './app.styles.css';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let resp = await fetch('http://localhost:3001');
      let data = await resp.json();
      console.log(data);
    }
    fetchData();
  }, [])
  return(
    <div>
      <h1>sup</h1>
    </div>
  )
}

export default App;
