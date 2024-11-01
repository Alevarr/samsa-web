import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import ErrorPage from "./pages/layout/ErrorPage";
import DashboardPage from "./pages/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <DashboardPage /> }],
  },
]);

export default router;
