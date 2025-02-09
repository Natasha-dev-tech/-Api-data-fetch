
import './App.css'




import Cart from './pages/Cart';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Rootlayouts from './layouts/RootLayouts';


function App() {
  

  return (
    <>
  <Router>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route  element={<Rootlayouts/>}/>
    </Routes>
  </Router>
    </>
  )
}

export default App