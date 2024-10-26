import React, { useContext, useEffect, useState } from "react";
import "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const [currentUser, setCurrentUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe; // Unsubscribes to avoid memory leaks
  }, [auth]);

  // Sign up function
  async function signup(email, password, username) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });
      setCurrentUser(auth.currentUser); // Update user with displayName
    } catch (error) {
      console.error("Signup Error:", error.message); // Handle errors
      throw error; // Optional: Rethrow for handling in components
    }
  }

  // Login function
  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(auth.currentUser);
    } catch (error) {
      console.error("Login Error:", error.message);
      throw error;
    }
  }

  // Logout function
  function logout() {
    return signOut(auth);
  }

  // Ensure value is included and not commented out
  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
