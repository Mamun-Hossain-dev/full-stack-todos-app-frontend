"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  if (!user) return null;
  return (
    <div className="my-6">
      <h2 className="text-2xl text-center">Welcome, {`${user.name}`} </h2>
    </div>
  );
};

export default Dashboard;
