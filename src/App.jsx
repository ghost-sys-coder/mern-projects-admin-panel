import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Login, List, New, Single, NoPageFound } from './pages';

import { productInputs, userInputs } from './formSource';
import { DarkModeContext } from './context/darkModeContext';

import './App.scss'
import './style/dark.scss';
import { useContext } from 'react';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <main className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userid' element={<Single />} />
              <Route path='new' element={<New inputs={userInputs} title='Add New User' />} />
            </Route>
          </Route>
          <Route path='products'>
            <Route index element={<List />} />
            <Route path=':productId' element={<Single />} />
            <Route path='new' element={<New inputs={productInputs} title='Add New Product' />} />
          </Route>
          <Route path='*' element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
