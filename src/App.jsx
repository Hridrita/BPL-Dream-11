import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/NavBar/Banner'
import NavBar from './components/NavBar/NavBar'
import Players from './components/NavBar/Players'
import { ToastContainer } from 'react-toastify'


const playerPromise = fetch("/data.json")
.then(res => res.json());




function App() {

  const [coin, setCoin] = useState(50000);
  
  
  return (
    <>
    <Suspense fallback={"loading"}>
      <NavBar coin={coin}></NavBar>
    </Suspense>
    
    <Banner></Banner>

    <Suspense fallback={<div className="flex justify-center my-10"><span className="loading loading-spinner loading-lg"></span></div>}>
        <Players playerPromise={playerPromise} setCoin={setCoin} coin={coin} />
      </Suspense>




      <ToastContainer/>
    
    </>
  )
}

export default App
