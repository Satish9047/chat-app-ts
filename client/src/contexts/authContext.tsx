
import { Dispatch, SetStateAction, createContext, useState } from "react";

export interface IChildren {
    children: JSX.Element
}

// interface IAuthContext {
//     React.Dispatch<React.SetStateAction<{
//         isLoggedIn: boolean;
//         user: undefined;
//     }>>
// }

interface IAuthState {
    isLoggedIn: boolean;
    user?: Record<string, unknown>;
}

export const intialAuthState:IAuthState = {
    isLoggedIn: false,
    user: {
        email: "satish@gmail.com"
    },
}


export const AuthContext = createContext<[IAuthState, Dispatch<SetStateAction<IAuthState>>]>([intialAuthState, ()=>{}]);

export const AuthContextProvider = ({children}:IChildren)=>{
    const [authState, setAuthState] = useState(intialAuthState);
    return    (<AuthContext.Provider value={[authState, setAuthState]} >
    {children}
  </AuthContext.Provider>)
}