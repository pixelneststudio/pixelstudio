import { useState, useCallback, useEffect, lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BusinessAutomation from "./components/BusinessAutomation";
import Projects from "./components/Projects";
import Industries from "./components/Industries";
import ProjectInvestment from "./components/ProjectInvestment";
import WhyChoosePixelNest from "./components/WhyChoosePixelNest";
import Results from "./components/Results";
import TrustSection from "./components/TrustSection";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProblemSection from "./components/ProblemSection";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import SmoothScroll from "./components/SmoothScroll";
import FloatingCTA from "./components/ui/FloatingCTA";

import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsOfService";

const DemoOverlay = lazy(() => import("./components/DemoOverlay"));

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [activeDemo, setActiveDemo] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

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