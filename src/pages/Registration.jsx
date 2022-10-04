import React from 'react';
import Header from '../commponents/Header';
import Footer from '../commponents/Footer';

const Registration = () => {
    return (
        <>
            <Header />
            <div className='form_sec'>
                <form action="login" method="get" className='form '>
                    <div className='feild'>
                        <h1 className='h1'>
                            Registration
                        </h1>
                    </div>
                    <div className='feild'>
                        <label htmlFor="username">Username :</label>
                        <input type="text" id='username' placeholder='username and email' className='dataFeild' />
                    </div>
                    <div className='feild'>
                        <label htmlFor="email" >E-mail :</label>
                        <input name='email' type="email" id='email' placeholder='Enter your email' className='dataFeild' />
                    </div>
                    <div className='feild'>
                        <label htmlFor="contact">Contact No :</label>
                        <input name='contact' type="number" id='contact' placeholder='Enter your contact no.' className='dataFeild' />
                    </div>

                    <div className='feild'>
                        <label htmlFor="password">Password :</label>
                        <input name='password' type="password" id='password' placeholder='Enter your password' className='dataFeild' />
                    </div>

                    <div className='feild'>
                        <label htmlFor="password">Conform password :</label>
                        <input name='password' type="password" id='password' placeholder='Enter your conform password' className='dataFeild' />
                    </div>
                    

                    <div className='feild'>
                        <button className='login_btn'>Registra </button>
                    </div>
                    <hr />
                    <div className='feild'>
                        <p>Don't have a account ? <a href="/login">Login.</a></p>
                        <p className='forgetpass'><a href="/">forget your password</a></p>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Registration