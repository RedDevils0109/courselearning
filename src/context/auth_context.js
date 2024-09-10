import React, { useReducer, createContext, useContext, useEffect } from "react";
import reducer from "../reducers/auth_reducer";
import { LOGIN, LOGOUT } from "../actions";

const initialState = {
  isLogin: false,
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize state from localStorage
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    isLogin: localStorage.getItem("isLogin") === "true",
  });

  const login = () => {
    dispatch({ type: LOGIN });
    localStorage.setItem("isLogin", "true");
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
    localStorage.setItem("isLogin", "false");
  };

  useEffect(() => {
    // Clean up localStorage if user logs out
    if (!state.isLogin) {
      localStorage.removeItem("isLogin");
    }
  }, [state.isLogin]);

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
