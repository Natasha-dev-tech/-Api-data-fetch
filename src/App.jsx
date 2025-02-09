import './App.css'

import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rootlayouts from './layouts/RootLayouts';

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap other routes with Rootlayouts */}
        <Route path='/' element={<Home />} />
        <Route element={<Rootlayouts />}>
       <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;