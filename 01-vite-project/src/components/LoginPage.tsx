import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store"


export const LoginPage = () => {
    const authStatus=useAuthStore(state=>state.status)
  /*   const login=useAuthStore(state => state.login);
    const logout=useAuthStore(state=>state.logout);
 */
    useEffect(()=>{
        setTimeout(() => {
        /*     logout(); */
        }, 1500);
    },[])

    if(authStatus ==='checking'){
        return <h3>Loading...</h3>
    }
  return (
    <>
    <div>LoginPage</div>
    {
    authStatus==='authenticated'?<div>autenticado como {JSON.stringify(user,null,2)}</div> :
    <div>No autenticado</div>
    }
    </>
  )
}
