import * as memberConstants from "../constants/member";
export const fetchListTask = (params = {}) =>{
    return {
        type:memberConstants.FETCH_MEMBER,
        payload: {
            params
        }
    }
}