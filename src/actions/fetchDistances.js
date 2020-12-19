export const getDistances = () => {
    return (dispatch) => {
       return fetch(`http://localhost:3000/distances`)
        .then((resp) => resp.json())
        .then((result) => {
        dispatch({ type: "FETCH_DISTANCES", payload: result})
        });
    };
};