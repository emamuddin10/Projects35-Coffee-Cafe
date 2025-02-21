import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const createNewUser = (email,password)=>{
  return createUserWithEmailAndPassword(auth, email, password)

}
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user)

const logOut = ()=>{
  return signOut(auth)
}
const logIn = (email,password)=>{
  return signInWithEmailAndPassword(auth, email, password)
}

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    logIn

  };

  useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })
    return ()=>{
        unSubscribe()
    }
  },[])

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
