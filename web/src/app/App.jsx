import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ActivityTicker from "../components/ActivityTicker";
import Navigation from "../components/navigation";
import Web3Cursor from "../components/Web3Cursor";
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
        <div
          className="flex justify-center py-8 text-red-400"
          style={{ background: "#0a0a0f", minHeight: "100vh" }}
        >
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
    element: <RootLayout />,
  },
  {
    path: "*",
    element: (
      <div
        className="flex flex-col items-center justify-center min-h-screen"
        style={{ background: "#0a0a0f" }}
      >
        <p className="font-mono text-xl text-cyan-400">404</p>
        <p className="text-slate-500 mt-2 font-mono text-sm">Block not found</p>
        <a href="/" className="mt-6 text-xs font-mono text-cyan-400 underline underline-offset-4">
          ← return home
        </a>
      </div>
    ),
  },
]);

function App() {
  return (
    <ErrorBoundary>
      {/* Global Web3 glowing cursor — desktop only */}
      <Web3Cursor />

      {/* Fixed navigation bar */}
      <Navigation />

      {/* Blockchain activity ticker — sits just below the nav */}
      <div className="fixed top-16 left-0 right-0 z-40">
        <ActivityTicker />
      </div>

      {/* Main content — padded to clear nav + ticker (~16 + 32px = 48px) */}
      <div style={{ paddingTop: "80px" }}>
        <RouterProvider router={router} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
