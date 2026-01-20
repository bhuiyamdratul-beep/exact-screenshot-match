import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useInView } from "@/hooks/useInView";
import { ArrowRight, Zap, RefreshCw, Database, Mail, ShoppingCart, Users, Play, Quote, Bot, Webhook, FileText, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const n8nCaseStudies = [
  {
    title: "E-Commerce Order Automation",
    category: "Retail & E-Commerce",
    description: "Automated the entire order processing pipeline for a growing e-commerce business, from order placement to fulfillment and customer notification.",
    challenge: "The client was manually processing 200+ orders daily, leading to delays and errors in inventory updates and customer communications.",
    solution: "Built an n8n workflow that automatically syncs orders from Shopify, updates inventory in real-time, generates shipping labels, and sends personalized order confirmations.",
    results: [
      "90% reduction in order processing time",
      "Zero inventory sync errors",
      "Automated customer notifications",
      "Saved 40+ hours per week",
    ],
    technologies: ["n8n", "Shopify", "Airtable", "SendGrid", "ShipStation"],
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial: {
      quote: "Dream It Developer transformed our operations. What used to take our team 8 hours now happens automatically in minutes. Our customers love the instant updates!",
      name: "Sarah Chen",
      role: "Operations Director",
      company: "StyleHub Fashion",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
  },
  {
    title: "Lead Qualification & CRM Sync",
    category: "Sales & Marketing",
    description: "Streamlined lead capture and qualification process by automating data enrichment and CRM synchronization across multiple platforms.",
    challenge: "Sales team was spending hours manually entering leads and researching companies, resulting in slow response times and lost opportunities.",
    solution: "Created an n8n automation that captures leads from multiple sources, enriches data with company information, scores leads, and syncs to HubSpot with proper segmentation.",
    results: [
      "Lead response time reduced from 2 hours to 5 minutes",
      "85% accurate lead scoring",
      "Unified lead data across all platforms",
      "30% increase in qualified leads",
    ],
    technologies: ["n8n", "HubSpot", "Clearbit", "Typeform", "Slack"],
    icon: Users,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial: {
      quote: "Our sales team can now focus on selling instead of data entry. The automated lead scoring has been a game-changer for prioritizing our outreach.",
      name: "Michael Rodriguez",
      role: "Sales Manager",
      company: "TechGrowth Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
  },
  {
    title: "Automated Reporting Dashboard",
    category: "Business Intelligence",
    description: "Built a comprehensive automated reporting system that aggregates data from multiple sources and delivers insights to stakeholders.",
    challenge: "Weekly reports required 8+ hours of manual data compilation from 6 different platforms, often with inconsistent formatting and delayed delivery.",
    solution: "Developed n8n workflows that automatically pull data from all sources, process and format reports, and deliver them via email and Slack on schedule.",
    results: [
      "Report generation reduced from 8 hours to 15 minutes",
      "Real-time data accuracy",
      "Automated distribution to 50+ stakeholders",
      "Custom report scheduling",
    ],
    technologies: ["n8n", "Google Sheets", "PostgreSQL", "Slack", "Gmail"],
    icon: Database,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial: {
      quote: "I used to dread Monday mornings preparing reports. Now they're automatically ready before I even get my coffee. This automation has been invaluable.",
      name: "Emily Watson",
      role: "Business Analyst",
      company: "DataDriven Corp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  },
  {
    title: "Customer Onboarding Automation",
    category: "Customer Success",
    description: "Transformed the customer onboarding experience with an automated workflow that guides new users through setup and training.",
    challenge: "Customer onboarding was inconsistent and time-consuming, with many customers dropping off before completing setup.",
    solution: "Built an n8n-powered onboarding sequence that triggers personalized emails, creates accounts, schedules training sessions, and tracks progress automatically.",
    results: [
      "Customer activation rate increased by 65%",
      "Onboarding time reduced by 75%",
      "100% consistent experience",
      "Automated progress tracking",
    ],
    technologies: ["n8n", "Intercom", "Calendly", "Notion", "Stripe"],
    icon: Mail,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial: {
      quote: "Our customer satisfaction scores jumped 40% after implementing the automated onboarding. Every customer now gets the same premium experience.",
      name: "David Kim",
      role: "Customer Success Lead",
      company: "SaaSPro Platform",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
  },
  {
    title: "Multi-Platform Content Syndication",
    category: "Content Marketing",
    description: "Automated content distribution across multiple social media platforms and content management systems for a media company.",
    challenge: "Marketing team was manually posting content to 8+ platforms, leading to inconsistent posting schedules and missed opportunities.",
    solution: "Created an n8n workflow that takes a single content piece, adapts it for each platform, schedules posts optimally, and tracks engagement across all channels.",
    results: [
      "Content reach increased by 200%",
      "Posting consistency improved to 100%",
      "20+ hours saved weekly",
      "Unified analytics dashboard",
    ],
    technologies: ["n8n", "Buffer", "WordPress", "LinkedIn API", "Twitter API"],
    icon: RefreshCw,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial: {
      quote: "We went from struggling to post twice a week to consistently publishing across all platforms daily. Our engagement has never been higher!",
      name: "Jessica Martinez",
      role: "Content Director",
      company: "MediaFlow Agency",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    },
  },
  {
    title: "Invoice & Payment Processing",
    category: "Finance & Accounting",
    description: "Automated the entire invoicing workflow from creation to payment reconciliation for a B2B services company.",
    challenge: "Finance team was manually creating invoices, sending reminders, and reconciling payments, leading to cash flow delays and accounting errors.",
    solution: "Built an n8n automation that generates invoices from project data, sends them automatically, follows up on overdue payments, and syncs with accounting software.",
    results: [
      "Invoice processing time reduced by 95%",
      "Payment collection improved by 40%",
      "Zero reconciliation errors",
      "Automated payment reminders",
    ],
    technologies: ["n8n", "QuickBooks", "Stripe", "Notion", "Slack"],
    icon: Zap,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial: {
      quote: "Cash flow improved dramatically once we automated our invoicing. Late payments dropped by 60% thanks to the automated reminder sequences.",
      name: "Robert Anderson",
      role: "CFO",
      company: "ConsultPro Services",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
  },
  {
    title: "AI-Powered Support Ticket Routing",
    category: "Customer Support",
    description: "Implemented intelligent ticket routing using AI classification to automatically assign support tickets to the right team members.",
    challenge: "Support tickets were manually triaged, causing delays and frequent misrouting that frustrated both customers and support staff.",
    solution: "Built an n8n workflow that uses AI to analyze incoming tickets, classify urgency and category, and automatically route to the appropriate specialist.",
    results: [
      "First response time reduced by 70%",
      "Ticket misrouting dropped to 2%",
      "Customer satisfaction up 35%",
      "Support team productivity doubled",
    ],
    technologies: ["n8n", "OpenAI", "Zendesk", "Slack", "PagerDuty"],
    icon: Bot,
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial: {
      quote: "The AI routing is incredibly accurate. Complex issues go straight to senior engineers while simple queries are handled instantly. It's like magic!",
      name: "Amanda Foster",
      role: "Support Team Lead",
      company: "CloudTech Solutions",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    },
  },
  {
    title: "Webhook-Based Event Processing",
    category: "Developer Tools",
    description: "Created a centralized webhook processing system that handles events from multiple third-party services and triggers appropriate actions.",
    challenge: "Developers were building custom integrations for each service, leading to maintenance nightmares and inconsistent error handling.",
    solution: "Developed a unified n8n webhook hub that receives events, validates payloads, transforms data, and triggers downstream workflows with proper error handling and logging.",
    results: [
      "Integration development time cut by 80%",
      "99.9% webhook processing reliability",
      "Centralized monitoring and logging",
      "Reusable integration patterns",
    ],
    technologies: ["n8n", "GitHub", "Stripe", "AWS SNS", "Datadog"],
    icon: Webhook,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial: {
      quote: "Our developers now focus on building features instead of maintaining integrations. The webhook hub handles everything reliably.",
      name: "Alex Thompson",
      role: "Engineering Manager",
      company: "DevOps Innovations",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
    },
  },
  {
    title: "Document Processing Pipeline",
    category: "Operations",
    description: "Automated document intake, OCR processing, data extraction, and filing for a legal services firm handling thousands of documents monthly.",
    challenge: "Staff spent countless hours manually processing incoming documents, extracting key information, and organizing files correctly.",
    solution: "Built an n8n pipeline that automatically receives documents, extracts text using OCR, identifies document types, extracts key data fields, and files everything in the correct locations.",
    results: [
      "Document processing time reduced by 90%",
      "Data extraction accuracy at 98%",
      "Automatic categorization and filing",
      "Full audit trail for compliance",
    ],
    technologies: ["n8n", "Google Vision AI", "DocuSign", "Box", "Airtable"],
    icon: FileText,
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial: {
      quote: "We process 10x more documents now with half the staff. The accuracy is better than manual processing, and we have complete audit trails for compliance.",
      name: "Jennifer Blake",
      role: "Operations Manager",
      company: "LegalEase Partners",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
    },
  },
  {
    title: "Appointment Scheduling Automation",
    category: "Healthcare",
    description: "Streamlined patient appointment scheduling with automated reminders, rescheduling workflows, and calendar synchronization for a multi-location clinic.",
    challenge: "No-show rates were high, staff spent hours on phone calls, and scheduling conflicts between locations were common.",
    solution: "Created an n8n system that handles online booking, sends personalized reminders via SMS and email, manages rescheduling requests, and syncs across all location calendars.",
    results: [
      "No-show rate reduced from 25% to 5%",
      "Staff phone time reduced by 60%",
      "Zero double-bookings",
      "Patient satisfaction up 45%",
    ],
    technologies: ["n8n", "Calendly", "Twilio", "Google Calendar", "Practice Fusion"],
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    testimonial: {
      quote: "Our front desk staff can now focus on patient care instead of playing phone tag. The automated reminders have practically eliminated no-shows.",
      name: "Dr. Lisa Chang",
      role: "Medical Director",
      company: "WellCare Clinics",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop",
    },
  },
];

const N8nPortfolio = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 });

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container-custom relative z-10">
          <div
            ref={headerRef}
            className={`text-center max-w-4xl mx-auto transition-all duration-700 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">n8n Automation Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Workflow <span className="text-gradient">Automation</span> Case Studies
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Discover how we've helped businesses automate their processes, save time, and scale operations with powerful n8n workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100+", label: "Workflows Built" },
              { value: "2500+", label: "Hours Saved Monthly" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "20+", label: "Industries Served" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-24">
            {n8nCaseStudies.map((study, index) => (
              <CaseStudySection key={study.title} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Ready to Automate Your Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how n8n automation can transform your workflows and save you countless hours every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const CaseStudySection = ({ study, index }: { study: typeof n8nCaseStudies[0]; index: number }) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [showVideo, setShowVideo] = useState(false);
  const isEven = index % 2 === 0;
  const Icon = study.icon;

  return (
    <motion.div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 items-start ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transition: "all 0.7s ease" }}
    >
      {/* Image/Video */}
      <div className={`${!isEven ? "lg:order-2" : ""}`}>
        <div className="relative rounded-2xl overflow-hidden group">
          {showVideo ? (
            <div className="aspect-video">
              <iframe
                src={study.videoUrl}
                title={study.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <>
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <button
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center group/play"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover/play:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  {study.category}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Testimonial Card */}
        <div className="mt-6 bg-card border border-border rounded-xl p-6">
          <Quote className="w-8 h-8 text-primary/30 mb-3" />
          <p className="text-muted-foreground italic mb-4 leading-relaxed">
            "{study.testimonial.quote}"
          </p>
          <div className="flex items-center gap-3">
            <img
              src={study.testimonial.avatar}
              alt={study.testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-foreground">{study.testimonial.name}</p>
              <p className="text-sm text-muted-foreground">
                {study.testimonial.role}, {study.testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${!isEven ? "lg:order-1" : ""}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">{study.title}</h3>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {study.description}
        </p>

        {/* Challenge */}
        <div className="mb-4">
          <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
          <p className="text-muted-foreground text-sm">{study.challenge}</p>
        </div>

        {/* Solution */}
        <div className="mb-4">
          <h4 className="font-semibold text-foreground mb-2">Our Solution</h4>
          <p className="text-muted-foreground text-sm">{study.solution}</p>
        </div>

        {/* Results */}
        <div className="mb-6">
          <h4 className="font-semibold text-foreground mb-2">Results</h4>
          <div className="grid grid-cols-2 gap-2">
            {study.results.map((result) => (
              <div key={result} className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {study.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default N8nPortfolio;