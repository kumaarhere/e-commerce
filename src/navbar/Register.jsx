import { useFormik } from 'formik';
import * as yup from 'yup';
import GoogleLoginComponent from './GoogleLoginComponent';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { toast } from 'react-toastify';
import '../App.css';

const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      email: '',
      password: ''
    },
    validationSchema: yup.object({
      name: yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Name should not contain numbers')
        .min(4, "Name should not be too short")
        .max(30, "Name is too long")
        .required('Name is required'),
      mobile: yup.string()
        .matches(/^[0-9]+$/, 'Please enter numbers only')
        .required("Mobile number is required"),
      email: yup.string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email address")
        .email('Invalid email address')
        .required('Email is required'),
      password: yup.string()
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          'Password must be 8+ characters, with at least 1 uppercase, 1 lowercase, and 1 digit'
        )
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        await createUserWithEmailAndPassword(auth, values.email, values.password);
        const user = auth.currentUser;
        console.log(user);
        navigate('/login');
        toast.success("User registered successfully")
      } catch (error) {
        console.log(error.message);
        toast.error(error.message);
      }
    }
  });

  return (
    <div className='registration mt-1'>
      <h2 className='text-center mt-1 p-2 fw-bold text-white'><i className="fa-brands fa-envira text-white fs-2 text-danger"></i>Join the Q-Mart Family Today <i className="fa-solid fa-ranking-star"></i></h2>
      <p className='mx-5 px-5 fw-semibold text-center text-white'>Become a part of the Q-Mart community and unlock exclusive deals, personalized recommendations, and a hassle-free shopping experience. Register now to start your journey with Q-Mart.</p>
      <div className='w-50 mx-auto rounded register ep' style={{ border:'2px solid black'}}>
        <div className='border px-5 py-4 rounded' style={{ boxShadow: '5px 5px 8px #262626' }}>
          <form onSubmit={formik.handleSubmit}>
            <table className='w-100'>
              <tbody>
                <tr>
                  <td><label htmlFor="name" className='fw-bold ms-5 '><i className="fa-solid fa-user"></i> Name &nbsp;</label></td>
                  <td><input
                    type='text'
                    id='name'
                    name='name'
                    required
                    placeholder='enter full name'
                    className='form-control ms-2 py-3 border-secondary bg-secondary-subtle fw-semibold custom-focus'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  /></td>
                </tr>
                <tr><td colSpan={2} className='text-danger text-center'>{formik.touched.name && formik.errors.name}</td></tr>
                <tr>
                  <td><label htmlFor="mobile" className='fw-bold ms-5'><i className="fa-solid fa-mobile-screen"></i> Mobile &nbsp;+91</label></td>
                  <td><input
                    type='text'
                    id='mobile'
                    inputMode='number'
                    placeholder='enter mobile number'
                    name="mobile"
                    maxLength={10}
                    required
                    className='form-control m-2  py-3 border-secondary bg-secondary-subtle fw-semibold custom-focus'
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onKeyPress={(e) => {
                      // Prevent input if the key pressed is not a number
                      const onlyNumbers = /[0-9]/;
                      if (!onlyNumbers.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                  /></td>
                </tr>
                <tr><td colSpan={2} className='text-danger w-25 text-center'>{formik.touched.mobile && formik.errors.mobile}</td></tr>
                <tr>
                  <td><label htmlFor="email" className='fw-bold ms-5 '><i className="fa-solid fa-envelope"></i> Email &nbsp;</label></td>
                  <td><input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='enter email address'
                    required
                    className='form-control m-2 py-3 border-secondary bg-secondary-subtle fw-semibold custom-focus'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  /></td>
                </tr>
                <tr><td colSpan={2} className='text-danger text-center'>{formik.touched.email && formik.errors.email}</td></tr>
                <tr>
                  <td><label htmlFor="password" className='fw-bold ms-5 text-nowrap'><i className="fa-solid fa-lock"></i> Password &nbsp;</label></td>
                  <td><input
                    type='password'
                    id='password'
                    name="password"
                    placeholder='enter password'
                    required
                    className='form-control m-2  py-3 border-secondary bg-secondary-subtle fw-semibold custom-focus '
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  /></td>
                </tr>
                <tr><td colSpan={2} className='text-danger w-25 text-center'>{formik.touched.password && formik.errors.password}</td></tr>
              </tbody>
            </table>
            <div className='d-flex align-items-center justify-content-around'>
              <div className='mt-3 text-nowrap fw-bold text-secondary'>
                <span>Have an account? </span>
                <Link to='/login'>Sign In <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
              <button type="submit" className='btn  px-5 py-2 mt-4 fw-bold text-nowrap shadow text-primary signup' style={{background:'#fff'}}>Register <i className="fa-solid fa-user-plus"></i></button>
            </div>
            <hr className='text-primary'/>
            <GoogleLoginComponent />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
