import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const token =
    localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Zhenix Dashboard</h1>
    </div>
  );
};

export default Dashboard;