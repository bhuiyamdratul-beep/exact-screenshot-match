import { siteConfig } from "@/config/siteConfig";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      
      {/* Decorative ellipse */}
      <div className="absolute inset-x-0 bottom-0 h-[600px] pointer-events-none">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[150%] h-full border-2 border-primary/10 rounded-[100%]" />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Our Services</h2>
        </motion.div>

        {/* Services Grid - 3x2 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group card-dark card-glow p-8 text-center hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div 
                className="w-16 h-16 mb-4 mx-auto flex items-center justify-center"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link 
                to="/services"
                className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Decorative stars */}
        <motion.div 
          className="flex justify-center gap-2 mb-8"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span className="text-primary text-2xl">✦</span>
          <span className="text-primary text-2xl">✦</span>
          <span className="text-primary text-2xl">✦</span>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 hover:scale-105 transition-transform"
          >
            <Link to="/#contact" className="inline-flex items-center gap-2">
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
