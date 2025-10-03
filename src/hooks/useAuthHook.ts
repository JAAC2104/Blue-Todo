import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, type User } from "firebase/auth";
import { useEffect, useMemo, useState } from "react";
import { auth, database } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function useAuthHook(){
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>("");

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

    async function doCreateUserWithEmailAndPassword(email: string, password: string, username: string){
        const credentials = await createUserWithEmailAndPassword(auth, email, password);
        const user = credentials.user;

        await updateProfile(user, {displayName: username});

        await setDoc(doc(database, "users", user.uid), {
            uid: user.uid,
            username,
            email,
        });

        return credentials;
    }

    async function doSignInWithEmailAndPassword(email: string, password: string){
        await signInWithEmailAndPassword(auth, email, password);
    }

    async function logout(){
        await signOut(auth);
    }


    return useMemo(() => ({
        user, 
        loading, setLoading,
        error, setError,
        doCreateUserWithEmailAndPassword,
        doSignInWithEmailAndPassword,
        logout
    }), [user, loading, error]);
}