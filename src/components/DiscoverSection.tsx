import React from 'react';
import { Clock, MapPin, BookOpen, Music } from 'lucide-react';
import culturalIcons from '@/assets/cultural-icons.jpg';
import useScrollAnimation from '@/hooks/use-scroll-animation';

const DiscoverSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-saffron" />,
      title: "Explore Monuments",
      description: "Walk through ancient temples, forts, and palaces with authentic reconstructions"
    },
    {
      icon: <Music className="w-8 h-8 text-indigo" />,
      title: "Interact with Traditions",
      description: "Experience classical dances, music, and art forms in their original settings"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-peacock" />,
      title: "Learn Through Stories",
      description: "Immersive narratives bring historical events and legends to life"
    },
    {
      icon: <Clock className="w-8 h-8 text-gold" />,
      title: "Cultural Festivals in VR",
      description: "Participate in Diwali, Holi, and regional celebrations across India"
    }
  ];

  return (
    <section id="discover" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div ref={ref} className={`container mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-on-scroll' : ''}`}>
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-6">
            <span className="bg-gradient-to-r from-saffron to-indigo bg-clip-text text-transparent">
              Choose Your Era.
            </span>
            <br />
            <span className="text-foreground">Walk Through History.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Travel through time and experience India's rich cultural heritage across different periods
          </p>
        </div>

        {/* Timeline Visual */}
        <div className="mb-16">
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-saffron to-gold rounded-full flex items-center justify-center mb-4 shadow-saffron">
                <span className="text-foreground font-bold text-lg">🔥</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground">Ancient</span>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-saffron via-indigo to-peacock rounded"></div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo to-peacock rounded-full flex items-center justify-center mb-4 shadow-cultural">
                <span className="text-foreground font-bold text-lg">🕯</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground">Medieval</span>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-indigo via-peacock to-maroon rounded"></div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-peacock to-maroon rounded-full flex items-center justify-center mb-4 shadow-cultural">
                <span className="text-foreground font-bold text-lg">🔦</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground">Modern</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-saffron/50 transition-all duration-300 hover:shadow-saffron hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-background/50 rounded-full group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Icons */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <img 
              src={culturalIcons} 
              alt="Cultural Heritage Icons" 
              className="w-full h-48 object-cover rounded-xl shadow-cultural opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;