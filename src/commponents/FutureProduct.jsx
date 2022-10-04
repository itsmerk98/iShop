import Rating from '@mui/material/Rating';

// import css file
import './css/feature.css';
import './css/responsive.css';

// image import 
import Product from './images/philips_hue.svg';
import secondproduct from './images/Netatmo_rain.svg';
import thridProduct from './images/H-squared.svg';

const FutureProduct = () => {
    return (
        <>
            <section className='feature'>
                <div className='feature-title'>
                    <h1 className='heading'>Featured Products</h1>
                </div>
                <div className="featured-products">
                    <div className='left-btn'>
                        &lt;
                    </div>


                    <div className="mid-part">
                        <div className="product">
                            <div className='image-sec'>
                                <img src={Product} alt="product error" />
                            </div>
                            <div className='details'>
                                <div className="product-title">
                                    <h3>Beats Solo 2 On Ear Headphones - Black</h3>
                                </div>
                                <div className="reating">
                                    <Rating name="half-rating" defaultValue={2.5} precision={5} />
                                </div>
                                <div className='price-sec'>
                                    <span className='price'>$499</span>

                                    <span className='cress-price'>$599</span>
                                </div>
                            </div>
                        </div>
                        <div className="product ">
                            <div className='image-sec'>
                                <img src={secondproduct} alt="product error" />
                            </div>
                            <div className='details'>
                                <div className="product-title">
                                    <h3>H-Squared tvTray</h3>
                                </div>
                                <div className="reating">
                                    <Rating name="half-rating" defaultValue={2.5} precision={5} />
                                </div>
                                <div className='price-sec'>
                                    <span className='price'>$499</span>

                                    <span className='cress-price'>$599</span>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className='image-sec'>
                                <img src={thridProduct} alt="product error" />
                            </div>
                            <div className='details'>
                                <div className="product-title">
                                    <h3>Netatmo Rain Gauge</h3>
                                </div>
                                <div className="reating">
                                    <Rating name="half-rating" defaultValue={2.5} precision={5} />
                                </div>
                                <div className='price-sec'>
                                    <span className='price'>$499</span>

                                    <span className='cress-price'>$599</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='right-btn'>
                        &gt;
                    </div>
                </div>
            </section>
        </>
    )
}

export default FutureProduct;