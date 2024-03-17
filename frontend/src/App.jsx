import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
      axios.get('/user')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  },[])

  return (
    <>
      <h1>{data.login}</h1>
      <p><a href={data.html_url}>{data.html_url}</a></p>
      <p><a href={data.blog}>{data.blog}</a></p>
      
    </>
  )
}

export default App
