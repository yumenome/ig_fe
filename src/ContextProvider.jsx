import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext ({
    user: {},
    token: '',
    noti: '',

    setNoti: () => {},
    setUser: () => {},
    setToken: () => {},
}) 

export const ContextProvider = ({children}) => {

    const[token, _setToken] = useState(localStorage.getItem('API_TOKEN'));
    const[user, setUser] = useState({});

    const setToken = (token) => {
        _setToken(token);
        if(token){
            localStorage.setItem('API_TOKEN', token);
        }else{
            localStorage.removeItem('API_TOKEN');
        }
    }

  return (
    <StateContext.Provider value={{ user, token, setUser, setToken }} >
        {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
