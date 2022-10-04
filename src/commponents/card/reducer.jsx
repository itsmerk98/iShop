export const reducer = (state, action) => {
    if (action.type === "DELETE_ITEM") {
        return {
            ...state,
            products: state.products.filter(currentElement => {
                return currentElement.id !== action.payload;
            })
        }
    }

    if (action.type === "INCREMENT") {
        let updateItem = state.products.map(currentElement => {
            if (currentElement.id === action.payload) {
                return {
                    ...currentElement,
                    quantity: currentElement.quantity + 1,
                    price: currentElement.price,
                };
            }
            return currentElement;
        })
        return { ...state, products: updateItem };
    }

    if (action.type === "DECREMENT") {
        let updateItem = state.products.map(currentElement => {
            if (currentElement.id === action.payload) {
                if (currentElement.quantity === 1) {
                    return {
                        ...currentElement,
                        quantity: currentElement.quantity = 1,
                    };
                }
                return {
                    ...currentElement,
                    quantity: currentElement.quantity - 1
                };
            }
            return currentElement;
        })
        return { ...state, products: updateItem };
    }

    if (action.type === "GET_TOTAL") {
        let { totalItem } = state.products.reduce((accum, currentValue) => {
            let { quantity } = currentValue;
            accum.totalItem =+ quantity;
            return accum;
        },
            {
                totalItem: 0,
            });
        return { ...state, totalItem };
    }

    
    return state;
}