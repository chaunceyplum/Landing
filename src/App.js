import MyNav from './components/MyNav'
import logo from './logo.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <div className='bgColor'>
      <MyNav />
      <Home />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/contact' element={<Contact />} />

          <Route path='/about' element={<About />} />

          <Route path='/service' element={<Service />} />

          <Route path='/login' element={<LogIn />} />

          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}

export default App
