import { Route, Routes } from 'react-router-dom'
import './App.css'
import TrendingProduct from './components/trendingProducts'
import HomePage from './pages/homePage'

function App() {


  return (
    <>
      
        <div className='w-full h-screen flex justify-center items-center'>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
          </Routes>
         
        </div>
        
    </>
  )
}

export default App
