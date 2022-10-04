import React from 'react';
// import macbook from '../images/apple_macbook.png';

import Rating from '@mui/material/Rating';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Products = ({ Products }) => {
    return (
        <div className='store-products'>
            {
                Products.map((elem) => {
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
        </div>

    )
}

export default Products;