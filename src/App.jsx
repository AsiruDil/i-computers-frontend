import { Route, Routes } from 'react-router-dom'
import './App.css'
import TrendingProduct from './components/trendingProducts'
import HomePage from './pages/homePage'
import AdminPage from './pages/adminPage'
import TestPage from './pages/test'
import Test2Page from './pages/text2'
import LoginPage from './pages/loginPage'
import { Toaster } from 'react-hot-toast'

function App() {


  return (
    <>
      
        <div className='w-full h-screen flex justify-center items-center bg-primary text-secondary'>
          <Toaster position='top-right'/>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/admin/*' element={<AdminPage/>}/>
              <Route path='/test' element={<TestPage/>}/>
              <Route path='/test2' element={<Test2Page/>}/>
              <Route path='/login' element={<LoginPage/>}/>

          </Routes>
         
        </div>
        
    </>
  )
}

export default App
