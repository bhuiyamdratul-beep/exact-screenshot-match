import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const DataDeletion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Data Deletion Instructions</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 30, 2026</p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Right to Data Deletion</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Dream It Developer, we respect your right to control your personal data. In accordance with applicable data protection laws including GDPR and other privacy regulations, you have the right to request the deletion of your personal information from our systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">What Data Can Be Deleted</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Upon your request, we can delete the following types of personal data:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Messages and inquiries submitted through our website</li>
                <li>Newsletter subscription data</li>
                <li>Account information (if you have an account with us)</li>
                <li>Any other personal data we have collected from you</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How to Request Data Deletion</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To request the deletion of your personal data, please follow these steps:
              </p>
              
              <div className="space-y-6">
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Step 1: Send a Request</h3>
                  <p className="text-muted-foreground">
                    Send an email to <span className="text-primary font-medium">info@dreamitdeveloper.com</span> with the subject line "Data Deletion Request".
                  </p>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Step 2: Provide Verification</h3>
                  <p className="text-muted-foreground">
                    Include the following information in your email to help us verify your identity:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2 ml-4">
                    <li>Your full name</li>
                    <li>Email address associated with your data</li>
                    <li>Phone number (if provided previously)</li>
                    <li>Any reference numbers from previous communications</li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Step 3: Specify Your Request</h3>
                  <p className="text-muted-foreground">
                    Clearly state whether you want:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2 ml-4">
                    <li>Complete deletion of all your data</li>
                    <li>Deletion of specific types of data only</li>
                    <li>Unsubscription from newsletters only</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Processing Time</h2>
              <p className="text-muted-foreground leading-relaxed">
                We will process your data deletion request within <strong>30 days</strong> of receiving a valid request. You will receive a confirmation email once your data has been deleted from our systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Exceptions</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Please note that we may need to retain certain data in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>To comply with legal obligations (e.g., tax records, invoices)</li>
                <li>For the establishment, exercise, or defense of legal claims</li>
                <li>To protect against fraudulent or illegal activity</li>
                <li>For ongoing contractual obligations</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                If any exceptions apply, we will inform you about the specific data that cannot be deleted and the reason for retention.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                If your data has been shared with third-party services (e.g., payment processors, analytics tools), we will make reasonable efforts to inform these parties of your deletion request. However, you may need to contact these services directly for complete removal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Questions or Concerns</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about the data deletion process or need assistance, please contact us:
              </p>
              <div className="mt-4 p-6 bg-card rounded-lg border border-border">
                <p className="text-foreground font-semibold">Dream It Developer</p>
                <p className="text-muted-foreground">Email: info@dreamitdeveloper.com</p>
                <p className="text-muted-foreground">Address: Magura Sadar, Magura, PO: 7600, Dhaka, Bangladesh</p>
                <a href="mailto:info@dreamitdeveloper.com?subject=Data%20Deletion%20Request">
                  <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Data Deletion Request
                  </Button>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataDeletion;
