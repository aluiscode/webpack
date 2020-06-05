import React, { useState } from 'react';
import data from './data.json'
import Loader from './Loader'
import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4'

import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'

console.log(data);
function App(){
  const [loaderList, setLoaderList]= useState([])

  function handleClick(){
    setLoaderList(data.loaders);
  }

  return(
    <div>
      <p className='sass'>
        sass
      </p>
      <p className='less'>
        less
      </p>
      <p className='stylus'>
        stylus
      </p>
      <video src={video} width={360} controls poster={logo}></video>
      <p>
        <img src={logo} width="40px"/>
      </p>
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
