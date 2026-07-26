import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  LegalPageHero,
  LegalPageBody,
  LegalSection,
} from "../components/ui/LegalPageLayout";

function PrivacyPolicy() {
  return (
    <>
      <Navbar activeDemo={null} onOpenDemo={() => {}} onCloseDemo={() => {}} />

      <main>
        <LegalPageHero
          eyebrow="Legal"
          title="Privacy Policy"
          subtitle="Your privacy matters. We only collect the information necessary to communicate, deliver projects, and improve our services."
        />

        <LegalPageBody>
          <LegalSection title="Information We Collect">
            <p>
              When you reach out to PixelNest Studio through our contact
              form or by email, we collect only what's needed to understand
              your project and respond to you:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-1">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your company or business name, if provided</li>
              <li>Project details you submit through our forms</li>
            </ul>
            <p>
              We do not collect this information through any means other
              than what you voluntarily submit to us.
            </p>
          </LegalSection>

          <LegalSection title="How We Use Your Information">
            <p>The information you share with us is used to:</p>
            <ul className="list-inside list-disc space-y-2 pl-1">
              <li>Respond to your enquiry and answer your questions</li>
              <li>
                Communicate with you throughout the course of a project
              </li>
              <li>
                Improve our services based on the kinds of projects and
                questions we receive
              </li>
              <li>
                Send occasional marketing communications — but only if you've
                explicitly given us permission to do so
              </li>
            </ul>
            <p>
              We never use your information for any purpose beyond what's
              listed above.
            </p>
          </LegalSection>

          <LegalSection title="Data Protection">
            <p>
              Any information you share with PixelNest Studio is stored
              securely and is never sold, rented, or traded to any third
              party. Access to your information is limited to what's
              necessary to deliver your project and respond to your
              enquiries.
            </p>
          </LegalSection>

          <LegalSection title="Third-Party Services">
            <p>
              PixelNest Studio relies on a small number of trusted
              third-party services to operate this website and communicate
              with clients:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-1">
              <li>
                <span className="font-semibold text-[var(--color-text-primary)]">
                  Web3Forms
                </span>{" "}
                — processes and delivers submissions from our contact form
              </li>
              <li>
                <span className="font-semibold text-[var(--color-text-primary)]">
                  Vercel
                </span>{" "}
                — hosts this website
              </li>
              <li>
                <span className="font-semibold text-[var(--color-text-primary)]">
                  Google Analytics
                </span>{" "}
                — where enabled, helps us understand how visitors use this
                site so we can improve it
              </li>
              <li>
                <span className="font-semibold text-[var(--color-text-primary)]">
                  Supabase
                </span>{" "}
                — reserved for future product integrations; not currently
                used to store client data
              </li>
            </ul>
            <p>
              Each of these services has its own privacy practices governing
              any data that passes through them.
            </p>
          </LegalSection>

          <LegalSection title="Cookies">
            <p>
              This website may use a small number of cookies to remember
              basic preferences and, where analytics are enabled, to
              understand general visitor behavior. Cookies used here don't
              track you across other websites or build an advertising
              profile.
            </p>
          </LegalSection>

          <LegalSection title="Your Rights">
            <p>
              You can request access to, correction of, or deletion of any
              personal information we hold about you at any time. Just send
              us an email and we'll take care of it promptly.
            </p>
          </LegalSection>

          <LegalSection title="Contact">
            <p>
              Questions about this Privacy Policy or how your information is
              handled? Reach out anytime at{" "}
              <a
                href="mailto:pixelneststudio.work@gmail.com"
                className="font-semibold text-[var(--color-accent-violet-hover)] transition-colors duration-300 hover:text-[var(--color-text-primary)]"
              >
                pixelneststudio.work@gmail.com
              </a>
              .
            </p>
          </LegalSection>
        </LegalPageBody>
      </main>

      <Footer />
    </>
  );
}

export default PrivacyPolicy;