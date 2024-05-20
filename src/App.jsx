import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  CreateAccount, 
  Operations,
  NoPage
} from "./pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/createaccount',
        element: <CreateAccount />
      },
      {
        path: '/operations',
        element: <Operations />
      },
      {
        path: '*',
        element: <NoPage />
      },
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App


// <Link to={isActive ? '/link-to-route' : '#'} />