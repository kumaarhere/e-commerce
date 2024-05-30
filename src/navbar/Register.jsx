import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup';
import GoogleLoginComponent from './GoogleLoginComponent';
import { useNavigate ,Link} from 'react-router-dom';

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
      name: yup.string().matches(/^[A-Za-z\s]+$/, 'Name should not contain numbers').min(4,"name should not to be small").max(30,"name is exceeded").required(),
      mobile:yup.string().matches(/^[0-9]+$/, 'Please enter numbers only')
       .required("Mobile number is required"),
      email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Invalid email Address").email().required(),
      password: yup.string()
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          'Password: 8+ characters, at least 1 uppercase, 1 lowercase, and 1 digit'
        )
        .required('Required feild'),
    }),
    onSubmit: (values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        navigate('/');
      }, 400);
    }
  });
  return (
    <div>
      <h2 className='text-center mt-1 p-2 text-decoration-underline text-success'>Registration Form</h2>
    <div className='w-50 rounded register'>
      <div className='border px-5 py-4 rounded' style={{boxShadow:'4px 5px 8px #ccc'}}>
        <form className='' onSubmit={formik.handleSubmit} >
       <table>
        <tr>
            <td><label for="name" className='fw-bold ms-5'>Name &nbsp;</label></td>
            <td><input
                 type='text'
                 id='name'
                 name='name'
                 className='form-control ms-2 px-5 py-3 border-dark'
                 value={formik.values.name}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 ></input></td>
        </tr>
        <tr ><td colSpan={3} className='text-danger text-center'>{formik.touched.name && formik.errors.name}</td></tr>
        <tr>
            <td><label for="mobile" className='fw-bold ms-5'>Mobile &nbsp;+91</label></td>
            <td><input
                 type='text'
                 id='mobile'
                 inputMode='number'
                 name="mobile"
                 maxlength="10"
                 className='form-control m-2 px-5 py-3 border-dark'
                 value={formik.values.mobile}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 ></input></td>
        </tr>
        <tr><td colSpan={3} className='text-danger w-25 text-center'>{formik.touched.mobile && formik.errors.mobile}</td></tr>
        <tr className=''>
            <td><label for="email" className='fw-bold ms-5'>Email &nbsp;</label></td>
            <td><input
                 type='email'
                 id='email'
                 name='email'
                 className='form-control m-2 py-3 border-dark'
                 value={formik.values.email}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 ></input></td>
        </tr>
        <tr><td colSpan={3} className='text-danger text-center'>{formik.touched.email && formik.errors.email}</td></tr>
        <tr>
            <td><label for="password" className='fw-bold ms-5'>Password &nbsp;</label></td>
            <td><input
                 type='password'
                 id='password'
                 name="password"
                 className='form-control m-2 px-5 py-3 border-dark'
                 value={formik.values.password}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 ></input></td>
        </tr>
        <tr><td colSpan={3} className='text-danger w-25 text-center'>{formik.touched.password && formik.errors.password}</td></tr>
       </table>
       <div  className='d-flex justify-content-between'>
            <button type="submit" className='btn btn-primary px-4 ms-5  py-2 mt-4 text-white fw-bold signup '>Register</button>
        </div>
        <hr></hr>
        <GoogleLoginComponent />
       </form>
      </div>
    </div>
    </div>
  )
}

export default Register
