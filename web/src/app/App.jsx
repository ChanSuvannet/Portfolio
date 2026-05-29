import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "../components/navigation";
import "../style/index.css";
import RootLayout from "./site/RootLayout";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
          <p className="text-gray-900 font-semibold">Something went wrong.</p>
          <p className="text-gray-500 text-sm mt-1">Please try refreshing the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "*",
    element: (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <p className="text-5xl font-bold text-gray-900 mb-3">404</p>
        <p className="text-gray-500 mb-6">The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </a>
      </div>
    ),
  },
]);

function App() {
  return (
    <ErrorBoundary>
      <Navigation />
      <div style={{ paddingTop: "64px" }}>
        <RouterProvider router={router} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
