import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {

    fetch('http://127.0.0.1:8090/api/collections/recipes/records')
      .then((response) => response.json())
      .then((data) => {
        setData(data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });

    
  }, []); // Empty dependency array to run the effect once when the component mounts

  if(loading){
    return <p>Loading</p>
  }

  if(data.length == 0){
    return <p>No data</p>
  } 

  return (
    <div>
        List of recipes: <br/>
        {data.map((item) => (
          <div className='card'>
            <p key={item.id}>{item.name}</p>
            <p>Calories {item.calories} kcal</p>
          </div>
          
        ))}
    </div>
  )
}

export default App
