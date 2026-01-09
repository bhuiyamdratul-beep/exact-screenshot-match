// =============================================
// SITE CONFIGURATION - CUSTOMIZE YOUR BUSINESS HERE
// =============================================
// Change the values below to match your actual business information.
// All sections of the website will update automatically.

export const siteConfig = {
  // Company Information
  company: {
    name: "Dream It Developer",
    tagline: "Transforming dreams into digital reality.",
    description: "We turn your dreams into reality",
  },

  // Hero Section
  hero: {
    title: {
      line1: "Dream It.",
      line2: "Build It.",
      line3: "Deploy It.",
    },
    subtitle: "Transforming your ideas into powerful digital solutions",
    floatingCards: [
      { icon: "💻", label: "Web Development" },
      { icon: "📱", label: "Mobile Apps" },
      { icon: "🚀", label: "Cloud Solutions" },
    ],
  },

  // About Section
  about: {
    title: "Who We Are",
    paragraphs: [
      "Dream It Developer is a passionate team of developers dedicated to creating exceptional digital experiences. We combine creativity with technical expertise to bring your vision to life.",
      "Our mission is to help businesses and individuals achieve their goals through innovative technology solutions that are both beautiful and functional.",
    ],
    stats: [
      { value: "100+", label: "Projects Completed" },
      { value: "50+", label: "Happy Clients" },
      { value: "5+", label: "Years Experience" },
    ],
    expertise: [
      { icon: "⚡", title: "Frontend", description: "React, Vue, Angular, Next.js" },
      { icon: "🔧", title: "Backend", description: "Node.js, Python, PHP, Java" },
      { icon: "📱", title: "Mobile", description: "React Native, Flutter, Swift" },
      { icon: "☁️", title: "Cloud", description: "AWS, Azure, GCP, Docker" },
    ],
  },

  // Services Section
  services: [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Integration"],
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["iOS Development", "Android Development", "Cross-platform Apps"],
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that provide exceptional user experiences.",
      features: ["User Research", "Wireframing", "Prototyping"],
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for your applications.",
      features: ["Cloud Migration", "DevOps Setup", "CI/CD Pipelines"],
    },
    {
      icon: "🔒",
      title: "Security",
      description: "Comprehensive security audits and implementation to protect your applications.",
      features: ["Security Audits", "Penetration Testing", "Compliance"],
    },
    {
      icon: "🔄",
      title: "Maintenance & Support",
      description: "Ongoing maintenance and support to keep your applications running smoothly.",
      features: ["Bug Fixes", "Performance Optimization", "Feature Updates"],
    },
  ],

  // Portfolio Section
  portfolio: [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication",
    },
    {
      title: "Healthcare Dashboard",
      description: "Real-time patient monitoring and analytics dashboard",
    },
    {
      title: "Learning Management System",
      description: "Comprehensive LMS with video streaming and assessments",
    },
    {
      title: "Social Media Platform",
      description: "Modern social networking platform with real-time features",
    },
    {
      title: "IoT Dashboard",
      description: "Connected device management and monitoring system",
    },
  ],

  // Contact Section
  contact: {
    title: "Contact Information",
    subtitle: "Ready to bring your ideas to life? Get in touch with us today!",
    email: "hello@dreamitdeveloper.com",
    phone: "+1 (555) 123-4567",
    address: "123 Developer Street, Tech City, TC 12345",
    socialLinks: [
      { name: "LinkedIn", url: "#" },
      { name: "GitHub", url: "#" },
      { name: "Twitter", url: "#" },
      { name: "Instagram", url: "#" },
    ],
  },

  // Footer
  footer: {
    quickLinks: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Portfolio", href: "#portfolio" },
    ],
    serviceLinks: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Development", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Cloud Solutions", href: "#services" },
    ],
    legalLinks: [
      { name: "Contact Us", href: "#contact" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
    copyright: `© ${new Date().getFullYear()} Dream It Developer. All rights reserved.`,
  },

  // Navigation
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ],
};
