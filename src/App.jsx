import { useState, useCallback, useEffect, lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import SmoothScroll from "./components/SmoothScroll";
import FloatingCTA from "./components/ui/FloatingCTA";

import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsOfService";

// Lazy load all sections below Hero (except Footer which is used in legal pages)
const ProblemSection = lazy(() => import("./components/ProblemSection"));
const Services = lazy(() => import("./components/Services"));
const BusinessAutomation = lazy(() => import("./components/BusinessAutomation"));
const Process = lazy(() => import("./components/Process"));
const Projects = lazy(() => import("./components/Projects"));
const Industries = lazy(() => import("./components/Industries"));
const ProjectInvestment = lazy(() => import("./components/ProjectInvestment"));
const WhyChoosePixelNest = lazy(() => import("./components/WhyChoosePixelNest"));
const Results = lazy(() => import("./components/Results"));
const TechStack = lazy(() => import("./components/TechStack"));
const TrustSection = lazy(() => import("./components/TrustSection"));
const FAQ = lazy(() => import("./components/FAQ"));
const CTASection = lazy(() => import("./components/CTASection"));
const Contact = lazy(() => import("./components/Contact"));
const DemoOverlay = lazy(() => import("./components/DemoOverlay"));

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [activeDemo, setActiveDemo] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const openDemo = useCallback((demoKey) => {
    setActiveDemo(demoKey);
  }, []);

  const closeDemo = useCallback(() => {
    setActiveDemo(null);
  }, []);

  return (
    <>
      <Loader loading={loading} />

      <SmoothScroll paused={loading || Boolean(activeDemo)} />

      {!loading && (
        <>
          <ScrollProgress />

          <Navbar
            activeDemo={activeDemo}
            onOpenDemo={openDemo}
            onCloseDemo={closeDemo}
          />

          <main>
            <Hero />
            <Suspense fallback={null}>
              <ProblemSection />
              <Services />
              <BusinessAutomation />
              <Process />
              <Projects onOpenDemo={openDemo} />
              <Industries />
              <ProjectInvestment />
              <WhyChoosePixelNest />
              <Results />
              <TechStack />
              <TrustSection />
              <FAQ />
              <CTASection />
              <Contact />
            </Suspense>
          </main>

          <Footer />

          <FloatingCTA />

          <Suspense fallback={null}>
            <DemoOverlay
              isOpen={Boolean(activeDemo)}
              onClose={closeDemo}
              type={activeDemo}
            />
          </Suspense>
        </>
      )}
    </>
  );
}

function App() {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";

  if (pathname === "/privacy-policy") {
    return <PrivacyPolicy />;
  }

  if (pathname === "/terms-of-service") {
    return <TermsOfService />;
  }

  // if (pathname === "/sitemap") {
  //   return <Sitemap />;
  // }

  return <HomePage />;
}

export default App;