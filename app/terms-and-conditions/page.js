import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing the use of GreyArc Consulting's (Vanrao Distributors LLP) website, www.greyarc.co, under Indian law.",
  alternates: { canonical: "https://www.greyarc.co/terms-and-conditions" },
};

const EFFECTIVE_DATE = "August 25, 2026";

export default function TermsAndConditionsPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Effective date: {EFFECTIVE_DATE}
        </p>

        <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-blue-700">
          <p>
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern access
            to and use of www.greyarc.co (the &ldquo;Site&rdquo;), operated
            by Vanrao Distributors LLP, trading as GreyArc Consulting
            (&ldquo;GreyArc&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
            &ldquo;our&rdquo;), LLPIN ACE-3527, registered office at C 202,
            Block C, Vasundhara Apartment, Smt. Gladys Alvares Road,
            Chitalsar Manpada, Thane, Maharashtra – 400607, India. By
            accessing or using the Site, you agree to be bound by these
            Terms. If you do not agree, please do not use the Site.
          </p>

          <h2>1. Purpose of the Site</h2>
          <p>
            The Site provides information about GreyArc&rsquo;s consulting
            services for the agrochemical, chemical, and manufacturing
            sectors, and allows visitors to enquire about our services. The
            Site does not constitute an offer to contract, and no
            consulting engagement is formed until a separate signed
            agreement (such as a Statement of Work or Consulting Agreement)
            is executed between GreyArc and a client.
          </p>

          <h2>2. Use of the Site</h2>
          <p>You agree to use the Site only for lawful purposes and agree not to:</p>
          <ul>
            <li>
              Use the Site in any way that violates applicable Indian or
              international law
            </li>
            <li>
              Attempt to gain unauthorised access to the Site, its servers,
              or any connected systems
            </li>
            <li>
              Introduce viruses, malware, or other harmful code to the Site
            </li>
            <li>
              Scrape, copy, or reproduce Site content for commercial
              redistribution without our written consent
            </li>
            <li>
              Impersonate any person or entity, or misrepresent your
              affiliation with any person or entity, when contacting us
              through the Site
            </li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on the Site — including text, graphics, logos, the
            GreyArc name and brand, frameworks, methodologies, and diagnostic
            models referenced or described on the Site — is the property of
            GreyArc or its licensors and is protected under applicable
            Indian intellectual property law, including the Copyright Act,
            1957 and the Trade Marks Act, 1999. Nothing on this Site grants
            you any licence or right to use GreyArc&rsquo;s intellectual
            property except to view the Site for its intended informational
            purpose.
          </p>

          <h2>4. No Professional Advice</h2>
          <p>
            Content on the Site — including service descriptions, blog
            articles, and case studies — is provided for general
            informational purposes only and does not constitute consulting,
            legal, financial, or professional advice. Any reliance you place
            on such content is strictly at your own risk. Formal consulting
            advice is provided only under a signed engagement with GreyArc.
          </p>

          <h2>5. Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites (for example,
            LinkedIn). We do not control and are not responsible for the
            content, privacy practices, or availability of third-party
            sites. Accessing linked sites is at your own risk.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable Indian law, GreyArc
            shall not be liable for any indirect, incidental, consequential,
            or special damages arising out of or in connection with your use
            of, or inability to use, the Site. The Site and its content are
            provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
            basis, without warranties of any kind, express or implied.
          </p>

          <h2>7. Indemnity</h2>
          <p>
            You agree to indemnify and hold GreyArc harmless from any claims,
            losses, liabilities, or expenses (including reasonable legal
            fees) arising from your misuse of the Site or violation of these
            Terms.
          </p>

          <h2>8. Privacy</h2>
          <p>
            Our collection and use of personal data through the Site is
            governed by our{" "}
            <a href="/privacy-policy">Privacy Policy</a>, which forms part of
            these Terms.
          </p>

          <h2>9. Changes to These Terms</h2>
          <p>
            We may revise these Terms at any time by updating this page. The
            &ldquo;Effective date&rdquo; above reflects the date of the most
            recent revision. Continued use of the Site after changes take
            effect constitutes acceptance of the revised Terms.
          </p>

          <h2>10. Governing Law &amp; Jurisdiction</h2>
          <p>
            These Terms are governed by the laws of India. Any dispute
            arising out of or in connection with these Terms or your use of
            the Site shall be subject to arbitration under the Arbitration
            and Conciliation Act, 1996, with a single arbitrator, seated in
            Mumbai, Maharashtra. Subject to the foregoing, the courts of
            Mumbai, Maharashtra shall have exclusive jurisdiction.
          </p>

          <h2>11. Contact</h2>
          <p>
            For questions about these Terms, contact us at{" "}
            info@greyarc.co.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
