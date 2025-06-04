import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './api/firebaseConfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // 當登入狀態變化時更新
    });

    return () => unsubscribe(); // 清理監聽
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children} {/* 把使用者狀態提供給整個 App */}
    </AuthContext.Provider>
  );
};

// 其他組件可以用這個來取得 currentUser
export const useAuth = () => useContext(AuthContext);
