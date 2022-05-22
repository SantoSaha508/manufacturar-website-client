import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
      </Routes>
    </div>
  );
}

export default App;
