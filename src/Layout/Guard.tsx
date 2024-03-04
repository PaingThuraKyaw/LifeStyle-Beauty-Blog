import { Outlet } from "react-router-dom";

const Guard = () => {
  const token = false;

  if (!token) return <h3>Login</h3>;

  return <Outlet />;
};

export default Guard;
