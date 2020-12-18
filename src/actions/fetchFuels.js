export const getFuels = () => {
    return (dispatch) => {
       return fetch(`http://localhost:3000/fuels`)
        .then((resp) => resp.json())
        .then((result) => {
        dispatch({ type: "FETCH_FUELS", payload: result})
        }
        );
    };
};