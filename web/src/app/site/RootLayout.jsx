import { debounce } from "lodash";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Lazy-loaded components
const HomeComponent = lazy(() => import("./Home"));
const AboutMeComponent = lazy(() => import("./About"));
const EducationComponent = lazy(() => import("./Education"));
const VolunteerWorkComponent = lazy(() => import("./Volunteer"));
const ExperienceComponent = lazy(() => import("./Experience"));
const SkillComponent = lazy(() => import("./Skill"));
const PorjectComponent = lazy(() => import("./Project"));

const FloatingDockDemo = lazy(() => import("../../helper/FloatingDock"));

// Section configuration
const sections = [
  { id: "home", Component: HomeComponent, label: "Home" },
  { id: "about", Component: AboutMeComponent, label: "About Me" },
  { id: "education", Component: EducationComponent, label: "Education" },
  { id: "volunteer", Component: VolunteerWorkComponent, label: "Volunteer Work" },
  { id: "experience", Component: ExperienceComponent, label: "Experience" },
  { id: "projects", Component: PorjectComponent, label: "Projects" },
  { id: "skills", Component: SkillComponent, label: "Skills" },
];

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex justify-center py-8 text-red-500 h-screen">
          Something went wrong. Please try refreshing the page.
        </div>
      );
    }
    return this.props.children;
  }
}

const RootLayout = () => {
  const location = useLocation();
  const [showFloatingDock, setShowFloatingDock] = useState(false);

  // Handle hash-based scrolling
  useEffect(() => {
    if (location.hash) {
      const scrollToElement = () => {
        const elementId = location.hash.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          element.setAttribute("tabindex", "-1"); // Make focusable
          element.focus({ preventScroll: true }); // Focus for accessibility
        }
      };

      // Delay scrolling to ensure DOM is ready
      const timer = setTimeout(scrollToElement, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  // Handle floating dock visibility on scroll
  useEffect(() => {
    // Ensure window is defined (for SSR compatibility)
    if (typeof window === "undefined") return;

    const handleScroll = debounce(() => {
      setShowFloatingDock(window.scrollY > window.innerHeight);
    }, 50);

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // Clean up debounce
    };
  }, []);

  return (
    <ErrorBoundary>

      <main className="scroll-mt-16">
        {sections.map(({ id, Component, label }) => (
          <section
            key={id}
            id={id}
            aria-labelledby={`${id}-heading`}

          >
            <h2 id={`${id}-heading`} className="sr-only">
              {label}
            </h2>
            <Suspense
              fallback={
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                </div>
              }
            >
              <Component />
            </Suspense>
          </section>
        ))}
        {showFloatingDock && (
          <Suspense fallback={null}>
            <div className="fixed bottom-4 right-4 transition-opacity duration-300 ease-in-out ">
              <FloatingDockDemo />
            </div>
          </Suspense>
        )}
      </main>
    </ErrorBoundary>
  );
};

export default React.memo(RootLayout);