import Footer from '../commponents/Footer';
import Header from '../commponents/Header';
import Main from '../commponents/Main';
import Service from '../commponents/Service';
import FutureProduct from '../commponents/FutureProduct';
import BestSeller from '../commponents/BestSeller';
import Offer from '../commponents/Offer';
// import {Item} from '../media/Prodects';

const Home = () => {

    return (
        <>
            <Header />
            <Main />
            <BestSeller />
            <Offer />
            <Service />
            <FutureProduct />
            <Footer />
            {/* <div>
                {
                    Item.map(elem=>{
                        const { id, image } = elem;
                        return (
                            <img src={image} alt='Im-error' key={id}/>
                        )
                    })
                }
            </div> */}
        </>
    )
}
export default Home;