import { useInView } from "@/hooks/useInView";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Dream It Developer transformed our online presence completely. Their team delivered a stunning website that exceeded our expectations and boosted our conversions by 150%.",
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthLab",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Working with this team was an absolute pleasure. They understood our vision perfectly and delivered a high-quality app that our users love. Highly recommended!",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, BrandCo",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The attention to detail and professionalism shown by Dream It Developer is unmatched. They delivered our project on time and the results speak for themselves.",
  },
  {
    name: "David Thompson",
    role: "CTO, InnovateTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Exceptional technical expertise combined with creative design. Our e-commerce platform has never performed better. A truly professional team!",
  },
];

const Testimonials = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from businesses we have helped grow and succeed in the digital world.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`card-dark p-6 transition-all duration-500 hover:border-primary/50 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
