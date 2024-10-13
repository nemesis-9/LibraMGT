import { Navigate, useRoutes } from "react-router-dom";
import LibraryApp from "./layouts/dashboard";
import AuthorPage from "./sections/@dashboard/author/AuthorPage";
import LoginPage from "./sections/auth/login/LoginPage";
import Page404 from "./pages/Page404";
import BorrowalPage from "./sections/@dashboard/borrowal/BorrowalPage";
import BookPage from "./sections/@dashboard/book/BookPage";
import DashboardAppPage from "./sections/@dashboard/app/DashboardAppPage";
import UsersPage from "./sections/@dashboard/user/UserPage";
import GenrePage from "./sections/@dashboard/genre/GenrePage";
import { useAuth } from "./hooks/useAuth";

import LandingPage from "./pages/LandingPage";
import SignupForm from "./sections/auth/login/SignupPage";

// ----------------------------------------------------------------------

export default function Router() {
  const { user } = useAuth();

  const adminRoutes = useRoutes([
    {
      path: "/",
      element: <LibraryApp />,
      children: [
        { element: <Navigate to="/dashboard" />, index: true },
        { path: "dashboard", element: <DashboardAppPage /> },
        { path: "authors", element: <AuthorPage /> },
        { path: "books", element: <BookPage /> },
        { path: "borrowals", element: <BorrowalPage /> },
        { path: "genres", element: <GenrePage /> },
        { path: "users", element: <UsersPage /> },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  const memberRoutes = useRoutes([
    {
      path: "/",
      element: <LibraryApp />,
      children: [
        { element: <Navigate to="/books" />, index: true },
        { path: "books", element: <BookPage /> },
        { path: "authors", element: <AuthorPage /> },
        { path: "genres", element: <GenrePage /> },
        { path: "borrowals", element: <BorrowalPage /> },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  const guestRoutes = useRoutes([
    {
      path: "/",
      element: <LandingPage />, // LandingPage as the default route for guests
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "signup",
      element: <SignupForm />,
    },
    {
      path: "404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />, // Redirect any unknown routes to the LandingPage
    },
  ]);

  // Check if user is authenticated and determine which routes to use
  if (user) {
    if (user.isAdmin) {
      return adminRoutes;
    }
    return memberRoutes;
  }

  // Default to guest routes (non-authenticated)
  return guestRoutes;
}
