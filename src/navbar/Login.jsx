import logo from '../assets/navlogo.png';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import '../App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object({
      email: yup.string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email address")
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
        await signInWithEmailAndPassword(auth, values.email, values.password);
        navigate('/');
        toast.success("Logged in successfully");
      } catch (error) {
       const ele = document.querySelector('#password');
        if (ele) {
          ele.classList.add('border-danger');
          setTimeout(() => {
            ele.classList.remove('');
          }, 1000); // Remove the class after 1 second
        }
        console.log(error.message);
        toast.error(error.message);
      }
    }
  });

  return (
    <div className="container mt-3 loginpage ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5 ep shadow">
            <div className="card-header text-center">
              <h1 className="fw-bold" style={{fontFamily:'serif'
              }}>Login <i className="fa-solid fa-fingerprint"></i></h1>
              <img src={logo} className='w-25' alt='brand-logo' />
            </div>
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3 ms-5">
                  <label htmlFor="email" className='form-label fw-bold ms-5'>Email <i className="fa-solid fa-envelope"></i></label>
                  <input
                    type='email'
                    id='email'
                    name="email"
                    className='form-control py-3 border-dark bg-secondary-subtle ms-5'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className='text-danger'>{formik.errors.email}</div>
                  )}
                </div>
                <div className="mb-3 ms-5">
                  <label htmlFor="password" className='form-label fw-bold ms-5'>Password <i className="fa-solid fa-lock"></i></label>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    className='form-control py-3 border-dark bg-secondary-subtle ms-5'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className='text-danger'>{formik.errors.password}</div>
                  )}
                  <p className='text-end me-5 pe-5'style={{textDecoration:'underline',textDecorationColor:'blue'}}><a href='#'>forget password?</a></p>
                </div>
                <button type="submit" className="btn btn-primary fw-bold mt-1 px-4 rounded login">Login <i className="fa-solid fa-right-to-bracket text-white"></i></button>
              </form>
            </div>
            <div className="card-footer text-center fw-bold">
              <p>Don&apos;t have an account? <Link to='/register' className='text-primary fw-bold'>Register <i className="fa-solid fa-arrow-right"></i></Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
