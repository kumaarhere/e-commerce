import { useState } from 'react'
// import Razorpay from 'react-razorpay';
// import './App.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const navigate= useNavigate();
  const location= useLocation();
  const handleRadioChange = (event) => {
    if (event.target.value === 'RazorPay') {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  };

  const handleButtonClick = () => {
    console.log('Button Clicked! isEnabled:', isEnabled);
    const amount = parseInt(location.state)*8200;
    console.log(amount);
    const logo = '../assets/navlogo.png';
    const userDetails = {
      fullName: 'Kumaar Kandugula',
      email: 'kumaarkandugula@gmail.com',
      mobile: '7993467747',
      propertyflatNbr: '430',
      propertyStreet: 'warangal',
      propertyPincode: '505102'
    };
    const options=
    {
    key:'rzp_test_Su4WV4zdBIGTmZ',
    key_secret:'EmH6eToe5CvCfAfgfADREv3C',
    amount: amount,
    name: 'Q-mart Online Shopping',
    description: 'Product/Service Description',
    image: logo,
    handler: function (response) {
    
      navigate("/track-your-order");
      toast.success("Order placed successfully");
      toast.info(response.razorpay_payment_id);
    
    
    },
    prefill: {
    name: userDetails.fullName,
    email: userDetails.email,
    contact: userDetails.mobile,
    },
    notes: {
    address: userDetails.propertyflatNbr+" ," + userDetails.propertyStreet+" ,"+userDetails.propertyPincode,
    
    
    },
    theme: {
    color: 'green',
    },
    };
    const rzp = new window.Razorpay(options); 
    rzp.open();
  };

  return (
    <>
       <div>
        <h2 className='text-center mt-3 text-decoration-underline text-info head'>RazorPay Payment Gateway</h2>
       </div>
        <div className='d-flex justify-content-between w-50 mt-5'>
        <input type="radio" className='fw-bold w-75' name="radioGroup" id='payTm' value="payTM" onChange={handleRadioChange} />
          <label htmlFor='payTm'>payTM</label>
         <br />
         <input type="radio" className='fw-bold w-75' name="radioGroup" id='RazorPay' value="RazorPay" onChange={handleRadioChange} />
          <label htmlFor='RazorPay'>RazorPay</label>
         <br />
         <input type="radio" className='fw-bold w-75' name="radioGroup" id='phonePE' value="phonePE" onChange={handleRadioChange}/>
         <label htmlFor='phonePE'>phonePE</label>
         <br /> 
         <input type="radio" className='fw-bold w-75' name="radioGroup" id="paypal" value="Paypal" onChange={handleRadioChange}/>
         <label htmlFor='paypal'>Paypal</label>
         <br />
        </div>
    <div className='mt-5 d-flex justify-content-center'>
      <button className='btn btn-primary px-5' onClick={handleButtonClick} disabled={!isEnabled}>Pay</button>
    </div> 

    </>
  );
}

export default App
