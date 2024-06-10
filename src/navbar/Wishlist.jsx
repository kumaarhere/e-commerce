import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Wishlist = () => {


  
  const [wishlists, setWishlists]= useState([]);
   useEffect(()=>{
    let mobile = JSON.parse(sessionStorage.getItem('mobiles')) || [];
    let sports = JSON.parse(sessionStorage.getItem('sports')) || [];
    let kitchen = JSON.parse(sessionStorage.getItem('kitchen')) || [];
    let menfashion = JSON.parse(sessionStorage.getItem('menfashion')) || [];
    let womenfashion = JSON.parse(sessionStorage.getItem('womenfashion')) || [];
    let electroics = JSON.parse(sessionStorage.getItem('electronics')) || [];
    let groceries = JSON.parse(sessionStorage.getItem('groceries')) ||[];
    let home = JSON.parse(sessionStorage.getItem('home')) || [];
    let searched = JSON.parse(sessionStorage.getItem('SearchWish')) || [];
    //combine
    const allWishlistItems=[...mobile,...sports,...kitchen,...menfashion,...womenfashion,...electroics,...groceries,...home,...searched];
    setWishlists(allWishlistItems);

   },[])
   const handleRemoveFromWishlist = (itemId) => {
    setWishlists((prevWishlists) => {
        const updatedWishlists = prevWishlists.filter(item => item.id !== itemId);

        // Update sessionStorage
        const categories = ['mobiles', 'sports', 'kitchen', 'menfashion', 'womenfashion', 'electronics', 'groceries', 'home','SearchWish'];
        categories.forEach(category => {
            const categoryItems = JSON.parse(sessionStorage.getItem(category)) || [];
            const updatedCategoryItems = categoryItems.filter(item => item.id !== itemId);
            sessionStorage.setItem(category, JSON.stringify(updatedCategoryItems));
        });

        return updatedWishlists;
    });
};
const handleCart = (item, e) => {
  e.stopPropagation();

  let sportsCart = JSON.parse(sessionStorage.getItem('sportscart')) || [];
  const isItemInCart = sportsCart.some(cartItem => cartItem.id === item.id);

  if (!isItemInCart) {
    sportsCart.push(item);
    sessionStorage.setItem('sportscart', JSON.stringify(sportsCart));
    const button = e.target;
    button.textContent = 'Added to Cart!';
    button.disabled = true;
  } else {
    toast.error("item is already in the cart")
  }
};
    return (    
    <div className="wishlist-container">
       <h4 className='fw-bold py-3 rounded' style={{ position: 'sticky', top: '70.5px', width: '99%', backgroundColor: '#ffffff', zIndex: 1000, fontFamily: 'monospace' }}>
                Your Wishlists<i className="fa-solid fa-turn-down text-secondary opacity-25 ms-1"></i>
            </h4>
    {wishlists&&wishlists.length === 0 ? (
      <div className='container border rounded w-75 bg-secondary text-white text-center'>
      <h3>Your wishlist is empty.</h3>
    </div>
    ) : (
    <div className="container d-flex flex-wrap">
      {wishlists&&wishlists.map((item, index) => (
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
                <button className="btn btn-danger px-3 rounded shadow fw-bold mt-3"onClick={() => handleRemoveFromWishlist(item.id)}>Remove</button>
                <button className="btn btn-info px-4 rounded shadow fw-bold text-nowrap mt-3 " onClick={(e) => handleCart(item, e)}>Add To Cart</button>
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

