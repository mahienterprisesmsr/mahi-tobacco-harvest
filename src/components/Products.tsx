import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Leaf, Globe } from 'lucide-react';
import tobaccoVarietiesImage from '@/assets/tobacco-varieties.jpg';

const Products = () => {
  const tobaccoTypes = [
    {
      name: "North Virginia",
      image: tobaccoVarietiesImage,
      description: "Premium bright leaf tobacco with a smooth, mellow flavor profile. Known for its golden color and excellent burning characteristics.",
      characteristics: ["Smooth & Mellow", "Golden Color", "Low Nicotine"],
      grade: "Premium Grade A",
      moisture: "12-14%",
      origin: "Virginia, USA",
      uses: ["Cigarettes", "Pipe Tobacco", "Blending"]
    },
    {
      name: "Flue-Cured Virginia",
      image: tobaccoVarietiesImage,
      description: "Heat-cured tobacco with bright golden leaves and a distinctive sweet aroma. Perfect for premium cigarette production.",
      characteristics: ["Sweet Aroma", "Bright Golden", "Fast Burning"],
      grade: "Export Quality",
      moisture: "11-13%",
      origin: "Virginia Highlands",
      uses: ["Premium Cigarettes", "Export Blends"]
    },
    {
      name: "Bidi Tobacco",
      image: tobaccoVarietiesImage,
      description: "Traditional Indian tobacco variety with robust flavor and strong nicotine content. Specially cultivated for bidi production.",
      characteristics: ["Robust Flavor", "High Nicotine", "Traditional"],
      grade: "Bidi Grade",
      moisture: "14-16%",
      origin: "Andhra Pradesh, India",
      uses: ["Bidi Production", "Traditional Smoking"]
    },
    {
      name: "Burley",
      image: tobaccoVarietiesImage,
      description: "Air-cured tobacco with rich, full-bodied flavor and excellent blending properties. Essential for many tobacco blends.",
      characteristics: ["Full-Bodied", "Rich Flavor", "Air-Cured"],
      grade: "Premium",
      moisture: "13-15%",
      origin: "Kentucky, USA",
      uses: ["Cigarette Blends", "Pipe Tobacco", "Chewing Tobacco"]
    },
    {
      name: "Rustica",
      image: tobaccoVarietiesImage,
      description: "Wild tobacco variety with intense flavor and high nicotine content. Used for traditional and ceremonial purposes.",
      characteristics: ["Intense Flavor", "Very High Nicotine", "Wild Variety"],
      grade: "Traditional",
      moisture: "15-17%",
      origin: "South America",
      uses: ["Traditional Smoking", "Ceremonial Use"]
    },
    {
      name: "Oriental",
      image: tobaccoVarietiesImage,
      description: "Sun-cured tobacco with aromatic, spicy flavor and distinctive fragrance. Prized for premium tobacco blends.",
      characteristics: ["Aromatic", "Spicy Notes", "Sun-Cured"],
      grade: "Premium",
      moisture: "12-14%",
      origin: "Turkey & Greece",
      uses: ["Premium Blends", "Luxury Cigarettes"]
    },
    {
      name: "Chewing & Snuff",
      image: tobaccoVarietiesImage,
      description: "Specially processed tobacco for chewing and snuff production. Rich flavor and optimal moisture content.",
      characteristics: ["Rich Flavor", "Optimal Moisture", "Processed"],
      grade: "Chewing Grade",
      moisture: "25-30%",
      origin: "Various Regions",
      uses: ["Chewing Tobacco", "Snuff Production"]
    },
    {
      name: "Hookah Tobacco",
      image: tobaccoVarietiesImage,
      description: "Premium tobacco blend specifically crafted for hookah use. Smooth, flavorful, and perfect for aromatic experiences.",
      characteristics: ["Smooth", "Aromatic", "Hookah Blend"],
      grade: "Premium Hookah",
      moisture: "16-18%",
      origin: "Middle East",
      uses: ["Hookah Smoking", "Shisha Production"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-sage-green-light text-sage-green">Our Products</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Premium Tobacco Varieties
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium tobacco varieties, each sourced 
            directly from family farms and cultivated with traditional methods to ensure exceptional quality.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tobaccoTypes.map((tobacco, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border bg-gradient-card">
              <CardHeader className="pb-4">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={tobacco.image} 
                    alt={tobacco.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-golden-amber text-charcoal">
                      <Star className="w-3 h-3 mr-1" />
                      Premium
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-heading text-primary">{tobacco.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {tobacco.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Characteristics */}
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <Leaf className="w-4 h-4 mr-2 text-sage-green" />
                    Characteristics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tobacco.characteristics.map((char, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {char}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-primary">Grade:</span>
                    <p className="text-muted-foreground">{tobacco.grade}</p>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Moisture:</span>
                    <p className="text-muted-foreground">{tobacco.moisture}</p>
                  </div>
                </div>

                {/* Origin */}
                <div className="flex items-center text-sm">
                  <Globe className="w-4 h-4 mr-2 text-sage-green" />
                  <span className="font-medium text-primary">Origin:</span>
                  <span className="text-muted-foreground ml-2">{tobacco.origin}</span>
                </div>

                {/* Uses */}
                <div>
                  <h5 className="font-medium text-primary text-sm mb-1">Primary Uses:</h5>
                  <p className="text-xs text-muted-foreground">{tobacco.uses.join(", ")}</p>
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full group/btn border-sage-green text-sage-green hover:bg-sage-green hover:text-cream"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need a custom blend or have specific requirements?
          </p>
          <Button size="lg" className="bg-gradient-accent text-primary font-semibold hover:shadow-glow">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;