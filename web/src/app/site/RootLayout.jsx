import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";

const HomeComponent        = lazy(() => import("./Home"));
const AboutMeComponent     = lazy(() => import("./About"));
const EducationComponent   = lazy(() => import("./Education"));
const VolunteerWorkComponent = lazy(() => import("./Volunteer"));
const ExperienceComponent  = lazy(() => import("./Experience"));
const SkillComponent       = lazy(() => import("./Skill"));
const ProjectComponent     = lazy(() => import("./Project"));
const CompetitionComponent = lazy(() => import("./Competition"));
const ContactSection       = lazy(() => import("./Contact"));

const sections = [
  { id: "home",         Component: HomeComponent,           label: "Home"        },
  { id: "about",        Component: AboutMeComponent,        label: "About Me"    },
  { id: "education",    Component: EducationComponent,      label: "Education"   },
  { id: "volunteer",    Component: VolunteerWorkComponent,  label: "Volunteer"   },
  { id: "experience",   Component: ExperienceComponent,     label: "Experience"  },
  { id: "projects",     Component: ProjectComponent,        label: "Projects"    },
  { id: "competitions", Component: CompetitionComponent,    label: "Competitions"},
  { id: "skills",       Component: SkillComponent,          label: "Skills"      },
  { id: "contact",      Component: ContactSection,          label: "Contact"     },
];

const SectionFallback = () => (
  <div className="flex justify-center items-center py-24 min-h-[20vh]">
    <div className="spinner animate-spin rounded-full h-8 w-8 border-2" />
  </div>
);

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex justify-center items-center py-16 text-gray-500 text-sm">
          Something went wrong. Please try refreshing the page.
        </div>
      );
    }
    return this.props.children;
  }
}

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.setAttribute("tabindex", "-1");
        el.focus({ preventScroll: true });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <ErrorBoundary>
      <main className="bg-white">
        {sections.map(({ id, Component, label }) => (
          <section
            key={id}
            id={id}
            aria-labelledby={`${id}-heading`}
            className="scroll-mt-16"
          >
            <h2 id={`${id}-heading`} className="sr-only">{label}</h2>
            <Suspense fallback={<SectionFallback />}>
              <Component />
            </Suspense>
          </section>
        ))}
        <Footer />
      </main>
    </ErrorBoundary>
  );
};

export default React.memo(RootLayout);
