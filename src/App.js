
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './component/header/Header';
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import Shop from './component/shop/Shop';
import Product from './component/product/Product';
// import Page from './component/page/Page';
import Order from './component/page/order/Order';
import Profile from './component/page/profile/Profile';
import User from './component/page/user/User';
import Address from './component/page/address/Address';
import Reviews from './component/page/reviews/Reviews';
import Signup from './component/auth/signup/Signup';
import Login from './component/auth/login/Login';
import Wishlist from './component/page/wishlist/Wishlist';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <Routes>
          {/* <Route path='/' element={} /> */}
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/profile/order' element={<Order/>} />
          <Route path='/profile/user' element={<User/>} />
          <Route path='/profile/address' element={<Address/>} />
          <Route path='/profile/reviews' element={<Reviews/>} />
          <Route path='/auth/signup' element={<Signup/>}/>
          <Route path='/auth/login' element={<Login/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
        </Routes>
        <Footer/>
        {/* // <Routes>
        // </Routes> */}
      </Router>
    </div>
  );
}

export default App;
