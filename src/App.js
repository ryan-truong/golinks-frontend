import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Landing from "./components/landing"
import OrgPage from "./components/orgpage"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>
    },
    {
      path: "/:organization",
      element: <OrgPage/>
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
