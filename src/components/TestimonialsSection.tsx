import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "History Teacher",
      school: "Modern School, Delhi",
      quote: "My students were completely mesmerized! The VR experience made the Mughal era come alive in ways textbooks never could. Engagement levels have skyrocketed.",
      rating: 5,
      avatar: "👩‍🏫"
    },
    {
      name: "Rahul Krishnan",
      role: "Student",
      school: "Class 10, Chennai",
      quote: "I felt like I was actually walking through the Meenakshi Temple during its golden age. This is the coolest way to learn history ever!",
      rating: 5,
      avatar: "👨‍🎓"
    },
    {
      name: "Sarah Johnson",
      role: "Travel Enthusiast",
      school: "Cultural Explorer",
      quote: "As someone planning to visit India, this VR experience helped me understand the cultural significance of each monument. Absolutely breathtaking!",
      rating: 5,
      avatar: "🧳"
    },
    {
      name: "Prof. Rajesh Gupta",
      role: "Museum Director",
      school: "National Museum, Mumbai",
      quote: "We've integrated Bharat VR into our exhibitions. Visitors now spend 3x more time learning about Indian heritage. Revolutionary technology!",
      rating: 5,
      avatar: "🏛️"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-background via-card/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-6">
            <span className="bg-gradient-to-r from-maroon to-gold bg-clip-text text-transparent">
              Stories from Our
            </span>
            <br />
            <span className="text-foreground">Cultural Explorers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how students, educators, and cultural enthusiasts are experiencing India's heritage like never before
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-saffron/50 transition-all duration-300 hover:shadow-saffron hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-saffron/60" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-saffron/20 to-indigo/20 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-saffron text-sm font-medium">{testimonial.role}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl sm:text-4xl font-bold text-saffron mb-2">10,000+</div>
            <div className="text-muted-foreground">Students Engaged</div>
          </div>
          <div className="p-6">
            <div className="text-3xl sm:text-4xl font-bold text-indigo mb-2">500+</div>
            <div className="text-muted-foreground">Schools & Museums</div>
          </div>
          <div className="p-6">
            <div className="text-3xl sm:text-4xl font-bold text-peacock mb-2">50+</div>
            <div className="text-muted-foreground">Heritage Sites</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;