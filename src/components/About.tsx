import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Heart, Globe, Award, Handshake, Leaf } from 'lucide-react';
import farmersImage from '@/assets/farmers-community.jpg';

const About = () => {
  const values = [
    {
      icon: <Handshake className="w-8 h-8 text-golden-amber" />,
      title: "Fair Partnerships",
      description: "We maintain direct relationships with farming families, ensuring fair prices and sustainable livelihoods for our partners."
    },
    {
      icon: <Leaf className="w-8 h-8 text-sage-green" />,
      title: "Sustainable Practices",
      description: "Our commitment to environmental stewardship guides every aspect of our cultivation and sourcing processes."
    },
    {
      icon: <Award className="w-8 h-8 text-golden-amber" />,
      title: "Quality Excellence",
      description: "Rigorous quality control and traditional cultivation methods ensure the finest tobacco varieties reach our international clients."
    },
    {
      icon: <Globe className="w-8 h-8 text-sage-green" />,
      title: "Global Reach",
      description: "From family farms to international markets, we bridge the gap between traditional cultivation and modern distribution."
    }
  ];

  const teamMembers = [
    {
      name: "Maseed Shaik Rasool Shareef",
      role: "Founder & CEO",
      expertise: "30+ years in tobacco cultivation and international trade",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Mahimudh Arief",
      role: "Quality Control Director",
      expertise: "Agricultural sciences and tobacco processing specialist",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Kumar Patel",
      role: "Sourcing Manager",
      expertise: "Direct farmer relationships and supply chain optimization",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-tobacco-brown-light text-cream">Our Story</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Rooted in Tradition, Committed to Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over three decades, Mahi Enterprises has been building bridges between traditional 
            tobacco farmers and the global market, ensuring quality, sustainability, and fair trade practices.
          </p>
        </div>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-heading font-semibold text-primary mb-6">
              From Family Farms to Global Markets
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 1990 by Maseed Shaik Rasool Shareef, our company began with a simple vision: to create 
                lasting partnerships with tobacco farming families while delivering premium quality 
                tobacco to international markets.
              </p>
              <p>
                What started as a small family business has grown into a trusted global supplier, 
                but our core values remain unchanged. We believe that the best tobacco comes from 
                farmers who are treated as partners, not just suppliers.
              </p>
              <p>
                Today, we work with over 200 farming families across multiple regions, ensuring 
                sustainable cultivation practices while maintaining the traditional methods that 
                produce the world's finest tobacco varieties.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-golden-amber mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sage-green mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Partner Farms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-golden-amber mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={farmersImage} 
              alt="Tobacco farming families" 
              className="rounded-2xl shadow-elegant w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tobacco-brown/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-heading font-semibold text-primary text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border bg-background hover:shadow-soft transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-heading font-semibold text-primary text-center mb-12">
            Meet Our Leadership Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center border-border bg-background hover:shadow-soft transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-2">{member.name}</h4>
                  <p className="text-golden-amber font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center bg-tobacco-brown rounded-2xl p-12">
          <blockquote className="text-2xl md:text-3xl font-heading font-medium text-cream mb-6">
            "Our mission is to honor the heritage of tobacco cultivation while building sustainable 
            partnerships that benefit farmers, businesses, and communities worldwide."
          </blockquote>
          <cite className="text-golden-amber font-semibold">- Maseed Shaik Rasool Shareef, Founder & CEO</cite>
        </div>
      </div>
    </section>
  );
};

export default About;