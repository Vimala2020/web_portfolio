
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Index'
import About from './pages/Home/About';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutme' element={<About />}/>
      
      </Routes>
    </BrowserRouter>

  );
}

export default App;
