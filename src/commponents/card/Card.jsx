// import css files
import './css/card.css';

// mui icons import
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

// image import 
// import product from '../images/philips_hue.svg';

// import hooks
import { useContext } from 'react';
import { CartContext } from '../../pages/Cards'

const Card = () => {

    const {products, deleteItem, increment, decrement} = useContext(CartContext);
    
    return (
        <>
            <section className="card-sec">
                <div className="card-head">
                    <p className='ch-heading'>Card</p>
                    <div className='shoppingcard'>
                        <ShoppingCartOutlinedIcon color='info'></ShoppingCartOutlinedIcon>
                    </div>
                </div>
                <div className="cards">
                    {
                        products.map((index, i) => {
                            const { id, image, title, price, unitprice, quantity } = index;

                            return (
                                <div className='add-products' key={id}>
                                    <div className='prod-detail'>
                                        <span className='prod'>
                                            <button className='remove-btn' onClick={() => deleteItem(id)} >
                                                <DeleteOutlineOutlinedIcon />
                                            </button>
                                            <img src={image} alt="" /></span>
                                        <span className='cp-desc'>
                                            <h4 className='cpd-title'> {title} </h4>
                                        </span>
                                        <span className='prod-price'>$ {price*quantity}</span>
                                        <span className='qty'>
                                            <button className='dec-btn' onClick={() => decrement(id)} >-</button>
                                            <span className='qt'>{quantity}</span>
                                            <button className='inc-btn' onClick={() => increment(id)} >+</button>
                                        </span>
                                        <span className='up'> <del> $ {unitprice*quantity} </del></span>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <CartContext.Provider value={{ ...state, deleteItem, increment, decrement }} >
                        <Cards />
                    </CartContext.Provider> */}
                </div>
                <div className='payment-detail-sec'>
                    <div className='voucher'>
                        <div className='voucher-code'>
                            <input className='voucher-input' type="text" placeholder='Voucher code' />
                            <button className='voucher-btn'>
                                Redeem
                            </button>
                        </div>
                    </div>
                    <div className='total-payment'>
                        <div className="table">
                            <div className="row">
                                <div className="cell">Subtotal</div>
                                <div className="cell">$ 456</div>
                            </div>
                            <div className="row">
                                <div className="cell">discount</div>
                                <div className="cell">$ 234</div>
                            </div>
                            <div className="row">
                                <div className="cell">Coupon Sifaka</div>
                                <div className="cell">$ 345</div>
                            </div>
                            <div className="row total-amount">
                                <div className="cell">Total</div>
                                <div className="cell">$ {233}</div>
                            </div>
                        </div>
                        <div className='div-btn'>
                            <button className='checkoutbtn'>Check out</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Card;