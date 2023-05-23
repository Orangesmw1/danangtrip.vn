import { INIT_STATE } from "../constant";
import { getType, getUsers } from "../actions";

export default function usersReducers(state = INIT_STATE.users, action) {
  switch (action.type) {
    case getType(getUsers.getUsersRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getUsers.getUsersSuccess):
      return {
        ...state,
        isLoading: true,
        data: action.payload,
      };
    case getType(getUsers.getUsersFailure):
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
