import React, { createContext, useContext, useState } from 'react'

const Global=createContext();
const Context = ({children}) => {
  const [users,setUsers]=useState(null);
  const [admin,setAdmin]=useState(false);
  const [regUsers,setRegUsers]=useState(null);
  const register=(newUser)=>{
    if(regUsers===null)
    {
      setRegUsers([newUser]);
    }
    else
    {
      setRegUsers(curr=> [...curr,newUser]);
    }
  }
  const addUser=(newUser)=>{
    if(newUser.username==='admin' && newUser.password==='admin')
    {
        setAdmin(true);
    }
    else{
        setAdmin(false);
    }
    setUsers(newUser);
  }
  return (
    <Global.Provider value={{
      regUsers,
      admin,
      users,
      addUser,
      setUsers,
      register,
      setRegUsers
    }}>
      {children}
    </Global.Provider>
  )
}
export default Context
export const GlobalContext=()=>{
  return useContext(Global);
}