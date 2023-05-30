import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Landing from "./components/landing"
import OrgPage from "./components/orgpage"
import OrgRepo from "./components/orgrepo"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>
    },
    {
      path: "/:organization",
      element: <OrgPage/>
    },
    {
      path: "/:organization/:repo",
      element: <OrgRepo/>
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
