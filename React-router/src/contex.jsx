import { createContext, useState,useContext } from 'react';

const AuthContex = createContext();
const AuthProvider =({children})=>{
    const [islog,setLog]=useState(false)
    const login =()=>setLog(true);
    const logout=()=>setLog(false);
    
    return (
      <AuthContex.Provider value={{islog,login,logout}}>
        {children}
      </AuthContex.Provider>
    );
}
export default AuthProvider;
export const useAuth= ()=> useContext(AuthContex);