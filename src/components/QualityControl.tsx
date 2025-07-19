import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Microscope, Award, Truck, FileCheck, Users } from 'lucide-react';

const QualityControl = () => {
  const qualitySteps = [
    {
      icon: <Users className="w-8 h-8 text-golden-amber" />,
      title: "Farm Selection",
      description: "Rigorous evaluation of farming practices, soil quality, and cultivation methods before establishing partnerships.",
      details: ["Soil analysis and testing", "Farmer certification process", "Sustainable practice verification"]
    },
    {
      icon: <Microscope className="w-8 h-8 text-sage-green" />,
      title: "Laboratory Testing",
      description: "Comprehensive laboratory analysis for nicotine content, moisture levels, and chemical composition.",
      details: ["Nicotine content analysis", "Moisture and pH testing", "Pesticide residue screening"]
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-golden-amber" />,
      title: "Quality Grading",
      description: "Expert evaluation and grading based on leaf quality, color, texture, and aroma characteristics.",
      details: ["Visual inspection by experts", "Texture and color grading", "Aroma profile assessment"]
    },
    {
      icon: <FileCheck className="w-8 h-8 text-sage-green" />,
      title: "Documentation",
      description: "Complete traceability documentation from farm to shipment, ensuring transparency and accountability.",
      details: ["Farm-to-factory tracking", "Quality certificates", "Batch identification systems"]
    },
    {
      icon: <Truck className="w-8 h-8 text-golden-amber" />,
      title: "Packaging & Storage",
      description: "Controlled environment storage and professional packaging to maintain quality during transportation.",
      details: ["Climate-controlled storage", "Vacuum-sealed packaging", "Temperature monitoring"]
    },
    {
      icon: <Award className="w-8 h-8 text-sage-green" />,
      title: "Final Certification",
      description: "Final quality verification and international certification before shipment to global clients.",
      details: ["International standards compliance", "Export certification", "Client-specific requirements"]
    }
  ];


  const testimonials = [
    {
      quote: "Mahi Enterprises has consistently delivered premium quality tobacco that exceeds our expectations. Their attention to detail and quality control is unmatched.",
      author: "Sarah Johnson",
      company: "Premium Tobacco Ltd., UK",
      rating: 5
    },
    {
      quote: "The transparency in their sourcing process and the consistent quality of their products has made them our trusted partner for over 8 years.",
      author: "Marco Rodriguez",
      company: "Tobacco Imports SA, Spain",
      rating: 5
    },
    {
      quote: "From documentation to delivery, every aspect of their service reflects their commitment to quality and professionalism.",
      author: "Chen Wei",
      company: "Asian Tobacco Co., Singapore",
      rating: 5
    }
  ];

  return (
    <section id="quality" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-sage-green-light text-sage-green">Quality Assurance</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Our Quality Control Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every tobacco leaf undergoes our rigorous 6-step quality control process, ensuring 
            only the finest products reach our international clients.
          </p>
        </div>

        {/* Quality Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {qualitySteps.map((step, index) => (
            <Card key={index} className="border-border bg-gradient-card hover:shadow-elegant transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-background rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-golden-amber font-semibold mb-1">
                      Step {index + 1}
                    </div>
                    <CardTitle className="text-lg font-heading text-primary">
                      {step.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="space-y-2">
                  {step.details.map((detail, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-sage-green rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-heading font-semibold text-primary text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border bg-gradient-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-golden-amber fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-primary">{testimonial.author}</div>
                    <div className="text-sm text-sage-green">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Guarantee */}
        <div className="mt-20 text-center bg-tobacco-brown rounded-2xl p-12">
          <ShieldCheck className="w-16 h-16 text-golden-amber mx-auto mb-6" />
          <h3 className="text-3xl font-heading font-bold text-cream mb-4">
            Quality Guarantee
          </h3>
          <p className="text-cream/90 text-lg leading-relaxed max-w-2xl mx-auto">
            We stand behind every shipment with our comprehensive quality guarantee. 
            If our tobacco doesn't meet your expectations, we'll make it right.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualityControl;