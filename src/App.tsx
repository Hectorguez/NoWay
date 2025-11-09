import { useState } from 'react'

import './App.css'
import { IOC } from './components/IOC/ioc'
import { Tabla } from './components/Tabla/tabla'
import { AddIOC } from './components/AddIOC/addioc'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <IOC
    //   ioc_value={"1.2.3.4"}
    //   type={"url"}
    //   ioc_name={"testName"}
    // />
    <div>
      <AddIOC />
      <Tabla />
    </div>
  )
}

export default App
