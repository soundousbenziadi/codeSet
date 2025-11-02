import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
function App() {

  return (
    <div className='transition-colors duration-600'>
      <Header />
      <main className="flex-grow" >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )

}

export default App
