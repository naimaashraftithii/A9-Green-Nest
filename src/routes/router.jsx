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
import AboutUs from "../components/AboutUs";
import Services from "../Pages/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      // Public
      { index: true, element: <Home /> },
      { path: "plants", element: <Plants /> },

    
      { path: "plants/:id", element: <PlantDetails /> },

      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },

      // Protected
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "about",
        element: (
          <ProtectedRoute>
            <AboutUs />
          </ProtectedRoute>
        ),
      },
      {
        path: "services",
        element: (
          <ProtectedRoute>
            <Services />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
