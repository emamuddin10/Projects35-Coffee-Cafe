import { useState } from "react"

  const AuthContext = createContext()

const AuthProvider = () => {
    const [user, setUser]=useState(
        ({
            name:'jhanker mahbub',
            email:'jhanker@hungker.com'
          })
    )

    const authInfo ={
        user,
        setUser
    }

    return 
    <AuthContext.Provider value={authInfo}></AuthContext.Provider>
}
export default AuthProvider;