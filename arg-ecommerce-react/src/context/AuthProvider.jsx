import React, { useState } from 'react'
import clientAxios from '../config/axios';
import AuthContext from './AuthContext'

const AuthProvider = ({ children }) => {

  const initialValues = {
    token: localStorage.getItem('token'),
    isAuth: false,
    user: null,
    loading: true
  }

  const [authValues, setAuthValues] = useState(initialValues);

  const registerUser = async(data) =>{
    try {
      const res = await clientAxios.post('/api/v1/signup', data);
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{
      ...authValues,
      registerUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider