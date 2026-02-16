import React, { useState } from 'react';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, Globe, Facebook, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface SocialLink {
  name: string;
  icon?: React.ReactNode;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    icon: <Facebook className="w-6 h-6" />,
    url: "https://www.facebook.com/share/1LKPPHaruu/",
  },
  {
    name: "GitHub",
    icon: <Github className="w-6 h-6" />,
    url: "https://github.com/bhuiyamdratul-beep",
  },
  {
    name: "Upwork",
    icon: <span className="text-sm font-bold">Up</span>,
    url: "https://www.upwork.com/freelancers/mdahoshanhasanr?mp_source=share",
  },
  {
    name: "Fiverr",
    icon: <span className="text-sm font-bold">Fi</span>,
    url: "https://www.fiverr.com/s/yvQp2D0",
  },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name too long'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email too long'),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message too long'),
});

const RATE_LIMIT_KEY = 'contact_submissions';
const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const MAX_SUBMISSIONS = 3;

const checkRateLimit = (): boolean => {
  const stored = localStorage.getItem(RATE_LIMIT_KEY);
  const submissions: number[] = stored ? JSON.parse(stored) : [];
  const now = Date.now();
  const recentSubmissions = submissions.filter(time => now - time < RATE_LIMIT_WINDOW);
  return recentSubmissions.length < MAX_SUBMISSIONS;
};

const recordSubmission = () => {
  const stored = localStorage.getItem(RATE_LIMIT_KEY);
  const submissions: number[] = stored ? JSON.parse(stored) : [];
  const now = Date.now();
  const recentSubmissions = submissions.filter(time => now - time < RATE_LIMIT_WINDOW);
  recentSubmissions.push(now);
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions));
};

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (honeypot) {
      toast({ title: 'Message sent!', description: 'Thank you for reaching out.' });
      return;
    }

    if (!checkRateLimit()) {
      toast({
        title: 'Too many submissions',
        description: 'Please wait a few minutes before sending another message.',
        variant: 'destructive',
      });
      return;
    }

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    recordSubmission();

    const whatsappMessage = `Hi, I'm ${result.data.name}.%0AEmail: ${encodeURIComponent(result.data.email)}%0A%0A${encodeURIComponent(result.data.message)}`;
    const whatsappUrl = `https://wa.me/8801866366695?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#0a0a0f' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Ready to Elevate Your Online Presence?
          </h2>
          <p className="text-[#8a8a9a] max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Take the first step towards achieving digital success and elevating your online presence with Dream It Developer. 
            Let us help you build powerful, results-driven solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div 
          className="max-w-5xl mx-auto rounded-3xl p-6 md:p-10 border border-[#1e1e2e]"
          style={{ backgroundColor: '#111118' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Form Section */}
            <div className="flex-1">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white border-0 text-gray-900 placeholder:text-gray-500 h-12 rounded-lg"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white border-0 text-gray-900 placeholder:text-gray-500 h-12 rounded-lg"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white border-0 text-gray-900 placeholder:text-gray-500 min-h-[120px] rounded-lg resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-5 rounded-lg text-base font-medium flex items-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Illustration Section */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Phone icon bubble */}
                <div className="absolute -top-2 left-1/3 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-teal-500/30">
                  <Phone className="w-5 h-5 text-white" />
                </div>

                {/* Main browser window */}
                <div className="bg-[#1a1a24] rounded-xl p-4 mt-8 border border-[#2a2a3a]">
                  <div className="flex gap-1.5 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  
                  {/* People illustration */}
                  <div className="flex items-end justify-center gap-3 py-6">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-300 rounded-full mb-1.5"></div>
                      <div className="w-16 h-20 bg-gradient-to-b from-rose-400 to-rose-500 rounded-t-full"></div>
                    </div>
                    <div className="flex flex-col items-center -mt-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-300 to-amber-400 rounded-full mb-1.5"></div>
                      <div className="w-20 h-24 bg-gradient-to-b from-teal-400 to-teal-500 rounded-t-full"></div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-cyan-300 rounded-full mb-1.5"></div>
                      <div className="w-16 h-20 bg-gradient-to-b from-red-400 to-red-500 rounded-t-full"></div>
                    </div>
                  </div>
                </div>

                {/* Globe icon */}
                <div className="absolute bottom-16 -left-4 w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Globe className="w-5 h-5 text-rose-500" />
                </div>

                {/* Mail icon */}
                <div className="absolute bottom-20 -right-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Mail className="w-6 h-6 text-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Follow us on social media */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Follow us on social media
          </h3>
          <div className="flex justify-center gap-5 flex-wrap">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center text-[#8a8a9a] hover:text-primary transition-all duration-300 border border-[#2a2a3a] hover:border-primary/50"
                style={{ backgroundColor: '#111118' }}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Email Bar */}
        <motion.div 
          className="max-w-3xl mx-auto mt-14 rounded-2xl px-6 py-5 flex items-center justify-center gap-3 border border-[#1e1e2e]"
          style={{ backgroundColor: '#151520' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="text-2xl">📧</span>
          <span className="text-white font-medium text-sm md:text-base">Send us a Email here:</span>
          <a 
            href="mailto:info@dreamitdeveloper.com" 
            className="text-primary hover:text-primary/80 font-medium text-sm md:text-base transition-colors"
          >
            info@dreamitdeveloper.com
          </a>
        </motion.div>

        {/* Book a consultation */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Or book a free consultation now:
          </h3>
          <p className="text-[#8a8a9a] max-w-2xl mx-auto mb-2">
            Secure your spot within the next 10 minutes by selecting your date and time.
          </p>
          <p className="text-[#6a6a7a] max-w-2xl mx-auto mb-10 text-sm">
            We can't grow your business without first getting to know you. Let's discuss your project—book your call now. Talk soon! 🤙
          </p>

          {/* Calendly-style booking card */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row">
              {/* Left side - Brand info */}
              <div className="md:w-2/5 p-8 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                  <span className="text-white text-2xl font-bold">D</span>
                </div>
                <p className="text-gray-500 text-sm mb-1">Dream It Developer</p>
                <h4 className="text-xl font-bold text-gray-900 mb-3">30 Minute Meeting</h4>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeWidth="2" d="M12 6v6l4 2" />
                  </svg>
                  30 min
                </div>
              </div>

              {/* Right side - CTA */}
              <div className="md:w-3/5 p-8 flex flex-col items-center justify-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Select a Date & Time</h4>
                <p className="text-gray-500 text-sm mb-6">Click below to schedule your free consultation call.</p>
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                  <a
                    href="https://wa.me/8801866366695?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-xl transition-colors font-medium text-sm"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/+8801866366695"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0088cc] hover:bg-[#0077b5] text-white px-5 py-3 rounded-xl transition-colors font-medium text-sm"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
