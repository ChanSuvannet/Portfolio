import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../style/App.css";
import Header from "./main/navbar/navbar.component";
import ContentComponent from "./main/page/content";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContentComponent />,
  },
]);

function App() {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
