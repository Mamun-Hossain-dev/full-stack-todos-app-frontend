"use client";

import getProfile from "@/lib/auth/getProfile";
import axios from "@/lib/axios";
import { createContext, useContext, useEffect, useState } from "react";
import { setOnRefreshStart } from "@/lib/axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getUser = async () => {
    try {
      const userData = await getProfile();
      console.log("auth context userdata: ", userData);
      setUser(userData);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const startRefresh = () => {
    setIsRefreshing(true);
    return axios.post("/auth/refresh").finally(() => setIsRefreshing(false));
  };

  useEffect(() => {
    setOnRefreshStart(startRefresh);
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isLoading, isRefreshing, startRefresh }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
