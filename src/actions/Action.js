

export const deleteItem = id => {
    return dispatch({
        type: "DELETE_ITEM",
        payload: id,
    });
}

// increment the item
export const increment = id => {
    return dispatch({
        type: "INCREMENT",
        payload: id,
    });
}

// decrement the item
export const decrement = id => {
    return dispatch({
        type: "DECREMENT",
        payload: id,
    });
}
