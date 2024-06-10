
import { BrowserRouter,Routes,Route, NavLink } from 'react-router-dom';
import {Link } from 'react-router-dom';
import Login from './Login';
import Cart from './cart/Cart';
import Wishlist from './Wishlist';
import Search from './Search';
import NavLogo from './NavLogo';
import Register from './Register';
import TrackOrder from './TrackOrder';
import DashBoard from '../pages/DashBoard';
import Electronics from '../pages/Electronics';
import Kitchen from '../pages/Kitchen';
import MenFashion from '../pages/MenFashion';
import WomenFashion from '../pages/WomenFashion';
import Groceries from '../pages/Groceries';
import Sports from '../pages/Sports';
import Mobiles from '../pages/Mobiles';
import Payment from '../payment/Payment';
import Detailed from '../pages/Detailed';
import '../App.css';
import { useEffect, useState } from 'react';


const NavbarIndex = () => {
  const [items,setcartItems] = useState();
  const [SearchTerm,SetSearchTerm] = useState("");

  useEffect(() => {
  const getCartItems = JSON.parse(sessionStorage.getItem('sportscart')) || [];
  setcartItems(getCartItems);
},[]);

  return (
    <div>
      <BrowserRouter>
      <div className='d-flex justify-content-evenly bg-dark-subtle rounded py-2 w-100' style={{overflow:'scroll' ,position:'fixed',top:'0',zIndex:'999'}}>
      <Link to="/"><NavLogo/></Link> 
      <div className='mt-2'>
     <form className='form-group d-flex'>
        <input type='text'
               placeholder='search Q-mart '
               id='search'
               title='Search products'
               className='form-control px-3 py-2 border-secondary fw-bold'
               value={SearchTerm}
               onChange={(e)=>SetSearchTerm(e.target.value)}
        ></input>
         <Link to={`/search/${SearchTerm}`}>
        <button className='btn btn-info ms-1 p-2 px-3 ms-2'><i className="fa-solid fa-magnifying-glass fs-5"></i></button>
        </Link>
     </form>
    </div>
      <Link to="/login">
        <div className='mt-2'>
          <div className='nav-link'>
           <button className='btn text-dark border-dark px-4 fw-bold unq' type='button'>Login&nbsp;<i className="fa-solid fa-right-to-bracket text-primary"></i>
           </button>
          </div>
        </div>
      </Link>
      <Link to="/wishlist">
        <div className='mt-2'>
          <div className='nav-link'>
            <button className='btn text-dark border-dark px-4 fw-bold unq'>Wishlist&nbsp;<i className="fa-regular fa-heart text-danger"></i></button>
          </div>
        </div>
      </Link>
      <Link to="/track-your-order">
        <div className='mt-2'>
          <div className='nav-link'>
            <button className='btn text-dark border-dark px-4 fw-bold unq'>Track my order&nbsp;<i className="fa-solid fa-truck-fast"></i></button>
          </div>
        </div>
      </Link>
      <Link to="/cart">
        <div className='mt-2'>
         <div className='nav-link'>
           <button className='btn text-dark border-dark px-4 fw-bold unq'>Cart&nbsp;{items&&items.length==0?<i className="fa-solid fa-cart-shopping text-secondary"></i>:<span className="badge text-bg-danger">{items&&items.length}</span>}</button>
         </div>
        </div>
      </Link>
      </div>
        <div className='row mt-2 '>
          <div className='sidebar col-lg-2 col-2 mt-5 pb-3' style={{position:'fixed'}}>
            <Link to='/' className='text-decoration-none'><h5 className='fw-bold text-dark text-center bg-info ms-2 py-3 rounded'>Home <i className="fa-solid fa-house-chimney text-dark"></i></h5></Link>
          <hr></hr>
          <nav>
          <NavLink to='/sports'><button className='btn ms-2 p-3 fw-bold border-dark w-100 unq'>Sports <i className="fa-solid fa-baseball"></i></button></NavLink>
          <NavLink to='/electronics'><button className='btn ms-2 p-3 fw-bold border-dark mt-3 w-100 unq'>Electronics <i className="fa-solid fa-plug"></i></button></NavLink>
          <NavLink to='/kitchen'><button className='btn ms-2 p-3 fw-bold border-dark mt-3 w-100 unq'>Kitchen  <i className="fa-solid fa-kitchen-set"></i></button></NavLink>
          <NavLink to='/mobiles'><button className='btn ms-2 p-3 fw-bold border-dark mt-3 w-100 unq'>Mobiles <i className="fa-solid fa-mobile-screen-button"></i></button></NavLink>
          <NavLink to='/mens-fashion'><button className='btn ms-2 p-3 fw-bold border-dark mt-3 w-100 unq'>Men&apos;s Fashion <i className="fa-solid fa-mars"></i></button></NavLink>
          <NavLink to='/womens-fashion'><button className='btn ms-2 p-3 fw-bold border-dark mt-3 w-100 unq'>Women&apos;s Fashion <i className="fa-solid fa-venus"></i></button></NavLink>
          <NavLink to='/groceries'><button className='btn ms-2 p-3 fw-bold border-dark mt-3  w-100 unq'>Groceries <i className="fa-solid fa-basket-shopping"></i></button></NavLink>
          </nav>
            </div> 
          <div className='col-lg-10 offset-lg-2 col-10 offset-2 mt-5 pt-3'>
          <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/cart'  element={<Cart />}/>
            <Route path='/wishlist'  element={<Wishlist />}/>
            <Route path="/search/:SearchTerm" element={<Search />} />
            <Route path='/register' element={<Register />}/>
            <Route path='/track-your-order' element={<TrackOrder />}/>
            <Route index element={<DashBoard/>}/>
            <Route path='/electronics' element={<Electronics />}/>
            <Route path='/kitchen' element={<Kitchen />}/>
            <Route path='/mens-fashion' element={<MenFashion />}/>
            <Route path='/womens-fashion' element={<WomenFashion />}/>
            <Route path='/groceries' element={<Groceries />}/>            
            <Route path='/sports' element={<Sports />}/>            
            <Route path='/mobiles' element={<Mobiles />}/>
            <Route path='/payment' element={< Payment/>}/> 
            <Route path='/product-details/:ID' element={<Detailed/>}/>          

        </Routes>
          </div>
        </div>
     
      </BrowserRouter>
    </div>
  )
}

export default NavbarIndex
