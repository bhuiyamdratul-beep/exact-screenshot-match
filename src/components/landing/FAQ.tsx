import { siteConfig } from "@/config/siteConfig";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Have a question? Check out the FAQ
            </h2>
            <p className="text-muted-foreground mb-8">
              Find answers to commonly asked questions about our services, processes, and how we can help your business grow.
            </p>
            
            {/* Decorative Arrow */}
            <div className="hidden lg:block">
              <svg
                className="w-32 h-32 text-primary"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 20 Q 50 10, 60 40 Q 70 70, 80 60"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M75 55 L 82 62 L 72 65"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-3">
              {siteConfig.faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="card-dark px-6 border-none data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 data-[state=open]:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
