import React from 'react';
import { Button } from '@/components/ui/button';
import { Gamepad2, GraduationCap, Users, Star } from 'lucide-react';

const DualPurposeSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-6">
            <span className="bg-gradient-to-r from-peacock to-saffron bg-clip-text text-transparent">
              Where Culture Meets Curiosity
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience India's heritage through two distinct but complementary paths
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Entertainment Column */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Gamepad2 className="w-8 h-8 text-saffron mr-3" />
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground">
                  Entertainment
                </h3>
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                Immerse yourself in India's vibrant culture through interactive experiences
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-card/30 rounded-lg border border-saffron/20">
                <Star className="w-6 h-6 text-saffron mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Cultural Tourism in VR</h4>
                  <p className="text-muted-foreground">Visit iconic landmarks and hidden gems from the comfort of your home</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-card/30 rounded-lg border border-saffron/20">
                <Star className="w-6 h-6 text-saffron mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Gamified Interactions</h4>
                  <p className="text-muted-foreground">Solve puzzles, complete quests, and unlock achievements while exploring</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-card/30 rounded-lg border border-saffron/20">
                <Star className="w-6 h-6 text-saffron mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Role-Playing Adventures</h4>
                  <p className="text-muted-foreground">Step into the shoes of historical characters and live their stories</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="w-full lg:w-auto">
              Start Adventure
            </Button>
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <GraduationCap className="w-8 h-8 text-indigo mr-3" />
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground">
                  Education
                </h3>
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                Learn about India's rich heritage through structured, immersive lessons
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-card/30 rounded-lg border border-indigo/20">
                <Users className="w-6 h-6 text-indigo mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Guided Narration</h4>
                  <p className="text-muted-foreground">Expert historians guide you through each experience with detailed explanations</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-card/30 rounded-lg border border-indigo/20">
                <Users className="w-6 h-6 text-indigo mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Interactive Facts</h4>
                  <p className="text-muted-foreground">Pop-up information, timelines, and contextual details enhance learning</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-card/30 rounded-lg border border-indigo/20">
                <Users className="w-6 h-6 text-indigo mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Classroom Integration</h4>
                  <p className="text-muted-foreground">Seamlessly integrate VR lessons into existing curricula and lesson plans</p>
                </div>
              </div>
            </div>

            <Button variant="vr" size="lg" className="w-full lg:w-auto">
              Explore Learning
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualPurposeSection;