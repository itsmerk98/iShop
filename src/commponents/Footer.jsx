import './css/footer.css'

// import image
import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import Western_union from './images/Western_union.svg'
import mastercard from './images/master_card.svg'
import paypal from './images/Paypal.svg'
import visa from './images/visa.svg'

const Footer = props => {

    return (
        <>
            <footer>
                <section className="fts">
                    <div className='fts-desc'>
                        <h1 className='logo logo-se'>iSHOP</h1>
                        <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti quidem rerum beatae officia iusto eos, error laboriosam hic temporibus vitae reprehenderit, asperiores, voluptates ex mollitia molestiae ab tempora quos! voluptates ex mollitia molestiae ab tempora quos!</p>

                    </div>
                    <div className='fts-desc mid'>
                        <h1 className='fus'>Follow Us</h1>
                        <p className='follow-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti quidem  </p>
                        <dir className='icon'>
                            <span className='socil-icon'>
                                <img src={facebook} alt="error" />
                            </span>
                            <span className='sit'>
                                <img className='twitter' src={twitter} alt="error" />
                            </span>
                        </dir>

                    </div>
                    <div className='fts-desc'>
                        <h1>Contact</h1>
                        <div className='desc'>
                            <p >iShop: address @building 124 </p>
                            <p>Call us now: 0123-456-789</p>
                            <p> Email: support@whatever.com</p>
                        </div>
                    </div>
                </section>
                <section className='fbs'>
                    <div className='fbs-sec'>
                        <ul className='fbs-ul'>
                            <li>
                                <h3>Information</h3>
                            </li>
                            <li>
                                <a href="/">About Us </a>
                            </li>
                            <li>
                                <a href="/">Infomation </a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy </a>
                            </li>
                            <li>
                                <a href="/">Terms & Conditions </a>
                            </li>
                        </ul>
                        <ul className='fbs-ul'>
                            <li>
                                <h3>Service</h3>
                            </li>
                            <li>
                                <a href="/">About Us </a>
                            </li>
                            <li>
                                <a href="/">Infomation </a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy </a>
                            </li>
                            <li>
                                <a href="/">Terms & Conditions </a>
                            </li>
                        </ul>
                        <ul className='fbs-ul'>
                            <li>
                                <h3>Extras</h3>
                            </li>
                            <li>
                                <a href="/">About Us </a>
                            </li>
                            <li>
                                <a href="/">Infomation </a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy </a>
                            </li>
                            <li>
                                <a href="/">Terms & Conditions </a>
                            </li>
                        </ul>
                        <ul className='fbs-ul'>
                            <li>
                                <h3>My Account</h3>
                            </li>
                            <li>
                                <a href="/">About Us </a>
                            </li>
                            <li>
                                <a href="/">Infomation </a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy </a>
                            </li>
                            <li>
                                <a href="/">Terms & Conditions </a>
                            </li>
                        </ul>
                        <ul className='fbs-ul'>
                            <li>
                                <h3>Userful Links</h3>
                            </li>
                            <li>
                                <a href="/">About Us </a>
                            </li>
                            <li>
                                <a href="/">Infomation </a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy </a>
                            </li>
                            <li>
                                <a href="/">Terms & Conditions </a>
                            </li>
                        </ul>
                        <ul className='fbs-ul'>
                            <li>
                                <h3>Our Offers </h3>
                            </li>
                            <li>
                                <a href="/">About Us </a>
                            </li>
                            <li>
                                <a href="/">Infomation </a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy </a>
                            </li>
                            <li>
                                <a href="/">Terms & Conditions </a>
                            </li>
                        </ul>

                    </div>
                </section>
                <hr />
                <section className='payment-cards'>
                    <div className='card-container'>
                        <img className='payment-card' src={Western_union} alt="card error" />
                        <img className='payment-card' src={mastercard} alt="card error" />
                        <img className='payment-card' src={paypal} alt="card error" />
                        <img className='payment-card' src={visa} alt="card error" />
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer;
