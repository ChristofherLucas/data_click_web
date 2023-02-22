import { createBrowserRouter } from "react-router-dom";
import { Clubs } from "./pages/Clubs";
import { User } from "./pages/User";

export const router = createBrowserRouter([
  { path: "/clubs", element: <Clubs /> },
  { path: "/users", element: <User /> },
]);
