
import logo from'../assets/navlogo.png';
function Footer() {
  return (
    <>
    <div className='bg-dark p-3 mt-2'>
        <div className="footer-items ">
                <ul>
                    <li>ONLINE SHOPPING</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>kids</li>
                    <li>Beauty</li>
                    <li>Accsories</li>
                </ul>
                <ul>
                    <li>CUSTOMER POLICIES</li>
                    <li>Contact us</li>
                    <li>FAQ</li>
                    <li>T&c</li>
                    <li>Shipping</li>
                </ul>
                <ul>
                    <li>USEFUL LINKS</li>
                    <li>Track orders</li>
                    <li>Cancellation</li>
                    <li>Returns</li>
                    <li className='mt-3'><i className="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-brands fa-x-twitter"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-brands fa-youtube"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-regular fa-paper-plane"></i></li>
                </ul>
                </div>
                <div className="w-25 social" id="playStore">
                  <li><a href=""><img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" className='w-25'></img></a></li>
                  <li><a href=""><img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" className='w-25'></img></a></li>
                </div>
        <a className="navbar-brand" id="alpha" href="#"><img src={logo} alt="AlphaGen" width="200"></img></a>
        <p className='text-white text-center fw-bold'>&copy; 2024 Q-mart. All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Footer;
