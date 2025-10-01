import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth";
import { useEffect, useMemo, useState } from "react";
import { auth } from "../firebase/firebase";

export default function useAuthHook(){
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect( () => {
        const unsub = onAuthStateChanged(auth, (user) =>{
            setUser(user);
            setLoading(false);
        }, (error) => {
            setError(error.message)
            setLoading(true)
        })
        return unsub;
    }, []);

    async function doCreateUserWithEmailAndPassword(email: string, password: string){
        await createUserWithEmailAndPassword(auth, email, password);
    }

    async function doSignInWithEmailAndPassword(email: string, password: string){
        await signInWithEmailAndPassword(auth, email, password);
    }

    async function logout(){
        await signOut(auth);
    }


    return useMemo(() => ({
        user, loading, error,
        doCreateUserWithEmailAndPassword,
        doSignInWithEmailAndPassword,
        logout
    }), [user, loading, error]);
}