// import components
import Header from '../commponents/Header';
import Footer from '../commponents/Footer';
import Card from '../commponents/card/Card'
import { createContext, useReducer, useEffect } from 'react';
import { reducer } from '../commponents/card/reducer';
import { products } from '../media/CardProduct'

export const CartContext = createContext();

const initialState = {
    products: products,
    totalAmount: 0,
    totalItem: 0,
}


const Cards = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const deleteItem = id => {
        return dispatch({
            type: "DELETE_ITEM",
            payload: id,
        });
    }

    // increment the item
    const increment = id => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        });
    }

    // decrement the item
    const decrement = id => {
        return dispatch({
            type: "DECREMENT",
            payload: id,
        });
    }

    // updtae the date like item and total amount
    useEffect(() => {
        dispatch({ type: "GET_TOTAT" })
    }, [state.products]);


    return (
        <>
            <Header />
            <CartContext.Provider value={{ ...state, deleteItem, increment, decrement }} >
                <Card />
            </CartContext.Provider>
            <Footer />
        </>
    )
}

export default Cards;