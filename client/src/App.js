import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavMenu from './components/nav-menu/NavMenu';
import MainPage from './components/main-page/MainPage';
import ShoppingCard from './components/shopping-card/ShoppingCard';

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/basket" element={<ShoppingCard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
