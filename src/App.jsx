import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Components from './pages/Components'
import ExpandingCards from './components/ExpandingCards'
import Test from './components/Test'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/components/*' element={<Components />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
