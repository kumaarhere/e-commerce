
import { useEffect,useState } from 'react';
import { useParams ,Link} from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import swal from 'sweetalert';
const Detailed = () => {
     const [Qty,setQty]= useState(1);
     const[random ,setRandom] = useState([]);

     function plus(){
        setQty(Qty + 1)
     }
     function minus(){
      if (Qty > 1) {
        setQty(Qty - 1);
    }
     }
        const [item,setItem]= useState([]);
        const {ID} = useParams();
        const TotalPrice= item.price * Qty;
        function showAlert() {
          swal({
              title: "Good job!",
              text: "You clicked the button! Redirecting to home in 10 seconds.",
              icon: "success",
              buttons: {
                  cancel: "Close",
                  home: {
                      text: "Go to Home",
                      value: "home",
                  }
              }
          }).then((value) => {
              if (value === "home") {
                  window.location.href = "home"; // Replace "home" with the URL of your home page
              }
          });

          // Automatic redirect after 10 seconds
          setTimeout(() => {
              window.location.href = "home"; // Replace "home" with the URL of your home page
          }, 10000);
      }
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${ID}`)
        .then((res)=>res.json())
        .then((data)=>setItem(data))
      },[ID])

      useEffect(() => {
        fetch(`https://api.unsplash.com/photos/random?count=5&query=fashion&orientation=landscape&client_id=m8Prp7KLPXGc9axS-cKVzJc5Lp0xDg2pAYR8OwR0UKo`)
        .then((res)=>res.json())
        .then((data) =>setRandom(data))
      },[])
  return (
    <>
    {
        <div className="row ">
          <div className="col-5  ms-3 border rounded p-3 mt-2">
          {item.images && item.images.length > 0 ? (
    <Carousel interval={2000} pause="hover" wrap keyboard indicators={false} controls={true} prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true"style={{ backgroundColor: 'black' }} />} nextIcon={<span className="carousel-control-next-icon" aria-hidden="true"style={{ backgroundColor: 'black' }} />} >
        {item.images.map((image, index) => (
            <Carousel.Item key={index}>
                <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} style={{ objectFit: 'contain', maxHeight: '400px' }} />
            </Carousel.Item>
        ))}
    </Carousel>
  ) : (
      <p>No images available</p>
     )}
</div>

          <div className="col-6 mt-4 p-3">
            <div className="card-body">
              <h3 className="card-title text-center">{item.title}</h3>
              <h6 className="card-text mt-3 text-center text-secondary">{item.description}</h6>
              <h5 className='mt-5'>&nbsp;&nbsp;<span className='bg-info-subtle p-2 rounded text-dark fw-bold'>{item.brand?item.brand:"Q-mart"}</span></h5>
              <p className='fw-bold'><sup className='text-dark fw-bold'>$</sup><span className='text-success fs-1'>{TotalPrice}</span><span className='text-danger fw-bold ms-2'>({item.discountPercentage}%off)</span></p>
              <p>Inclusive of all taxes</p>
              <div className='d-flex 'style={{gap:'20px'}}>
                <button className='rounded-circle p-3 fw-bold border-info'>S</button>
                <button className='rounded-circle p-3 fw-bold border-info'>M</button>
                <button className='rounded-circle p-3 fw-bold border-info'>L</button>
                <button className='rounded-circle p-3 fw-bold border-info'>XL</button>
                <button className='rounded-circle p-3 fw-bold border-info'>XXL</button>
              </div>
              <h5 className='mt-4'>Quantity&nbsp;&nbsp;&nbsp;<button onClick={minus} className='btn bg-secondary-subtle'><i className="fa-solid fa-minus"></i></button>&nbsp;{Qty}&nbsp;<button onClick={plus} className='btn bg-secondary-subtle'><i className="fa-solid fa-plus"></i></button></h5>
              <p className="card-text mt-3 pb-2"><span className=' p-2 rounded border fw-bold text-dark'>{item.rating}<i className='fa-regular fa-star text-success fw-bold'></i></span></p>
              <button  className="btn btn-warning px-5 text-dark fw-bold ms-5 ">Add to cart <i className="fa-solid fa-bag-shopping "></i> </button>
              <Link to='/payment'><button  className="btn btn-primary px-5 text-white ms-3 fw-bold">Buy Now <i className="fa-solid fa-sack-dollar"></i></button></Link>
            </div>
          </div>
            <div ><h3 className='fw-bold text-secondary text-center mt-2'>Rating & Reviews -</h3></div>
  
            {
  item.reviews && (
    <div>
      <h5 className='fw-bold ms-5'>Customer reviews( {item.reviews.length})</h5>
      {item.reviews.map((review) => (
        <div key={review.id} className='ms-5'>
          <p className='fw-bold'><i className="fa-solid fa-user"></i> {review.reviewerName}</p>
          <p className='fw-semibold'>{review.comment}</p>
          <p className='fw-bold text-secondary'>Rating: <i className='fas fa-star fw-bold text-warning'></i>{review.rating}</p>
          <small>Date: {review.date}</small>
          <hr />
        </div>
      ))}
    </div>
  )
}


<button onClick={showAlert}>sweet</button>
        </div>
     } 
      <div>
      {
        
        random.map((item)=>{
          return(
            <>
            <div className='d-inline flex-wrap mt-4' key={item.id}>
            <img src={item.urls.raw}className='w-50 p-3' alt='fashion'></img>
            <img src={item.urls.full}className='w-50 p-3' alt='fashion'></img>
            <img src={item.urls.regular}className='w-50 p-3' alt='fashion'></img>
            </div>
            </>
          )
        })
      }
    </div>
    </>
  )
}

export default Detailed
