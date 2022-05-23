import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/NotFound/NotFound';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='home' element={<Home></Home>}></Route>

        <Route path='blog' element={<Blog></Blog>}></Route>

        <Route path='myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>

        <Route path='purchase' element={<Purchase></Purchase>}></Route>

        <Route path='login' element={<Login></Login>}></Route>

        <Route path='/*' element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
