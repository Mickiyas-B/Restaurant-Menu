import { useState } from 'react'
import Menu from '../src/component/Menu/Menu';

import menu from '../src/assets/Data/data.js'

import './App.css'

function App() {
return(
<>

<header className="title">
  <h1 >Restaurant Menu</h1>
</header>
<div className="foods-container">

    {menu.map(({ id,title, category, price, img, desc}, i) =>{

      return(
        <Menu 
        key = {i}
        id = {id}
        title ={title}
        category={category}
        price ={price}
        img={img}
        desc={desc}
        />

      );
    })} 

</div>
  </>
  )
  
}
export default App;
