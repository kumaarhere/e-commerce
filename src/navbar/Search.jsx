import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Search = () => {
  const { SearchTerm } = useParams();
  const [searchedItems, setSearchedItems] = useState([]);
  const [searchWish, setSearchWish] = useState([]);

  function handleWishlist(info, e) {
    e.preventDefault();
    e.stopPropagation();
    const button = e.target;
    button.classList.toggle('fw-bold');
    setSearchWish((prevWishlist) => {
      if (prevWishlist.some(item => item.id === info.id)) {
        return prevWishlist.filter(item => item.id !== info.id);
      } else {
        return [...prevWishlist, info];
      }
    });
  }

  useEffect(() => {
    sessionStorage.setItem("SearchWish", JSON.stringify(searchWish));
  }, [searchWish]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${SearchTerm}`)
      .then((res) => res.json())
      .then((data) => setSearchedItems(data.products));
  }, [SearchTerm]);

  return (
    <>
      <div className="container-fluid mt-3">
        <h5 className='fw-bold py-3 rounded text-secondary' style={{ position: 'sticky', top: '70.5px', width: '99%', backgroundColor: '#ffffff', zIndex: 1000, fontFamily: 'monospace' }}>
          results for searched term "{SearchTerm}" <i className="fa-solid fa-turn-down text-secondary opacity-25 ms-1"></i>
        </h5>
        <div>
          {
            searchedItems.length === 0 ? (
              <div className='container border rounded mt-4 w-75 bg-secondary text-white text-center'>
                <h3>No Product Found <i className="fa-regular fa-face-frown"></i>.</h3>
              </div>
            ) : (
              searchedItems.map((item) => {
                return (
                  <div className='mt-2 d-inline-block p-1' key={item.id}>
                    <Link to={`/product-details/${item.id}`} className='text-decoration-none'>
                      <div className="card mt-1 position-relative" style={{ width: '18rem', gap: '10px', height: '100%' }}>
                        <img src={item.thumbnail} className="card-img-top h-50" alt="..." style={{ height: '50%', objectFit: 'cover' }}></img>
                        <button className="btn bg-light position-absolute top-0 end-0 m-2" onClick={(e) => handleWishlist(item, e)}><i className="fa-regular fa-heart text-danger"></i></button>
                        <div className="card-body">
                          <h5 className="card-title text-center">{item.title}</h5>
                          <p className="card-text text-center">{item.description}</p>
                          <p className='fw-bold text-center'>price :<span className='text-success'>${item.price}</span></p>
                          <button className="btn btn-warning px-3 text-dark fw-bold">Add to cart</button>
                          <button className="btn btn-primary px-4 text-white ms-3 fw-bold">Buy Now</button>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })
            )
          }
        </div>
      </div>
    </>
  )
}

export default Search;
