
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import NavbarIndex from './navbar/NavbarIndex'
import Footer from './pages/Footer'





const App = () => {
  return (
    <div>
     
         <NavbarIndex/>
         {/* <Footer/>  */}
         <ToastContainer position="top-right"
         autoClose={5000}/>
    </div>
  )
}

export default App

