import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 30, 2026</p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the services provided by Dream It Developer ("Company", "we", "our", "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dream It Developer provides IT services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Web Development and Design</li>
                <li>Mobile Application Development</li>
                <li>UI/UX Design</li>
                <li>Software Development</li>
                <li>AI & Automation Solutions</li>
                <li>Digital Marketing Services</li>
                <li>IT Consulting</li>
                <li>Maintenance and Support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Client Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide accurate and complete information required for the project</li>
                <li>Respond to communications and requests in a timely manner</li>
                <li>Provide necessary access, credentials, and materials as needed</li>
                <li>Review and provide feedback on deliverables within agreed timelines</li>
                <li>Make payments according to the agreed payment schedule</li>
                <li>Ensure you have the rights to any content you provide us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Project Scope and Changes</h2>
              <p className="text-muted-foreground leading-relaxed">
                The scope of each project will be defined in a separate proposal or contract. Any changes to the agreed scope may result in additional charges and timeline adjustments. We will notify you of any such changes and obtain your approval before proceeding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>An initial deposit may be required before work begins</li>
                <li>Payment schedules will be outlined in the project proposal</li>
                <li>All invoices are due within the timeframe specified</li>
                <li>Late payments may incur additional fees</li>
                <li>Work may be paused on overdue accounts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Upon full payment:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>You will own the final deliverables created specifically for your project</li>
                <li>We retain the right to use the work in our portfolio unless otherwise agreed</li>
                <li>Pre-existing materials, frameworks, and tools remain our property</li>
                <li>Third-party assets are subject to their respective licenses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                We agree to keep confidential any proprietary information shared with us during the course of our engagement. This includes business strategies, technical specifications, and any other sensitive information. This obligation continues even after the project is completed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Warranties and Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We warrant that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Services will be performed professionally and with reasonable skill</li>
                <li>Deliverables will substantially conform to agreed specifications</li>
                <li>We have the right to provide the services offered</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                However, we do not guarantee that services will be uninterrupted or error-free. We are not liable for any issues arising from third-party services, hosting providers, or client-provided materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Dream It Developer shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly. Our total liability for any claim arising from our services shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Project Cancellation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Either party may terminate a project with written notice. In case of cancellation:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>You will pay for all work completed up to the cancellation date</li>
                <li>Any deposits for uncompleted work may be partially refundable</li>
                <li>We will provide all completed deliverables upon final payment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Support and Maintenance</h2>
              <p className="text-muted-foreground leading-relaxed">
                Post-project support and maintenance services are available under separate agreements. Bug fixes for issues directly resulting from our work may be provided free of charge for a limited period as specified in your project agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Force Majeure</h2>
              <p className="text-muted-foreground leading-relaxed">
                We shall not be liable for any failure or delay in performing our obligations due to circumstances beyond our reasonable control, including but not limited to natural disasters, war, terrorism, riots, pandemics, government actions, or internet outages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of Bangladesh. Any disputes arising from these terms shall be resolved through arbitration or in the courts of Bangladesh.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">15. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-6 bg-card rounded-lg border border-border">
                <p className="text-foreground font-semibold">Dream It Developer</p>
                <p className="text-muted-foreground">Email: info@dreamitdeveloper.com</p>
                <p className="text-muted-foreground">Address: Magura Sadar, Magura, PO: 7600, Dhaka, Bangladesh</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
