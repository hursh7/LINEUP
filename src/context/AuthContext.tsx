import { useContext, useEffect, useState, createContext } from 'react';
import { login, logout, UserStateChange } from '../api/firebase';

const AuthContext = createContext<any | undefined>(undefined);

export function AuthContextProvider({ children }: any) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    UserStateChange(setUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, uid: user && user.uid, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
