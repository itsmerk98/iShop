// // import components
// import { CartContext } from '../pages/Cards';

// CSS file link
import './css/header.css';
import './css/responsive.css';

// MUI icon link
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegIcon from '@mui/icons-material/HowToReg';

// import hook 
import { useState } from 'react';

// image import
import logo from './images/iSHOP_Logo.svg'


const Header = () => {

    const { visiblelink } = useState(false);

    return (
        <>
            <div className='mobile-nav' id='mobile'>
                <div className='ml'>
                    <p className='mobile-logo'>iSHOP</p>
                </div>
                <div className='menu-btn' onClick={() => {
                    if (!true) {
                        document.getElementById('header').style.display = "none";
                        document.getElementById('mobile').style.filter = 'blur(0)';
                    } else {
                        document.getElementById('header').style.display = "block";
                        document.getElementById('mobile').style.filter = 'blur(8px)';
                    }
                }} >
                    <DehazeIcon />
                </div>
            </div>

            <div className='header-sec' id='header'>
                <div className='top-sec'>
                    <div className='dropdown-btn'>
                        <div className='close-btn' onClick={() => {
                            if (!false) {
                                document.getElementById('header').style.display = "none";
                                document.getElementById('mobile').style.filter = 'blur(0)';
                            }
                        }} >
                            <CloseIcon />
                        </div>
                    </div>
                    <div className='top-manu'>
                        <div className='selecters'>
                            <select name="" id="ln">
                                <option>EN</option>
                                <option>Hi</option>
                            </select>
                            <select name="" id="">
                                <option>$</option>
                                <option>&#8377;</option>
                            </select>
                        </div>

                        <div className='profile-sec'>{
                            (!visiblelink) ? <>
                                <div className='user-profile'>
                                    <PersonOutlineIcon />
                                    <p className='my-pf'>My Profile</p>
                                </div>
                                <div className='item'>
                                    <ShoppingBagOutlinedIcon />
                                    <p className='item-no'> Item</p>
                                    <p className='amount'>$234</p>
                                </div>
                            </> : <>
                                <a href='/login' className='user-profile'>
                                    <LoginOutlinedIcon />
                                    <p className='my-pf'>Login</p>
                                </a>
                                <a href='/registration' className='user-profile'>
                                    <HowToRegIcon />
                                    <p className='my-pf'>Registra</p>
                                </a>
                            </>
                        }


                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        </div>

                        <div className='searching'>
                            <input type="text" placeholder='search' />
                            <SearchIcon />
                        </div>

                    </div>


                </div>
                <div className='search'>
                    <input className='input-box' type="text" placeholder='search' />
                    <SearchIcon />
                </div>

                {/* Logo section  */}

                <div className='logo-sec'>
                    <div className='logo'>
                        <img src={logo} alt="logo not found" />

                    </div>
                </div>

                {/* navigation bar */}

                <div className='nav'>
                    <div className='nav-link'>
                        <ul className='ul'>
                            <li >
                                <a href='/itsmerk98/iShop'>HOME</a>
                            </li>
                            <li onMouseOver={() => {
                                document.getElementById('store').style.display = "flex";
                            }} onMouseLeave={() => {
                                document.getElementById('store').style.display = "none";
                            }}
                            >
                                <select className='store' href="/">
                                    <option>STORE</option>
                                    <option>Assicery</option>
                                    <option>Categary</option>
                                </select>
                                <span className='sec-store' > STORE
                                    <span>
                                        <ArrowDropDownIcon />
                                    </span>
                                </span>
                            </li>
                            <li>
                                <a href="/">iPHONE</a>
                            </li>
                            <li>
                                <a href="/">iPAD</a>
                            </li>
                            <li>
                                <a href="/">MACBOOK</a>
                            </li>
                            <li>
                                <a href="/accesories">ACCESORIES</a>
                            </li>
                        </ul>


                        <div className='link' id='store'
                            onMouseOver={() => {
                                document.getElementById('store').style.display = "block";
                            }} onMouseLeave={() => {
                                document.getElementById('store').style.display = "none";
                            }} >

                            <table className='accessories' >
                                <thead>
                                    <tr>
                                        <th colSpan='2'>Accessories</th>
                                        <th colSpan='2'>Category</th>
                                        <th>Category</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="/">AirPort & Wireless</a>
                                        </td>
                                        <td>
                                            <a href="/">Cameras & Video</a>
                                        </td>
                                        <td>
                                            <a href="/">Charging Devices</a>
                                        </td>
                                        <td>
                                            <a href="/">Headphones</a>
                                        </td>
                                        <td>
                                            <a href="/">Mice & Keyboards</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="/">AppleCare</a>
                                        </td>
                                        <td>
                                            <a href="/">Car & Travel </a>
                                        </td>
                                        <td>
                                            <a href="/">Connected Home</a>
                                        </td>
                                        <td>
                                            <a href="/">HealhKit</a>
                                        </td>
                                        <td>
                                            <a href="/">Music Creation</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="/">Bags, Shells & Sleeves</a>
                                        </td>
                                        <td>
                                            <a href="/">Cases & Films</a>
                                        </td>
                                        <td>
                                            <a href="/"> Device Care</a>
                                        </td>
                                        <td></td>
                                        <td>
                                            <a href="/">Networking & Server</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="/">Business & Security</a>
                                        </td>
                                        <td></td>
                                        <td>
                                            <a href="/">Display & Graphic</a>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="/">Cables & Docks</a>
                                        </td>
                                        <td></td>
                                        <td>
                                            <a href="/">Fitness & Sport</a>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Header;