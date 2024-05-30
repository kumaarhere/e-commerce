import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const Categories = () => {
  return (
    <>
    <BrowserRouter>
        <div className='row mt-2 '>
          <div className='col-2 pb-3 fixed '>
            <h5 className='fw-bold text-white text-center bg-info ms-2 py-3 rounded'>categories <i class="fa-solid fa-arrow-down text-dark"></i></h5>
          <hr></hr>
          <Link to='/books'><button className='btn ms-2 p-3 fw-bold border-dark w-100'>Books <i class="fa-solid fa-book"></i></button></Link>
          <Link to='/electronics'><button className='btn ms-2 p-3 fw-bold border-dark mt-3 w-100'>Electronics <i class="fa-solid fa-plug"></i></button></Link>
          <Link to='/babytoys'><button className='btn ms-2 p-3 fw-bold border-dark mt-3 w-100'>Baby Toys <i class="fa-solid fa-gamepad"></i></button></Link>
          <Link to='/mobiles'><button className='btn ms-2 p-3 fw-bold border-dark mt-3 w-100'>Mobiles <i class="fa-solid fa-mobile-screen-button"></i></button></Link>
          <Link to='/mens-fashion'><button className='btn ms-2 p-3 fw-bold border-dark mt-3 w-100'>Men's Fashion <i class="fa-solid fa-mars"></i></button></Link>
          <Link to='/womens-fashion'><button className='btn ms-2 p-3 fw-bold border-dark mt-3 w-100'>Women's Fashion <i class="fa-solid fa-venus"></i></button></Link>
          <Link to='/groceries'><button className='btn ms-2 p-3 fw-bold border-dark mt-3  w-100'>Groceries <i class="fa-solid fa-basket-shopping"></i></button></Link>
            </div> 
          <div className='col-10'>
          <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/cart'  element={<Cart />}/>
            <Route path='/wishlist'  element={<Wishlist />}/>
            <Route path='/search'  element={<Search />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/track-your-order' element={<TrackOrder />}/>
            <Route index element={<DashBoard/>}/>
            <Route path='/electronics' element={<Electronics />}/>
            <Route path='/babytoys' element={<BabyToys />}/>
            <Route path='/mens-fashion' element={<MenFashion />}/>
            <Route path='/womens-fashion' element={<WomenFashion />}/>
            <Route path='/groceries' element={<Groceries />}/>            
            <Route path='/books' element={<Books />}/>            
            <Route path='/mobiles' element={<Mobiles />}/>            

        </Routes>
          </div>
        </div>
    </BrowserRouter>

    </>
  )
}

export default Categories
