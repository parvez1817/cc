import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Users, Clock, ArrowRight } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold mb-6">
            <span className="bg-gradient-to-r from-saffron via-gold to-indigo bg-clip-text text-transparent">
              Ready to Travel
            </span>
            <br />
            <span className="text-foreground">Through Time?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join thousands of cultural explorers, students, and educators in experiencing 
            India's magnificent heritage through cutting-edge VR technology.
          </p>
          
          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 font-semibold group"
            >
              <Download className="mr-2 group-hover:animate-bounce" size={20} />
              Download the App
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              variant="vr" 
              size="lg"
              className="text-lg px-8 py-4 font-semibold"
            >
              Try in VR Now
            </Button>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8 sm:p-12">
            <div className="text-center mb-8">
              <Users className="w-12 h-12 text-peacock mx-auto mb-4" />
              <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground mb-4">
                For Schools & Museums
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Transform education and cultural experiences with our institutional partnerships. 
                Get custom content, training, and dedicated support.
              </p>
              <Button variant="cultural" size="lg" className="font-semibold">
                Partner with Us
              </Button>
            </div>

            {/* Features for Institutions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-saffron/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-saffron" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Quick Setup</h4>
                <p className="text-muted-foreground text-sm">Ready to use in minutes with comprehensive training materials</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-indigo/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-indigo" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Group Sessions</h4>
                <p className="text-muted-foreground text-sm">Support for up to 30 students simultaneously</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-peacock/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Download className="w-8 h-8 text-peacock" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Custom Content</h4>
                <p className="text-muted-foreground text-sm">Tailored experiences for your curriculum needs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Questions? We're here to help you embark on your cultural journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:hello@bharatvr.com" 
              className="text-saffron hover:text-saffron-light transition-colors font-medium"
            >
              culturalchronicles@gmail.com
            </a>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <a 
              href="tel:+911234567890" 
              className="text-saffron hover:text-saffron-light transition-colors font-medium"
            >
              +91 9500785279
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;