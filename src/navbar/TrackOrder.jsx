
import order from '../assets/order.jpg'

const TrackOrder = () => {
  return (
    <div>
      <div >
        <img src={order} className='w-75 ps-5 ms-5' alt="order-delivery"/>
        <h1 className='fw-bold text-center'>on the way......</h1>
      </div>
    </div>
  )
}

export default TrackOrder
