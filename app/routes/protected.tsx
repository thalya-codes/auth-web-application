import { Navigate, Outlet } from "react-router";
import getAccessToken from "../src/utils/getAccessToken";
import TasksPage from "~/routes/tasks";

//redirect
const ProtectedRoute = () => {
  const isAuthenticated = typeof getAccessToken() === "string";

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }

  return <TasksPage />;
};

export default ProtectedRoute;
