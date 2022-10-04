// import css file
import './css/bestseller.css';
import './css/responsive.css';

// import material UI components 
import Rating from '@mui/material/Rating';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// import image
//import macbook from './images/Apple_Macbook_Air.png'

// media file
import {Item as Menu } from '../media/Prodects';
import { useState } from 'react';

const BestSeller = () => {

    const [Item, setItem] = useState(Menu);

    const filterProcect = categoryItem => {
        const updateItem = Menu.filter((currentElement) => {
            return currentElement.category === categoryItem;
        });
        setItem(updateItem)
    }

    return (
        <>
            <section className='seller'>
                <div className='seller-title'>
                    <h1 className='seller-headding'>Best Seller</h1>
                </div>
                <div className='menu-link'>
                    <button className='button' onClick={() => setItem(Menu)}>All</button>
                    <button className='button' onClick={() => filterProcect('macbook')}>Mac</button>
                    <button className='button' onClick={() => filterProcect('iphone')}>iPhone</button>
                    <button className='button' onClick={() => filterProcect('ipad')}>iPad</button>
                    <button className='button' onClick={() => filterProcect('watch')}>Watch</button>
                    <button className='button' onClick={() => filterProcect('accessores')}>Accessories</button>
                </div>

                <div className='products'>
                    {
                        Item.map(elem => {
                            const { id, title, image, price } = elem;
                            return (
                                <div className='bs-product' key={id}>
                                    <div className='product-img'>
                                        <p className='hot'>HOT</p>
                                        <img src={image} alt="" />
                                    </div>
                                    <div className='wish-list'>
                                        <div className='favorit'>
                                            <FavoriteBorderOutlinedIcon />
                                        </div>
                                        <a href='/card' className='shopping'>
                                            <ShoppingCartOutlinedIcon />
                                        </a>
                                    </div>
                                    <div className='bs-product-detail'>
                                        <h4 className='bpd-title'>{title}</h4>
                                        <div className='rating-box'>
                                            <Rating name="read-only" value={3.5} readOnly />
                                        </div>
                                        <div className='price-box'>
                                            <span className='active-price'>$ {price}</span>
                                            <del className='expried-price'>$499</del>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }

                    {/* <div className='bs-product'>
                        <div className='product-img'>
                            <img src={macbook} alt="" />
                        </div>
                        <div className='bs-product-detail'>
                            <h4 className='bpd-title'>Apple Macbook Pro</h4>
                            <div className='rating-box'>
                                <Rating name="read-only" value={3.5} readOnly />
                            </div>
                            <div className='price-box'>
                                <span className='active-price'>$499</span>
                                <del className='expried-price'>$499</del>
                            </div>
                        </div>
                    </div>

                     <div className='bs-product'>
                        <div className='product-img'>
                            <img src={macbook} alt="" />
                        </div>
                        <div className='bs-product-detail'>
                            <h4 className='bpd-title'>Apple Macbook Pro</h4>
                            <div className='rating-box'>
                                <Rating name="read-only" value={3.5} readOnly />
                            </div>
                            <div className='price-box'>
                                <span className='active-price'>$499</span>
                                <del className='expried-price'>$499</del>
                            </div>
                        </div>
                    </div>

                    <div className='bs-product'>
                        <div className='product-img'>
                            <img src={macbook} alt="" />
                        </div>
                        <div className='bs-product-detail'>
                            <h4 className='bpd-title'>Apple Macbook Pro</h4>
                            <div className='rating-box'>
                                <Rating name="read-only" value={3.5} readOnly />
                            </div>
                            <div className='price-box'>
                                <span className='active-price'>$499</span>
                                <del className='expried-price'>$499</del>
                            </div>
                        </div>
                    </div>

                    <div className='bs-product'>
                        <div className='product-img'>
                            <img src={macbook} alt="" />
                        </div>
                        <div className='bs-product-detail'>
                            <h4 className='bpd-title'>Apple Macbook Pro</h4>
                            <div className='rating-box'>
                                <Rating name="read-only" value={3.5} readOnly />
                            </div>
                            <div className='price-box'>
                                <span className='active-price'>$499</span>
                                <del className='expried-price'>$499</del>
                            </div>
                        </div>
                    </div>

                    <div className='bs-product'>
                        <div className='product-img'>
                            <img src={macbook} alt="" />
                        </div>
                        <div className='bs-product-detail'>
                            <h4 className='bpd-title'>Apple Macbook Pro</h4>
                            <div className='rating-box'>
                                <Rating name="read-only" value={3.5} readOnly />
                            </div>
                            <div className='price-box'>
                                <span className='active-price'>$499</span>
                                <del className='expried-price'>$499</del>
                            </div>
                        </div>
                    </div>

                    <div className='bs-product'>
                        <div className='product-img'>
                            <img src={macbook} alt="" />
                        </div>
                        <div className='bs-product-detail'>
                            <h4 className='bpd-title'>Apple Macbook Pro</h4>
                            <div className='rating-box'>
                                <Rating name="read-only" value={3.5} readOnly />
                            </div>
                            <div className='price-box'>
                                <span className='active-price'>$499</span>
                                <del className='expried-price'>$499</del>
                            </div>
                        </div>
                    </div>

                    <div className='bs-product'>
                        <div className='product-img'>
                            <img src={macbook} alt="" />
                        </div>
                        <div className='bs-product-detail'>
                            <h4 className='bpd-title'>Apple Macbook Pro</h4>
                            <div className='rating-box'>
                                <Rating name="read-only" value={3.5} readOnly />
                            </div>
                            <div className='price-box'>
                                <span className='active-price'>$499</span>
                                <del className='expried-price'>$499</del>
                            </div>
                        </div>
                    </div>

                    <div className='bs-product'>
                        <div className='product-img'>
                            <img src={macbook} alt="" />
                        </div>
                        <div className='bs-product-detail'>
                            <h4 className='bpd-title'>Apple Macbook Pro</h4>
                            <div className='rating-box'>
                                <Rating name="read-only" value={3.5} readOnly />
                            </div>
                            <div className='price-box'>
                                <span className='active-price'>$499</span>
                                <del className='expried-price'>$499</del>
                            </div>
                        </div>
                    </div> */}



                </div>

                <div className='loadmore'>
                    <a className='loadmore-btn' href="/">Load More </a>
                </div>

            </section>
        </>
    )
}

export default BestSeller;