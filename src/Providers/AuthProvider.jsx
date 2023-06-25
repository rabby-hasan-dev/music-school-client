import { createContext } from "react";


export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {

const user='rabby'

    const info={
        user
    }


    return (
        <AuthContext.Provider value={info} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;