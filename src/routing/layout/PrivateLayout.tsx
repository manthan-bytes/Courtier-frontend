import { Navigate, Outlet } from 'react-router-dom';
export default function PrivateLayout() {
  const token: string | null = localStorage.getItem("token");
  const loginasGuest: string | null = localStorage.getItem("loginasGuest");
  return token || loginasGuest ? <Outlet /> : <Navigate to="/login" />;
}
