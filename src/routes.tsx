import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/layout/ErrorPage";
import { APP_ROUTES } from "./constant/appRoutes.constant";
import BinaryOperationsPage from "./pages/BinaryOperationsPage";
import ShortestWayPage from "./pages/ShortestWayPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: APP_ROUTES.binaryOperations.index,
        element: <BinaryOperationsPage />,
      },
      { path: APP_ROUTES.shortestWay.index, element: <ShortestWayPage /> },
      // {
      //   path: "games/:slug",
      //   element: <GameDetailPage />,
      // },
    ],
  },
]);

export default router;
