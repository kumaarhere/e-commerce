import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartArray = sessionStorage.getItem('sportscart');
    if (cartArray) {
      const items = JSON.parse(cartArray).map(item => ({
        ...item,
        quantity: item.quantity || 1,
        price: parseFloat(item.price)
      }));
      setCartItems(items);
    }
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

  const removeCartItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    sessionStorage.setItem('sportscart', JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const handleQuantityChange = (e, itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        item.quantity = parseInt(e.target.value);
      }
      return item;
    });
    sessionStorage.setItem('sportscart', JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };
  
  const amount = (totalPrice + 5).toFixed(2);
  
  return (
    <div className='mt-2 container'>
      <h4 className='fw-bold py-3 rounded' style={{ position: 'sticky', top: '70.5px', width: '99%', backgroundColor: '#ffffff', zIndex: 1000, fontFamily: 'monospace' }}>
        Your Cart Items ({cartItems.length})<i className="fa-solid fa-turn-down text-secondary opacity-25 ms-1"></i>
      </h4>
      {cartItems.length === 0 ? (
        <div className='container border rounded mt-3 w-75 bg-secondary text-white text-center'>
          <h3>Your cart is empty</h3>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12">
              {cartItems.map(cart => (
                <div className="card mb-3 position-relative shadow" key={cart.id}>
                  <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                      <img className="img-responsive w-75 img-thumbnail shadow" src={cart.thumbnail} alt={cart.title} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title fw-bold ms-3">{cart.title}</h5>
                        <h5 className="mt-3">
                          &nbsp;&nbsp;<span className='bg-secondary-subtle p-1 rounded text-nowrap text-dark fw-bold'>{cart.brand ? cart.brand : "Q-mart"}</span>
                        </h5>
                        <label htmlFor={`quantity-${cart.id}`} className="fw-bold text-secondary mt-2">Quantity</label>
                        <select id={`quantity-${cart.id}`} className="fw-bold ms-2 px-3 rounded mb-2" value={cart.quantity} onChange={(e) => handleQuantityChange(e, cart.id)}>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                        </select>
                        <h4>${(cart.price * cart.quantity).toFixed(2)}</h4>
                        <p><i className="fa-solid fa-reply text-success"></i> {cart.returnPolicy}</p>
                        <p><i className="fa-solid fa-truck"></i> {cart.shippingInformation}</p>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-close position-absolute top-0 end-0 m-2"
                    title="close"
                    aria-label="Close"
                    onClick={() => removeCartItem(cart.id)}>
                  </button>
                </div>
              ))}
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 mt-3 mt-md-0">
              <div className="card shadow">
                <div className="card-header">
                  <h4 className="text-secondary fw-bold">Summary</h4>
                </div>
                <div className="card-body">
                  <h5 className="fw-semibold">Total products: {cartItems.length} items</h5>
                  <h5 className="fw-semibold">Shipping Charges: $5.00</h5>
                  <h3 className="fw-bold">Total price: ${amount}</h3>
                </div>
                <div className="card-footer p-3 d-flex justify-content-center">
                  <Link to='/payment' state={amount}>
                    <button className='btn px-5 py-2 fw-bold text-white rounded bg-primary shadow'>Order Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
