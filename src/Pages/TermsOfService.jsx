import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  LegalPageHero,
  LegalPageBody,
  LegalSection,
} from "../components/ui/LegalPageLayout";

function TermsOfService() {
  return (
    <>
      <Navbar activeDemo={null} onOpenDemo={() => {}} onCloseDemo={() => {}} />

      <main>
        <LegalPageHero
          eyebrow="Legal"
          title="Terms of Service"
          subtitle="The terms below outline how we work together — clearly, so there's no ambiguity once a project begins."
        />

        <LegalPageBody>
          <LegalSection title="Services Offered">
            <p>PixelNest Studio provides the following services:</p>
            <ul className="list-inside list-disc space-y-2 pl-1">
              <li>Business websites</li>
              <li>Landing pages</li>
              <li>AI integrations</li>
              <li>Automation solutions</li>
            </ul>
            <p>
              The exact scope of work for any project is agreed with the
              client before work begins.
            </p>
          </LegalSection>

          <LegalSection title="Project Timeline">
            <p>
              Timelines depend on the scope, complexity, and requirements of
              each individual project. An estimated timeline is shared as
              part of the project proposal, and any changes to scope during
              the project may affect the original timeline.
            </p>
          </LegalSection>

          <LegalSection title="Payments">
            <p>
              Projects begin once the scope has been confirmed and any
              agreed initial payment has been received. Final delivery —
              including source files and access credentials — is provided
              after the project is completed and final payment has been
              made in full.
            </p>
          </LegalSection>

          <LegalSection title="Client Responsibilities">
            <p>
              To keep a project moving on schedule, the client is
              responsible for providing branding assets, written content,
              and timely feedback or approvals at each stage of the
              project. Delays in providing these materials may affect the
              overall project timeline.
            </p>
          </LegalSection>

          <LegalSection title="Revisions">
            <p>
              A reasonable number of revisions are included as part of each
              project, with the exact number depending on the scope and
              nature of the work. Revisions beyond what's reasonably
              included, or changes to previously approved work, may be
              subject to an additional fee — which will always be discussed
              and agreed with the client first.
            </p>
          </LegalSection>

          <LegalSection title="Ownership">
            <p>
              Once a project is completed and paid for in full, the client
              owns the final website, its source code, and associated
              project assets. PixelNest Studio may showcase completed work
              in our portfolio and marketing materials, unless the client
              specifically requests otherwise in writing.
            </p>
          </LegalSection>

          <LegalSection title="Limitation of Liability">
            <p>
              PixelNest Studio provides its services with reasonable skill
              and care. We are not liable for any indirect, incidental, or
              consequential damages arising from the use of a delivered
              website or system, including but not limited to loss of
              revenue, data, or business opportunities, except where such
              liability cannot be excluded by law.
            </p>
          </LegalSection>

          <LegalSection title="Contact">
            <p>
              Questions about these terms? Reach out anytime at{" "}
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

export default TermsOfService;