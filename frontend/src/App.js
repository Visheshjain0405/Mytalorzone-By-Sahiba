import logo from './logo.svg';
import './App.css';
import Home from './Components/Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login';
import Registration from './Components/Pages/Registration';
import ProductPage from './Components/Product/ProductPage';
import AddProduct from './Components/Admin/AddProduct';

function App() {
  return (
    <div>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
      </Routes>
      {/* <ProductPage/> */}
    </div>
  );
}

export default App;
