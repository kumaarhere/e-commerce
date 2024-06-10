import { Link} from 'react-router-dom';
import { useEffect, useState } from 'react';



const Sports = () => {

    const [products, setProducts] = useState([]);
    const [wishlists, setWishlists] = useState([]);
    const [sportscart, setSportscart] = useState([]);
    
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/sports-accessories`)
            .then((res) => res.json())
            .then((data) => setProducts(data.products));
    }, []);

    function handleWishlist(info, e) {
        e.preventDefault();
        e.stopPropagation();
        const button = e.target;
        button.classList.toggle('fw-bold');
        setWishlists((prevWishlist) => {
            if (prevWishlist.some(item => item.id === info.id)) {
                return prevWishlist.filter(item => item.id !== info.id);
            } else {
                return [...prevWishlist, info];
            }
        });
    }
    function handleCart(info, e) {
        e.preventDefault();
        setSportscart((prevCart) => {
            if (prevCart.some(cartItem => cartItem.id === info.id)) {
                return prevCart;
            } else {
                return [...prevCart, info];
            }
        });

        const button = e.target;
        button.textContent = 'Added!';
        button.disabled = true;
    }
    useEffect(()=>{
        sessionStorage.setItem("sports",JSON.stringify(wishlists));
    },[wishlists])
    useEffect(()=>{
        sessionStorage.setItem("sportscart",JSON.stringify(sportscart));
    },[sportscart])

    return (
        <>
        <div className='p-2'>
            <h4 className='fw-bold py-3 rounded' style={{ position: 'sticky', top: '65.5px', width: '99%', backgroundColor: '#ffffff', zIndex: 1000, fontFamily: 'monospace' }}>
                Sports-Accessories<i className="fa-solid fa-turn-down text-secondary opacity-25 ms-1"></i>
            </h4>
            <div className='d-flex justify-content-evenly flex-wrap items'>
                {products.map((info) => (
                    <div className='mt-2' key={info.id}>
                        <Link to={`/product-details/${info.id}`} className='text-decoration-none'>
                            <div className="card mt-1 position-relative" style={{ width: '18rem', gap: '10px', height: '100%' }}>
                                <img src={info.thumbnail} className="card-img-top h-50" alt="..." style={{ height: '50%', objectFit: 'fit' }}></img>
                                <button className="btn bg-light position-absolute top-0 end-0 m-2" onClick={(e) => handleWishlist(info, e)}>
                                    <i className="fa-regular fa-heart text-danger"></i>
                                </button>
                                <div className="card-body">
                                    <h5 className="card-title text-center">{info.title}<span className='bg-secondary-subtle rounded m-2 p-1 text-nowrap'>{info.rating}<i className='fa fa-star text-warning'></i></span></h5>
                                    <p className="card-text text-center">{info.description}</p>
                                    <p className='fw-bold text-center'>price :<span className='text-success'>${info.price}</span></p>
                                    <button className="btn btn-warning px-3 text-dark fw-bold" onClick={(e) => handleCart(info, e)}>Add to cart</button>
                                    <button className="btn btn-primary px-4 text-white ms-3 fw-bold">Buy Now</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            </div>
        </>
    );
}

export default Sports;
