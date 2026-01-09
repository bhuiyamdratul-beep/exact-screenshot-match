import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How AI is Transforming Web Development in 2026",
    excerpt: "Discover how artificial intelligence is revolutionizing the way we build and design websites, from automated coding to intelligent user experiences.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    category: "AI & Technology",
    author: "Yeasin Arafat Mollik",
    date: "January 8, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Sales Funnel Optimization",
    excerpt: "Learn the proven strategies to optimize your sales funnels and increase conversion rates by up to 300% with these expert techniques.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    category: "Marketing",
    author: "Yeasin Arafat Mollik",
    date: "January 5, 2026",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Mobile App Development Trends to Watch",
    excerpt: "Stay ahead of the curve with these emerging mobile app development trends that will dominate the industry this year.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    category: "Mobile Development",
    author: "Yeasin Arafat Mollik",
    date: "January 3, 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Why GoHighLevel is the Best CRM for Agencies",
    excerpt: "Explore the features that make GoHighLevel the go-to CRM solution for marketing agencies and how it can streamline your workflows.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    category: "CRM & Tools",
    author: "Yeasin Arafat Mollik",
    date: "December 28, 2025",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "UI/UX Design Principles for Higher Conversions",
    excerpt: "Master the essential UI/UX design principles that lead to better user engagement and higher conversion rates for your business.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    category: "Design",
    author: "Yeasin Arafat Mollik",
    date: "December 25, 2025",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Building Scalable E-commerce Platforms",
    excerpt: "A comprehensive guide to building e-commerce platforms that can handle growth and provide seamless shopping experiences.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    category: "E-commerce",
    author: "Yeasin Arafat Mollik",
    date: "December 20, 2025",
    readTime: "9 min read",
  },
];

const categories = ["All", "AI & Technology", "Marketing", "Mobile Development", "CRM & Tools", "Design", "E-commerce"];

const Blog = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Insights, tips, and strategies to help you grow your digital presence and stay ahead in the ever-evolving tech landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-custom">
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link to="#" className="group block">
              <div className="grid lg:grid-cols-2 gap-8 items-center card-dark p-6 rounded-3xl overflow-hidden">
                <div className="overflow-hidden rounded-2xl">
                  <motion.img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-[300px] object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                    {blogPosts[0].category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <motion.h2 
            className="text-2xl font-bold mb-8 text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Latest Articles
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                className="group card-dark rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link to="#">
                  <div className="overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <motion.div 
            className="card-dark p-12 text-center max-w-3xl mx-auto rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest articles, tips, and insights delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;