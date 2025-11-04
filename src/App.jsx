import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import About from './pages/About'
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <div className='transition-colors duration-600'>
      <Header />
      <main className="flex-grow" >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </main>
    </div>
  )

}

export default App
