import { useEffect } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthUser({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("tkn")) {
      setToken(localStorage.getItem("tkn"));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthUser;
