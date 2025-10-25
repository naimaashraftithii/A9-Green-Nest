import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import PlantDetails from "../Pages/PlantDetails";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Profile from "../Pages/Profile";
import ErrorPage from "../Pages/ErrorPage";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,  
    children: [
      // Publicroutes
      { index: true, element: <Home /> },
      { path: "plants", element: <Plants /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },

      // Protectedroutes
      {
        path: "plants/:id",
        element: (
          <ProtectedRoute>
            <PlantDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
