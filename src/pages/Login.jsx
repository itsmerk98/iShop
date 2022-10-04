import React from 'react'
import Footer from '../commponents/Footer'
import Header from '../commponents/Header'
import './loginandregistration.css'

const Login = () => {
  return (
      <>
          <Header />
          <div className='form_sec'>
              <form action="login" method="get" className='form '>
                  <div className='feild'>
                      <h1 className='h1'>
                          Login
                      </h1>
                  </div>
                  <div className='feild'>
                      <label htmlFor="username">Username :</label>
                      <input type="text" id='username' placeholder='username and email' className='dataFeild'/>
                  </div>
                  <div className='feild'>
                      <label htmlFor="password">Password :</label>
                      <input type="text" id='password' placeholder='Enter your password' className='dataFeild' />
                  </div>
                  <div className='feild'>
                      <button className='login_btn'>Login </button>
                  </div>
                  <hr />
                  <div className='feild'>
                      <p>Don't have a account ? <a href="/registration">SignUp</a></p>
                      <p className='forgetpass'><a href="/registration">forget your password</a></p>
                  </div>
              </form>
          </div>
          <Footer />
      </>
  )
}

export default Login