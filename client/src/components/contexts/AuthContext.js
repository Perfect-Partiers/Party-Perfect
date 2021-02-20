import React, { useContext, useState, useEffect } from "react";
import { auth, generateUserDocument } from "../../firebase";

const AuthContext = React.createContext();
export function useAuth() {
     return useContext(AuthContext);
}

export function AuthProvider({ children }) {
     const [currentUser, setCurrentUser] = useState("");
     const [loading, setLoading] = useState(true);

     async function signup(email, password, displayName) {
          const { user } = await auth.createUserWithEmailAndPassword(
               email,
               password
          );
          const userData = await generateUserDocument(user, { displayName });
          setCurrentUser(userData);
     }

     function login(email, password) {
          return auth.signInWithEmailAndPassword(email, password);
     }

     function logout() {
          return auth.signOut();
     }

     function resetPassword(email) {
          return auth.sendPasswordResetEmail(email);
     }

     useEffect(() => {
          const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
               const user = await generateUserDocument(userAuth);

               setCurrentUser(user);
               setLoading(false);
          });
          return unsubscribe;
     }, []);

     const value = {
          currentUser,
          login,
          signup,
          logout,
          resetPassword,
     };
     return (
          <AuthContext.Provider value={value}>
               {!loading && children}
          </AuthContext.Provider>
     );
}

export default AuthContext;
