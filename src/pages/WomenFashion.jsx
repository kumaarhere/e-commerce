import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const WomenFashion = () => {

    const [womenDress, setWomenDress]=useState([]);
    const [womenShoes, setWomenShoes]=useState([]);
    const [womenBags, setWomenBags]=useState([]);
    const [womenWatches, setWomenWatches]=useState([]);
    const [womenjewels, setWomenJewels]=useState([]);
    const [tops, settops]=useState([]);

    async function FetchData(){
        const [data1, data2, data3,data4,data5,data6] = await Promise.all([
            fetch(`https://dummyjson.com/products/category/womens-dresses`)
            .then((res)=>res.json()),
            fetch(`https://dummyjson.com/products/category/womens-shoes`)
            .then((res)=>res.json()),
            fetch(`https://dummyjson.com/products/category/womens-bags`)
            .then((res)=>res.json()),
            fetch(`https://dummyjson.com/products/category/womens-watches`)
            .then((res)=>res.json()),
            fetch(`https://dummyjson.com/products/category/womens-jewellery`)
            .then((res)=>res.json()),
            fetch(`https://dummyjson.com/products/category/tops`)
            .then((res)=>res.json())
        ])
        setWomenDress(data1.products)
        setWomenShoes(data2.products)
        setWomenBags(data3.products)
        setWomenWatches(data4.products)
        setWomenJewels(data5.products)
        settops(data6.products)
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
       <h4 className='fw-bold py-3  rounded'style={{ position: 'sticky', top: '65.5px', width: '99%', backgroundColor: '#ffffff', zIndex: 1000 ,fontFamily:'monospace'}}>Women&apos;s Fashion<i className="fa-solid fa-turn-down text-secondary opacity-25 ms-1"></i></h4>
    <div className='d-flex justify-content-evenly flex-wrap items'>
      {
        womenDress.map((info) =>{
          return(
            <>
            <div className='mt-2'>
            <Link to={`/product-details/${info.id}`} className='text-decoration-none'>
            <div className="card mt-1 position-relative" style={{width: '18rem', gap:'10px',height:'100%'}}>
          <img src={info.thumbnail} className="card-img-top p-2" alt="..." style={{ height: '50%', objectFit: 'fit' }}></img>
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
        tops.map((info) =>{
          return(
            <>
            <div className='mt-2'>
            <Link to={`/product-details/${info.id}`} className='text-decoration-none'>
            <div className="card mt-1 position-relative" style={{width: '18rem', gap:'10px',height:'100%'}}>
          <img src={info.thumbnail} className="card-img-top p-2" alt="..."style={{ height: '50%', objectFit: 'cover' }}></img>
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
        womenShoes.map((info) =>{
          return(
            <>
            <div className='mt-2'>
            <Link to={`/product-details/${info.id}`} className='text-decoration-none'>
            <div className="card mt-1 position-relative" style={{width: '18rem', gap:'10px',height:'100%'}}>
          <img src={info.thumbnail} className="card-img-top p-2" alt="..." style={{ height: '50%', objectFit: 'fit' }}></img>
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
        womenBags.map((info) =>{
          return(
            <>
            <div className='mt-2'>
            <Link to={`/product-details/${info.id}`} className='text-decoration-none'>
            <div className="card mt-1 position-relative" style={{width: '18rem', gap:'10px',height:'100%'}}>
          <img src={info.thumbnail} className="card-img-top p-2" alt="..." style={{ height: '50%', objectFit: 'fit' }}></img>
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
        womenWatches.map((info) =>{
          return(
            <>
            <div className='mt-2'>
            <Link to={`/product-details/${info.id}`} className='text-decoration-none'>
            <div className="card mt-1 position-relative" style={{width: '18rem', gap:'10px',height:'100%'}}>
          <img src={info.thumbnail} className="card-img-top p-2" alt="..." style={{ height: '50%', objectFit: 'fit' }}></img>
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
        womenjewels.map((info) =>{
          return(
            <>
            <div className='mt-2'>
            <Link to={`/product-details/${info.id}`} className='text-decoration-none'>
            <div className="card mt-1 position-relative" style={{width: '18rem', gap:'10px',height:'100%'}}>
          <img src={info.thumbnail} className="card-img-top p-2" alt="..."style={{ height: '50%', objectFit: 'cover' }}></img>
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

export default WomenFashion
