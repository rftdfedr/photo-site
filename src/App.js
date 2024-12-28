import './App.css';
import Nav from './pages/components/nav';
import Folders from './pages/home/components/folders';
import InFolder from './pages/folder/components/in-folder';
import Basket from './pages/basket/components/basket';
import { Routes, BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<Folders />} path='/' />
          <Route element={<Basket />} path='basket' />
          <Route element={<InFolder />} path=':date' />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
