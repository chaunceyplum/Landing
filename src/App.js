import MyNav from './components/MyNav'
import logo from './logo.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Pricing from './components/Pricing'
import Features from './components/Features'

function App() {
  return (
    <div className='bgColor'>
      <MyNav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/pricing' element={<Pricing />} />

          <Route path='/features' element={<Features />} />

          {/*<Route path='/service' element={<Service />} />

          <Route path='/login' element={<LogIn />} />

          <Route path='/signup' element={<SignUp />} /> */}
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App
