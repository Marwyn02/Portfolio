// import RootLayout from "./pages/Root.jsx";
import HomePage from "./pages/Home.jsx";
// import ProjectDetailPage, {
//   loader as ProjectDetailLoader,
// } from "./pages/ProjectDetail.jsx";
// import Error from "./pages/Error.jsx";

const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/Portfolio",
  //     element: <RootLayout />,
  //     errorElement: <Error />,
  //     children: [
  //       {
  //         index: true,
  //         element: <HomePage />,
  //         loader: HomePageLoader,
  //       },
  //       {
  //         path: ":projectId",
  //         element: <ProjectDetailPage />,
  //         loader: ProjectDetailLoader,
  //       },
  //     ],
  //   },
  // ]);
  return (
    <div>
      {/* <RouterProvider router={router} /> */}
      <HomePage />
    </div>
  );
};

export default App;
