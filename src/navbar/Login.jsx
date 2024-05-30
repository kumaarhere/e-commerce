import React from 'react'
import logo from '../assets/navlogo.png'
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object({
      name: yup.string().matches(/^[A-Za-z\s]+$/, 'Name should not contain numbers').min(4,"name should not to be small").max(30,"name is exceeded").required(),
      email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-\S+]+\.[a-zA-Z]{2,}$/,"Invalid email Address").email().required(),
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
      }, 400);
    }
  });
  return (
    <div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">Login&nbsp;&nbsp;&nbsp;<img src={logo} className='w-25' alt='brand-logo'></img></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form className='input-group' onSubmit={formik.handleSubmit}>
          <table>
        <tr>
            <td><label for="email" className='fw-bold'>Email</label></td>
            <td><input
                 type='email'
                 id='email'
                 name="email"
                 className='form-control m-2'
                 value={formik.values.email}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 ></input></td>
        </tr>
        <tr ><td className='text-danger' colSpan={3}>{formik.touched.email && formik.errors.email}</td></tr>
        <tr>
            <td><label for="password" className='fw-bold '>password</label></td>
            <td><input
                 type='password'
                 id='password'
                 name='password'
                 className='form-control m-2'
                 value={formik.values.password}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 ></input></td>
        </tr>
        <tr ><td className='text-danger' colSpan={3}>{formik.touched.password && formik.errors.password}</td></tr>
        </table>
        <button type="sumbit" className="btn btn-primary fw-bold mt-1 px-3 rounded login">Login</button>
        </form>
      </div>
      <div class="modal-footer">
      <p className='text-end mt-1'>don't have an account?<Link to='/register'><button className='btn text-primary fw-bold'type='button' data-bs-toggle="modal" data-bs-target="#registerModal">register</button></Link></p>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
