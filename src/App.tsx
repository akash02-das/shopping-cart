import { Route, Routes } from 'react-router-dom';

import './App.css';
import Nav from './components/header/Nav';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import About from './pages/About';
import Home from './pages/Home';
import Store from './pages/Store';

function App() {
  return (
    <ShoppingCartProvider>
      <div className='font-appFont'>
        <Nav />
        <main className='bg-bodyBackground w-full py-16 min-h-screen'>
          <div className='w-[90%] my-8 mx-auto'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/store' element={<Store />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </main>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
