import { useEffect, useState } from 'react'
import {Link } from 'react-router-dom';

const MenFashion = () => {
    const [menShirts, setMenShirts]=useState([]);
    const [menShoes, setMenShoes]=useState([]);
    const [menWatches, setMenWatches]=useState([]);
    const [menglass, setMenGlass]=useState([]);
    const [wishmenfashion, setWishmenfashion]=useState([]);

   async function FetchData(){
      const[data1, data2,data3,data4]=await Promise.all([
        fetch(`https://dummyjson.com/products/category/mens-shirts`)
        .then((res)=>res.json()),
        fetch(`https://dummyjson.com/products/category/mens-shoes`)
      .then((res)=>res.json()),
      fetch(`https://dummyjson.com/products/category/mens-watches`)
      .then((res)=>res.json()),
      fetch(`https://dummyjson.com/products/category/sunglasses`)
      .then((res)=>res.json())
      ])
      setMenShirts(data1.products)
      setMenShoes(data2.products)
      setMenWatches(data3.products)
      setMenGlass(data4.products)

             }
    useEffect(() => {
      FetchData();
    },[])

 function handleWishlist(info, e) {
        e.preventDefault();
        e.stopPropagation();
        const button = e.target;
        button.classList.toggle('fw-bold');
        setWishmenfashion((prevWishlist) => {
          if (prevWishlist.some(item => item.id === info.id)) {
            return prevWishlist.filter(item => item.id !== info.id);
          } else {
            return [...prevWishlist, info];
          }
        });
      }
      useEffect(()=>{
      sessionStorage.setItem("menfashion",JSON.stringify(wishmenfashion));
      },[wishmenfashion])
  return (
    <>
       <h4 className='fw-bold py-3  rounded'style={{ position: 'sticky', top: '65.5px', width: '99%', backgroundColor: '#ffffff', zIndex: 1000,fontFamily:'monospace' }}>Men&apos;s Fashion<i className="fa-solid fa-turn-down text-secondary opacity-25 ms-1"></i></h4>
    <div className='d-flex justify-content-evenly flex-wrap items mt-2'>
      {
        menShirts.map((info) =>{
          return(
            <>
            <div className='mt-2'>
           <Link to={`/product-details/${info.id}`} className='text-decoration-none'><div className="card mt-1 position-relative" style={{width: '18rem', gap:'10px',height:'100%'}}>
          <img src={info.thumbnail} className="card-img-top p-3" alt="..."style={{ height: '50%', objectFit: 'fit' }}></img>
          <button className="btn bg-light position-absolute top-0 end-0 m-2"onClick={(e) => handleWishlist(info, e)}><i className="fa-regular fa-heart text-danger"></i></button>
        <div className="card-body">
          <h5 className="card-title text-center ">{info.title}</h5>
          <p className="card-text text-center">{info.description}</p>
          <p className='fw-bold text-center'>price :<span className='text-success'>${info.price}</span></p>
          <button  className="btn btn-warning px-3 text-dark fw-bold ">Add to cart </button>
          <Link to='/payment'><button  className="btn btn-primary px-4 text-white ms-3 fw-bold">Buy Now</button></Link>  
        </div>
    </div>
    </Link>
    </div>
            </>
          )
        })
      }
      {
        menShoes.map((info) =>{
          return(
            <>
            <div className='mt-2'>
            <Link to={`/product-details/${info.id}`} className='text-decoration-none'>
            <div className="card mt-1 position-relative" style={{width: '18rem', gap:'10px'}}>
          <img src={info.thumbnail} className="card-img-top h-50 p-3" alt="..."></img>
          <button className="btn bg-light position-absolute top-0 end-0 m-2" onClick={(e) => handleWishlist(info, e)}><i className="fa-regular fa-heart text-danger"></i></button>
        <div className="card-body">
          <h5 className="card-title text-center ">{info.title}</h5>
          <p className="card-text text-center">{info.description}</p>
          <p className='fw-bold text-center'>price :<span className='text-success'>${info.price}</span></p>
          <button  className="btn btn-warning px-3 text-dark fw-bold ">Add to cart </button>
          <Link to='/payment'><button  className="btn btn-primary px-4 text-white ms-3 fw-bold">Buy Now</button></Link>
        </div>
    </div>
</Link>
</div>
            </>
          )
        })
      }
      {
        menWatches.map((info) =>{
          return(
            <>
            <div className='mt-2'>
            <Link to={`/product-details/${info.id}`} className='text-decoration-none'>
            <div className="card mt-1 position-relative" style={{width: '18rem', gap:'10px'}}>
          <img src={info.thumbnail} className="card-img-top h-50 p-3" alt="..."></img>
          <button className="btn bg-light position-absolute top-0 end-0 m-2" onClick={(e) => handleWishlist(info, e)}><i className="fa-regular fa-heart text-danger"></i></button>
        <div className="card-body">
          <h5 className="card-title text-center ">{info.title}</h5>
          <p className="card-text text-center">{info.description}</p>
          <p className='fw-bold text-center'>price :<span className='text-success'>${info.price}</span></p>
          <button  className="btn btn-warning px-3 text-dark fw-bold ">Add to cart </button>
          <Link to='/payment'><button  className="btn btn-primary px-4 text-white ms-3 fw-bold">Buy Now</button></Link>
        </div>
    </div>
    </Link>
    </div>
            </>
          )
        })
      }
      {
        menglass.map((info) =>{
          return(
            <>
            <div className='mt-2'>
            <Link to={`/product-details/${info.id}`} className='text-decoration-none'>
            <div className="card mt-1 position-relative" style={{width: '18rem', gap:'10px'}}>
          <img src={info.thumbnail} className="card-img-top h-50 p-3 rounded" alt="..."></img>
          <button className="btn bg-light position-absolute top-0 end-0 m-2"title='add to wishlist'onClick={(e) => handleWishlist(info, e)}><i className="fa-regular fa-heart text-danger"></i></button>
        <div className="card-body">
          <h5 className="card-title text-center ">{info.title}</h5>
          <p className="card-text text-center">{info.description}</p>
          <p className='fw-bold text-center'>price :<span className='text-success'>${info.price}</span></p>
          <button  className="btn btn-warning px-3 text-dark fw-bold ">Add to cart </button>
          <Link to='/payment'><button  className="btn btn-primary px-4 text-white ms-3 fw-bold">Buy Now</button></Link>
        </div>
    </div>
    </Link>
    </div>
            </>
          )
        })
      }
    </div>  
    
    
    </>
  )
}

export default MenFashion
