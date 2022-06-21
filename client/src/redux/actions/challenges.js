import * as api from '../../api';

//Action creators
export const getChallenges = () => async(dispatch) => {
    try{
        const {data} = await api.fetchChallenges();

        dispatch({ type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error.message)
    }

}

export const createChallenge = (challenge) => async (dispatch) => {
    try{
        const { data } = await api.createChallenge(challenge);

        dispatch({ type: 'CREATE', payload: data });

    } catch (error) {
        console.log(error.message)
    }
}