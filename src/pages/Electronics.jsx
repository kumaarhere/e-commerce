import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Electronics = () => {
    const [laptop, setLaptop]=useState([]);
    const [moto, setMoto]=useState([]);
    const [gadgets, setGadgets]=useState([]);

    async function FetchData(){
        const [data1, data2,data3] =await Promise.all([
            fetch(`https://dummyjson.com/products/category/laptops`)
            .then((res)=>res.json()),
            fetch(`https://dummyjson.com/products/category/tablets`)
            .then((res)=>res.json()),
            fetch(`https://dummyjson.com/products/category/mobile-accessories`)
            .then((res)=>res.json())

        ])
        setLaptop(data1.products);
        setMoto(data2.products);
        setGadgets(data3.products);
    }

     useEffect(() => {
       FetchData();
     },[])
     
     function handleWishlist(e){
      e.preventDefault();
      const button = e.target;
     button.classList.toggle('fw-bold');
   }
  return (
    <>
    
    <h4 className='fw-bold py-3  rounded'style={{ position: 'sticky', top: '65.5px', width: '99%', backgroundColor: '#ffffff', zIndex: 1000,fontFamily:'monospace' }}>Electronics<i className="fa-solid fa-turn-down text-secondary opacity-25 ms-1"></i></h4>
    <div className='d-flex justify-content-evenly flex-wrap items'>
      {
        laptop.map((info) =>{
          return(
            <>
            <div className='mt-2'>
            <Link to={`/product-details/${info.id}`} className='text-decoration-none'>
            <div className="card mt-1 position-relative" style={{width: '18rem', gap:'10px'}}>
          <img src={info.thumbnail} className="card-img-top h-50" alt="..."></img>
          <button className="btn bg-light position-absolute top-0 end-0 m-2" onClick={handleWishlist}><i className="fa-regular fa-heart text-danger"></i></button>
        <div className="card-body">
          <h5 className="card-title text-center">{info.title}</h5>
          <p className="card-text text-center">{info.description}</p>
          <p className='fw-bold text-center'>price :<span className='text-success'>${info.price}</span></p>
          <button  className="btn btn-warning px-3 text-dark fw-bold ">Add to cart </button>
          <button  className="btn btn-primary px-4 text-white ms-3 fw-bold">Buy Now</button>
        </div>
    </div>
    </Link>
    </div>
            </>
          )
        })
      }
      {
        gadgets.map((info) =>{
          return(
            <>
            <div className='mt-2'>
            <Link to={`/product-details/${info.id}`} className='text-decoration-none'>
            <div className="card mt-1 position-relative" style={{width: '18rem', gap:'10px',height:'100%'}}>
          <img src={info.thumbnail} className="card-img-top h-50" alt="..."style={{ height: '50%', objectFit: 'fit' }}></img>
          <button className="btn bg-light position-absolute top-0 end-0 m-2" onClick={handleWishlist}><i className="fa-regular fa-heart text-danger"></i></button>
        <div className="card-body">
          <h5 className="card-title text-center">{info.title}</h5>
          <p className="card-text text-center">{info.description}</p>
          <p className='fw-bold text-center'>price :<span className='text-success'>${info.price}</span></p>
          <button  className="btn btn-warning px-3 text-dark fw-bold ">Add to cart </button>
          <button  className="btn btn-primary px-4 text-white ms-3 fw-bold">Buy Now</button>
        </div>
    </div>
    </Link>
    </div>
            </>
          )
        })
      }
      {
        moto.map((info) =>{
          return(
            <>
            <div className='mt-2'>
            <Link to={`/product-details/${info.id}`} className='text-decoration-none'>
            <div className="card mt-1 position-relative" style={{width: '18rem', gap:'10px',height:'100%'}}>
          <img src={info.thumbnail} className="card-img-top h-50" alt="..."style={{ height: '50%', objectFit: 'fit' }}></img>
          <button className="btn bg-light position-absolute top-0 end-0 m-2" onClick={handleWishlist}><i className="fa-regular fa-heart text-danger"></i></button>
        <div className="card-body">
          <h5 className="card-title text-center">{info.title}</h5>
          <p className="card-text text-center">{info.description}</p>
          <p className='fw-bold text-center'>price :<span className='text-success'>${info.price}</span></p>
          <button  className="btn btn-warning px-3 text-dark fw-bold ">Add to cart </button>
          <button  className="btn btn-primary px-4 text-white ms-3 fw-bold">Buy Now</button>
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

export default Electronics
