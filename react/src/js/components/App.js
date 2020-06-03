import React, { useState } from 'react';
import data from './data.json'
import Loader from './Loader'

console.log(data);
function App(){
  const [loaderList, setLoaderList]= useState([])

  function handleClick(){
    setLoaderList(data.loaders);
  }

  return(
    <div>
      <ul>
        {
          loaderList.map( item => <Loader {...item} key={item.id}/>)
        }
      </ul>
      <button onClick={handleClick} > Touch me!!!</button>
    </div>
  )
}

export default App;
