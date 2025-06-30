"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const { user, isLoading, isRefreshing } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isRefreshing && user === null) {
      console.log("Redirecting to login...");
      router.push("/login");
    }
  }, [user, isLoading, isRefreshing, router]);

  if (isLoading || isRefreshing)
    return <p className="text-xl text-center">Loading...</p>;

  if (!user) return null;

  return (
    <div className="my-6">
      <h2 className="text-2xl text-center">Welcome, {user.name}</h2>
    </div>
  );
};

export default Dashboard;
