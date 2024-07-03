import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import Reg from './components/Reg'
import Tab from './components/Tab'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasic from './components/StateBasic'
import Counter from './components/Counter'
import New from './components/New'
import FormBasics from './components/FormBasics'
import ApiGet from './components/ApiGet'
import Combo from './components/Combo'
import GridCard from './components/GridCard'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <First/> */}
{/* <Reg/> */}

{/* <Tab/> */}
<Navbar/>
<Routes>
  <Route path='/' element={<First name={"Abhi"} age={10}/>}/>
  <Route path='/r' element={<Reg data={{name:"Abhi",age:20,place:"EKM"}}/>}/>
  <Route path='/t' element={<Tab/>}/>
  <Route path='/s' element={<StateBasic/>}/>
  <Route path='/c' element={<Counter/>}/>
  <Route path='/n' element={<New/>}/>
  <Route path='/f' element={<FormBasics/>}/>
  <Route path='/a' element={<ApiGet/>}/>
  <Route path='/co' element={<Combo/>}/>
  <Route path='/gc' element={<GridCard/>}/>
  

</Routes>
      
    </>
  )
}

export default App
