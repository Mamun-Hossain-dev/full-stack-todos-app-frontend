// lib/auth/getProfile.js
import axios from "@/lib/axios";

export default async function getProfile() {
  try {
    const res = await axios.get("/auth/me");
    return res.data;
  } catch (err) {
    console.error("getProfile failed:", err.response?.data || err.message);
    throw err;
  }
}
