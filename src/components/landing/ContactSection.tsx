import React, { useState } from 'react';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, Phone, Mail, Globe, MessageSquare, Send } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name too long'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email too long'),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message too long'),
});

const RATE_LIMIT_KEY = 'contact_submissions';
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
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
  const [isRobot, setIsRobot] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Honeypot check
    if (honeypot) {
      toast({ title: 'Message sent!', description: 'Thank you for reaching out.' });
      return;
    }

    // Robot checkbox check
    if (!isRobot) {
      setErrors({ robot: 'Please confirm you are not a robot' });
      return;
    }

    // Rate limit check
    if (!checkRateLimit()) {
      toast({
        title: 'Too many submissions',
        description: 'Please wait a few minutes before sending another message.',
        variant: 'destructive',
      });
      return;
    }

    // Validate form
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: result.data.name,
        email: result.data.email,
        message: result.data.message,
      });

      if (error) throw error;

      recordSubmission();
      setFormData({ name: '', email: '', message: '' });
      setIsRobot(false);
      toast({ title: 'Message sent successfully!', description: 'We will get back to you soon.' });
    } catch (error: any) {
      toast({
        title: 'Failed to send message',
        description: error.message || 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0f]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Online Presence?
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Take the first step towards achieving digital success and elevating your online presence with Dream It Developer. 
            Let us help you build powerful, results-driven solutions tailored to your business needs.
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-6xl mx-auto bg-[#14141b] rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Form Section */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot - hidden from users */}
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
                    type="email"
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
                  className="bg-white border-0 text-gray-900 placeholder:text-gray-500 min-h-[140px] rounded-lg resize-none"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Custom reCAPTCHA style checkbox */}
              <div className="bg-[#1e1e28] border border-gray-700 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="robot-check"
                    checked={isRobot}
                    onCheckedChange={(checked) => setIsRobot(checked as boolean)}
                    className="h-6 w-6 border-2 border-gray-500 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                  />
                  <label htmlFor="robot-check" className="text-gray-300 cursor-pointer">
                    I'm not a robot
                  </label>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">reCAPTCHA</div>
                  <div className="text-[10px] text-gray-600">Privacy · Terms</div>
                </div>
              </div>
              {errors.robot && <p className="text-red-500 text-sm">{errors.robot}</p>}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-lg text-lg font-medium flex items-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Illustration Section */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Background elements */}
              <div className="absolute top-0 right-0 w-32 h-8 bg-gray-700/50 rounded-lg"></div>
              <div className="absolute top-4 right-4 w-28 h-6 bg-gray-600/30 rounded"></div>
              
              {/* Phone icon bubble */}
              <div className="absolute top-8 left-1/4 w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>

              {/* Main browser window */}
              <div className="bg-[#1e1e28] rounded-xl p-4 mt-16 border border-gray-700/50">
                <div className="flex gap-1.5 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                {/* People illustration placeholder */}
                <div className="flex items-end justify-center gap-4 py-8">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-300 rounded-full mb-2"></div>
                    <div className="w-20 h-24 bg-gradient-to-b from-rose-400 to-rose-500 rounded-t-full"></div>
                  </div>
                  <div className="flex flex-col items-center -mt-4">
                    <div className="w-18 h-18 bg-gradient-to-br from-amber-300 to-amber-400 rounded-full mb-2 w-[72px] h-[72px]"></div>
                    <div className="w-24 h-28 bg-gradient-to-b from-amber-200 to-amber-300 rounded-t-full"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-cyan-300 rounded-full mb-2"></div>
                    <div className="w-20 h-24 bg-gradient-to-b from-cyan-400 to-cyan-500 rounded-t-full"></div>
                  </div>
                </div>
              </div>

              {/* Globe icon */}
              <div className="absolute bottom-20 -left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-rose-500" />
              </div>

              {/* Mail icon */}
              <div className="absolute bottom-24 -right-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <Mail className="w-7 h-7 text-gray-700" />
              </div>

              {/* Chat bubble */}
              <div className="absolute top-24 -right-8 bg-rose-400 text-white px-4 py-2 rounded-xl text-sm">
                Hi there! 👋
              </div>
            </div>
          </div>

          {/* Direct Contact Options */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/+880186636695"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#0088cc] hover:bg-[#0077b5] text-white px-6 py-3 rounded-xl transition-colors"
            >
              <Send className="w-5 h-5" />
              <span className="font-medium">Chat on Telegram</span>
            </a>
            <a
              href="https://wa.me/8801866366695?text=Hi%20I%20need%20help"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-xl transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="font-medium">Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
