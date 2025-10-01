import { createContext, useContext, type ReactNode } from "react";
import useAuthHook from "../hooks/useAuthHook";

type AuthContextValue = ReturnType<typeof useAuthHook>


const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({children}: {children: ReactNode}){
    const value = useAuthHook();
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(){
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuth most be within <AuthProvider>");
    return context
}