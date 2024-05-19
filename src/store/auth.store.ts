import {create} from 'zustand'
interface AuthState{
status:'authenticated' | 'unauthenticated' | 'checking';
 token?:string;
 user?:{
    name:string;
    email:string;
 };
}

export const useAuthStore = create<AuthState>()((set)=>({
    status:'checking',
    token:undefined,
    user:undefined,

    login:(email:string, password:string)=>{
        set({
            status:'authenticated',
            token:'ABC123',
            user:{
                name:'John Doe',
                email:email,
            }
        })
       
        
    },
    logout:()=>{
        set({
            status:'authenticated',
            token:undefined,
            user:undefined
        })
    }
}))
