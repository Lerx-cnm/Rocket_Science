export const getFuels = () => {
    return (dispatch) => {
       return fetch(`http://localhost:3000/fuels`)
        .then((resp) => resp.json())
        .then((result) => {
        const newObj = {
            fuel1: result[0],
            fuel2: result[1],
            fuel3: result[2],
            fuel4: result[3],
            fuel5: result[4],
            fuel6: result[5],
            fuel7: result[6]
        }
        dispatch({ type: "FETCH_FUELS", payload: newObj})
        }
        );
    };
};