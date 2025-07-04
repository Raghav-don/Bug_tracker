import{createContext, useContext, useState, useEffect} from "react"

const AuthContext = createContext();

export const AuthProvider = (({children}) =>{
     const [user,setUser] = useState(() => {
        const storeUser = localStorage.getItem("user");
        return storeUser ? JSON.parse(storeUser) : null;
     });
     const login = (userData, token) =>{
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.set("token", token);
     };
     const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        };
        
        return (
        <AuthContext.Provider value = {{ user, login, logout }}>
         {children}
          </AuthContext.Provider>
         );
});
       
export const useAuth=() =>useContext(AuthContext);