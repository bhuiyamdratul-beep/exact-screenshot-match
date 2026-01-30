import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/admin/ProtectedRoute";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import Leads from "./pages/admin/Leads";
import MessagesAdmin from "./pages/admin/MessagesAdmin";
import BlogPosts from "./pages/admin/BlogPosts";
import PortfolioAdmin from "./pages/admin/PortfolioAdmin";
import ServicesAdmin from "./pages/admin/ServicesAdmin";
import TestimonialsAdmin from "./pages/admin/TestimonialsAdmin";
import FAQsAdmin from "./pages/admin/FAQsAdmin";
import UsersAdmin from "./pages/admin/UsersAdmin";
import NewsletterAdmin from "./pages/admin/NewsletterAdmin";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <FloatingWhatsApp />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/login" element={<Login />} />
              {/* Admin Routes */}
              <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/admin/leads" element={<ProtectedRoute><Leads /></ProtectedRoute>} />
              <Route path="/admin/messages" element={<ProtectedRoute><MessagesAdmin /></ProtectedRoute>} />
              <Route path="/admin/blog" element={<ProtectedRoute><BlogPosts /></ProtectedRoute>} />
              <Route path="/admin/portfolio" element={<ProtectedRoute><PortfolioAdmin /></ProtectedRoute>} />
              <Route path="/admin/services" element={<ProtectedRoute><ServicesAdmin /></ProtectedRoute>} />
              <Route path="/admin/testimonials" element={<ProtectedRoute><TestimonialsAdmin /></ProtectedRoute>} />
              <Route path="/admin/faqs" element={<ProtectedRoute><FAQsAdmin /></ProtectedRoute>} />
              <Route path="/admin/users" element={<ProtectedRoute><UsersAdmin /></ProtectedRoute>} />
              <Route path="/admin/newsletter" element={<ProtectedRoute><NewsletterAdmin /></ProtectedRoute>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
