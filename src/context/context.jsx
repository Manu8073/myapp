import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (mobile, password) => {
    console.log("Login called:", mobile, password);
    if (mobile === "9999999999" && password === "1234") {
      const userData = { mobile, role: "voter" };
      setUser(userData);
      return { success: true };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
  };

  const logout = () => {
    console.log("Logout called");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
