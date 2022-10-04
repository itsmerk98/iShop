// // import hook 
// import { useContext } from 'react';

// // import components
// import { CartContext } from './Card';

// // import css
// import './css/cards.css';

// // images import 
// import product from '../images/philips_hue.svg';

// // mui icons
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


// const Cards = () => {
//     const {products, deleteItem, increment, decrement} = useContext(CartContext);
//     return (
//         <>
//             {
//                 products.map((index, i) => {
//                     const { id, title, price, unitprice, quantity } = index;

//                     return (
//                         <div className='add-products' key={id}>
//                             <div className='prod-detail'>
//                                 <span className='prod'>
//                                     <button className='remove-btn' onClick={()=>deleteItem(id)} >
//                                         <DeleteOutlineOutlinedIcon />
//                                     </button>
//                                     <img src={product} alt="" /></span>
//                                 <span className='cp-desc'>
//                                     <h4 className='cpd-title'> {title} </h4>
//                                 </span>
//                                 <span className='prod-price'>$ {price}</span>
//                                 <span className='qty'>
//                                     <button className='dec-btn' onClick={()=>decrement(id)} >-</button>
//                                     <span className='qt'>{quantity}</span>
//                                     <button className='inc-btn' onClick={()=>increment(id)} >+</button>
//                                 </span>
//                                 <span className='up'>$ {unitprice}</span>
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </>
//     )
// }
// export default Cards;