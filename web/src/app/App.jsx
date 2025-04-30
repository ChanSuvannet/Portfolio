import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "../components/navigation";
import "../style/App.css";
import RootLayout from "./site/RootLayout";
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex justify-center py-8 text-red-600">
          Something went wrong. Please try refreshing the page.
        </div>
      );
    }
    return this.props.children;
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <RootLayout />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <div className="flex justify-center py-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          404 - Page Not Found
        </h1>
      </div>
    ),
  },
]);

function App() {
  return (
    <ErrorBoundary>
      <Navigation />
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;