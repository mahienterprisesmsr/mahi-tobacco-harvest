import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-tobacco-field.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Tobacco field at sunrise with farmers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-tobacco-brown/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-cream leading-tight mb-6">
            Premium Tobacco,<br />
            <span className="text-golden-amber">Cultivated with Care,</span><br />
            Delivered Worldwide
          </h1>
          
          <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl leading-relaxed">
            Mahi Enterprises sources the finest tobacco directly from family farms, 
            ensuring unwavering quality and sustainable practices for international 
            businesses seeking premium tobacco varieties.
          </p>

          {/* Key Features */}
          <div className="flex flex-col md:flex-row gap-6 mb-10">
            <div className="flex items-center space-x-3">
              <CheckCircle className="text-golden-amber w-6 h-6" />
              <span className="text-cream font-medium">Direct Farm Partnerships</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="text-golden-amber w-6 h-6" />
              <span className="text-cream font-medium">International Distribution</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="text-golden-amber w-6 h-6" />
              <span className="text-cream font-medium">Quality Guaranteed</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-accent text-primary font-semibold hover:shadow-glow transition-all duration-300 group"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Tobacco Varieties
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-cream text-cream hover:bg-cream hover:text-charcoal transition-all duration-300"
            >
              Learn Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;