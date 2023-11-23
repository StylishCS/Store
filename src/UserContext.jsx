import { createContext, useContext, useState } from "react";
import http from "./http";
const UserContext = createContext();

const user = localStorage.getItem("user");
const email = user ? JSON.parse(localStorage.getItem("user")).email : null;

const initialState = {
  _id: "",
  email: email
}

const UserContextProvider = ({children}) => {
  const [state, setState] = useState(initialState)


  const loginUser = async (email, password) => {
    try {
      const {user} = await http.POST("/users/login", { email, password })
      // setState((prevValue) => {
      //   retrun (
      //     {
      //       ...prevValue,
      //       email: user.email
      //     }
      //   )
      // })
      console.log(user);
      if (localStorage.getItem("user")) {
        localStorage.removeItem("user");
      } else {
        localStorage.setItem("user", JSON.stringify({_id: user._id, email: user.email}));
      }
      setState({_id: user._id, email: user.email});
    } catch (err) {
      console.log(err);
    }
  };

  const logoutUser = async () => {
    await http.POST("/users/logout")
    localStorage.clear();
    setState({_id: "", email: null})
  };
  
  return (
    <UserContext.Provider value={{
      ...state,
      loginUser,
      logoutUser,
      }}>
      {children}
    </UserContext.Provider>
  )
}

const useUserContext = () => {
  return useContext(UserContext);
}

export {useUserContext, UserContextProvider}