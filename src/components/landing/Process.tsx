import { siteConfig } from "@/config/siteConfig";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Process = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      {/* Decorative circles */}
      <motion.div 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-24 border-2 border-primary/20 rounded-full -ml-12"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-24 border-2 border-primary/20 rounded-full -mr-12"
        animate={{ scale: [1, 1.1, 1], rotate: [360, 180, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Our Work Process
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.process.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <motion.div 
                className="card-dark card-glow p-6 h-full"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Step number with title */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground flex items-center justify-center text-lg font-bold shadow-lg shadow-primary/25"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step.step}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
              
              {/* Arrow between cards */}
              {index < siteConfig.process.length - 1 && (
                <motion.div 
                  className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-primary"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.15 }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
