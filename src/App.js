import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage, { loader as HomePageLoader } from "./pages/Home";
import ProjectDetailPage, {
  loader as ProjectDetailLoader,
} from "./pages/ProjectDetail";
import Error from "./pages/Error";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/Portfolio",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: HomePageLoader,
        },
        {
          path: ":projectId",
          element: <ProjectDetailPage />,
          loader: ProjectDetailLoader,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
