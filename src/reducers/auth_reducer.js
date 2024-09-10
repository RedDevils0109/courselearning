import { LOGIN, LOGOUT } from "../actions";

const auth_reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLogin: true };
    case LOGOUT:
      return { ...state, isLogin: false };
    default:
      throw new Error(`No matching "${action.type}" - action type`);
  }
};

export default auth_reducer;
