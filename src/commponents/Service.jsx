import './css/service.css';

// import images
import freeshipping from './images/shipping.svg'
import Support from './images/support.svg';
import Refund from './images/refund.svg';

const Service = ()=>{
    return (
        <>
            <section className='service-sec'>
                <dir className='containt'>
                    <img src={freeshipping} alt="" />
                    <h3 className='title'>Free Shipping</h3>
                    <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sit vero recusandae architecto itaque atque suscipit autem facere, ratione quasi et? Quos dolor ab quae possimus dicta facere? Assumenda, sed?</p>
                </dir>
                <dir className='containt'>
                    <img src={Refund} alt="" />
                    <h3 className='title'>100% Refund</h3>
                    <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sit vero recusandae architecto itaque atque suscipit autem facere, ratione quasi et? Quos dolor ab quae possimus dicta facere? Assumenda, sed?</p>
                </dir>
                <dir className='containt'>
                    <img src={Support} alt="" />
                    <h3 className='title'>Support 24/7</h3>
                    <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sit vero recusandae architecto itaque atque suscipit autem facere, ratione quasi et? Quos dolor ab quae possimus dicta facere? Assumenda, sed?</p>
                </dir>
            </section>
        </>
    )
}

export default Service;