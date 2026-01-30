import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 30, 2026</p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners useful information about how their site is being used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dream It Developer uses cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>To ensure our website functions properly</li>
                <li>To remember your preferences (such as theme settings)</li>
                <li>To improve site performance and user experience</li>
                <li>To analyze how visitors use our website</li>
                <li>To provide relevant content and features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6 mt-4">
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, secure areas access, and remembering your login status. The website cannot function properly without these cookies.
                  </p>
                  <div className="mt-3 text-sm">
                    <span className="text-primary font-medium">Examples:</span>
                    <span className="text-muted-foreground"> Session cookies, authentication cookies</span>
                  </div>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Preference Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies allow our website to remember choices you make (such as your preferred language or theme) and provide enhanced, personalized features. They may also be used to provide services you have requested.
                  </p>
                  <div className="mt-3 text-sm">
                    <span className="text-primary font-medium">Examples:</span>
                    <span className="text-muted-foreground"> Theme preference (light/dark mode), language settings</span>
                  </div>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Analytics Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
                  </p>
                  <div className="mt-3 text-sm">
                    <span className="text-primary font-medium">Examples:</span>
                    <span className="text-muted-foreground"> Page views, visitor count, traffic sources</span>
                  </div>
                </div>

                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Marketing Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies may be set by our advertising partners to build a profile of your interests and show you relevant advertisements on other sites. They do not store personal information directly but are based on uniquely identifying your browser and internet device.
                  </p>
                  <div className="mt-3 text-sm">
                    <span className="text-primary font-medium">Examples:</span>
                    <span className="text-muted-foreground"> Retargeting cookies, social media tracking</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookie Duration</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies can be classified by how long they remain on your device:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period or until you delete them</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some cookies on our website are set by third-party services. These may include analytics providers, social media platforms, and advertising networks. We do not have control over these cookies, and their use is governed by the privacy policies of the respective third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences in several ways:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Browser Settings</h4>
                  <p className="text-muted-foreground text-sm">
                    Most web browsers allow you to control cookies through their settings. You can set your browser to block or alert you about cookies, or delete cookies that have already been set.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Browser-Specific Instructions</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• <strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                    <li>• <strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                    <li>• <strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                    <li>• <strong>Edge:</strong> Settings → Privacy, Search, and Services → Cookies</li>
                  </ul>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Opt-Out Tools</h4>
                  <p className="text-muted-foreground text-sm">
                    You can also opt out of certain third-party cookies using industry opt-out tools such as the Digital Advertising Alliance's opt-out page or the Network Advertising Initiative's opt-out page.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Impact of Disabling Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Please note that if you choose to block or delete cookies, some features of our website may not function properly. Essential cookies are required for the basic operation of the site, and disabling them may prevent you from using certain features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically for the latest information on our cookie practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

export default CookiePolicy;
