import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    tobaccoType: '',
    quantity: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. We'll respond within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      country: '',
      tobaccoType: '',
      quantity: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-golden-amber" />,
      title: "Email Address",
      content: "info@mahienterprises.com",
      subContent: "export@mahienterprises.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-sage-green" />,
      title: "Phone Numbers",
      content: "+91 40 2345-6789",
      subContent: "+91 98765-43210 (WhatsApp)"
    },
    {
      icon: <MapPin className="w-6 h-6 text-golden-amber" />,
      title: "Head Office",
      content: "Tobacco Trading Complex",
      subContent: "Hyderabad, Telangana, India 500081"
    },
    {
      icon: <Clock className="w-6 h-6 text-sage-green" />,
      title: "Business Hours",
      content: "Monday - Saturday",
      subContent: "9:00 AM - 6:00 PM (IST)"
    }
  ];

  const tobaccoTypes = [
    "North Virginia",
    "Flue-Cured Virginia", 
    "Bidi Tobacco",
    "Burley",
    "Rustica",
    "Oriental",
    "Chewing & Snuff",
    "Hookah Tobacco",
    "Custom Blend"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-golden-amber-light text-golden-amber">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're looking for premium tobacco varieties or have specific requirements, 
            our team is here to help. Get in touch today for a personalized quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border bg-background shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-golden-amber" />
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-primary font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-primary font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-primary font-medium">Company Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Enter company name"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="country" className="text-primary font-medium">Country *</Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      placeholder="Enter your country"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="tobaccoType" className="text-primary font-medium">Tobacco Type of Interest</Label>
                    <Select value={formData.tobaccoType} onValueChange={(value) => handleInputChange('tobaccoType', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select tobacco type" />
                      </SelectTrigger>
                      <SelectContent>
                        {tobaccoTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="quantity" className="text-primary font-medium">Estimated Quantity</Label>
                    <Input
                      id="quantity"
                      value={formData.quantity}
                      onChange={(e) => handleInputChange('quantity', e.target.value)}
                      placeholder="e.g., 500 tons annually"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-primary font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your requirements, quality specifications, delivery timeline, etc."
                    required
                    rows={5}
                    className="mt-2"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-accent text-primary font-semibold hover:shadow-glow transition-all duration-300 group"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
                Get in Touch Directly
              </h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-border bg-background hover:shadow-soft transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-sage-green-light rounded-lg flex items-center justify-center">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                          <p className="text-muted-foreground">{info.content}</p>
                          {info.subContent && (
                            <p className="text-sm text-sage-green font-medium">{info.subContent}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Response Promise */}
            <Card className="border-golden-amber bg-golden-amber-light">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-golden-amber mx-auto mb-4" />
                <h4 className="text-xl font-heading font-semibold text-charcoal mb-3">
                  Quick Response Guarantee
                </h4>
                <p className="text-charcoal/80 leading-relaxed">
                  We understand that timing is crucial in international trade. 
                  Our team responds to all inquiries within 24 hours, and urgent 
                  requests are handled within 4-6 hours during business days.
                </p>
              </CardContent>
            </Card>

            {/* Additional Contact Methods */}
            <Card className="border-border bg-background">
              <CardContent className="p-8">
                <h4 className="text-xl font-heading font-semibold text-primary mb-4">
                  Prefer Other Communication Channels?
                </h4>
                <div className="space-y-3 text-muted-foreground">
                  <p>📱 <strong>WhatsApp:</strong> +91 98765-43210 (Instant messaging)</p>
                  <p>📧 <strong>Telegram:</strong> @MahiEnterprises (Quick updates)</p>
                  <p>🌐 <strong>Skype:</strong> mahi.enterprises.export (Video calls)</p>
                  <p>📄 <strong>LinkedIn:</strong> Mahi Enterprises Tobacco</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;