// import css
// import { height } from '@mui/system';
import './css/offer.css'

// image import 
import image from './images/2_corousel.png'
const Offer = (props) => {
    const style = {
        height: props.height + 'px',
        margin: props.margin,
    }
    return (
        <>
            <section className="offer-container " style={style}>
                <div className='offer-sec'>
                    <div className='center'>
                        <h3 className='offer-title'>iPhone 6 Plus</h3>
                        <p className='offer-desc'>Performance and design. Taken right to the edge.</p>
                        <button className='offer-btn button'>SHOP NOW</button>
                    </div>
                </div>
                <div className='pro-img' style={{overflow: `${props.overflow}`}}>
                    <img className='offer-prodect-img' src={image} alt="pic err " />

                </div>
            </section>
        </>
    )
}
export default Offer;