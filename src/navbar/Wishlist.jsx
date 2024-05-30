import { useEffect } from "react";
import { useState } from "react";

const Wishlist = () => {
  const [wishlists, setWishlists]= useState([]);
   useEffect(()=>{
     const favitems = sessionStorage.getItem('wishlist');
     setWishlists(JSON.parse(favitems));
   },[])
   console.log(wishlists);
    return (    
    <div className="wishlist-container">
       <h4 className='fw-bold py-3 rounded' style={{ position: 'sticky', top: '70.5px', width: '99%', backgroundColor: '#ffffff', zIndex: 1000, fontFamily: 'monospace' }}>
                Your Wishlists<i className="fa-solid fa-turn-down text-secondary opacity-25 ms-1"></i>
            </h4>
    {wishlists.length === 0 ? (
      <div className='container border rounded w-75 bg-secondary text-white text-center'>
      <h3>Your wishlist is empty.</h3>
    </div>
    ) : (
    <div className="container d-flex flex-wrap">
      {wishlists.map((item, index) => (
        <div className="card m-2 position-relative" style={{width: '22rem', gap:'5px',height:'100%',aspectRatio:'3/4'}} key={index}>
          <img src={item.thumbnail} className="card-img-top w-50 mx-5 ps-5" alt={item.title} />
          <button className="btn bg-light position-absolute top-0 end-0 m-2"><i className="fa-regular fa-heart fw-bold text-danger"></i></button>
          <div className="card-body rounded shadow">
            <h5 className="card-title text-center fw-bold">{item.title}</h5>
            <p className="card-text text-center">{item.description}</p>
            <div className="d-flex justify-content-between align-items-center">
            <h4 className="card-text">${item.price}</h4>
            <h4 className="card-text"><i className="fa fa-star text-warning"></i>{item.rating}</h4>
            </div>
            <div className="card-footer d-flex justify-content-around mt-4">
                <button className="btn btn-danger px-3 rounded shadow fw-bold mt-3">Remove</button>
                <button className="btn btn-info px-4 rounded shadow fw-bold text-nowrap mt-3">Add To Cart</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    )}
  </div>
);
};

export default Wishlist;

