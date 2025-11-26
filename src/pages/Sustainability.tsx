import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Package, Recycle, TreePine, Truck, Users } from "lucide-react";
import sustainabilityHero from "@/assets/sustainability-hero.jpg";

const Sustainability = () => {
  const sustainableVendors = [
    {
      name: "EcoPackaging Solutions",
      website: "https://ecopackaging.com",
      description: "Provides 100% biodegradable and compostable packaging materials made from plant-based sources. Their products break down naturally within 90 days, reducing landfill waste. We use their packaging for all our shipments.",
      whyChoose: "Their commitment to zero-waste production and carbon-neutral shipping aligns perfectly with our values. They've helped us eliminate over 5 tons of plastic packaging annually.",
    },
    {
      name: "Fair Trade Textiles Co.",
      website: "https://fairtradetextiles.com",
      description: "Certified organic cotton and bamboo textile manufacturer with GOTS certification. They ensure fair wages and safe working conditions for all employees while using sustainable farming practices.",
      whyChoose: "We source all our cotton and bamboo products from them because they prioritize both environmental and social sustainability. Their supply chain is fully transparent and traceable.",
    },
    {
      name: "Green Logistics Network",
      website: "https://greenlogistics.com",
      description: "Carbon-neutral shipping company that uses electric vehicles and optimized routing to minimize emissions. They offset any remaining carbon footprint through verified reforestation projects.",
      whyChoose: "Their innovative approach to sustainable delivery means every shipment we make has minimal environmental impact. They've helped us reduce our shipping emissions by 80%.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={sustainabilityHero} 
            alt="Lush green forest representing our commitment to sustainability" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Sustainability Commitments</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Building a better future through responsible business practices
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Environmental Promise</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At EcoShop, sustainability isn't just a buzzword – it's the foundation of everything we do. 
              From the products we select to how we package and ship them, every decision is made with 
              our planet's future in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Key Commitments */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Key Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Package className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Eco-Friendly Packaging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  All our packaging is 100% biodegradable or recyclable. We use plant-based materials, 
                  recycled paper, and compostable mailers that break down naturally.
                </p>
                <Badge variant="secondary">Zero Plastic</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Carbon-Neutral Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We partner with Green Logistics Network to offset 100% of our shipping emissions 
                  through verified carbon reduction projects and reforestation initiatives.
                </p>
                <Badge variant="secondary">Net Zero</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Sustainable Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Every product is vetted for environmental impact. We prioritize organic materials, 
                  recycled content, and ethical manufacturing processes.
                </p>
                <Badge variant="secondary">Certified</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Recycle className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Circular Economy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We design for longevity and offer repair guides, recycling programs, and take-back 
                  initiatives to keep products out of landfills.
                </p>
                <Badge variant="secondary">Waste Reduction</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Fair Labor Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We only partner with manufacturers who ensure fair wages, safe working conditions, 
                  and ethical treatment of all workers in their supply chain.
                </p>
                <Badge variant="secondary">Ethical</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <TreePine className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Forest Conservation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For every order, we plant a tree through our partnership with reforestation 
                  organizations. We've planted over 10,000 trees to date.
                </p>
                <Badge variant="secondary">Reforestation</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainable Vendors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Sustainable Partners</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We carefully select partners who share our commitment to environmental and social responsibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sustainableVendors.map((vendor, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-3">
                    <Leaf className="h-6 w-6 text-success" />
                  </div>
                  <CardTitle className="text-xl mb-2">{vendor.name}</CardTitle>
                  <a 
                    href={vendor.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    {vendor.website}
                  </a>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">About</h4>
                    <p className="text-sm text-muted-foreground">{vendor.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Why We Partner With Them</h4>
                    <p className="text-sm text-muted-foreground">{vendor.whyChoose}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Impact This Year</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-lg opacity-90">Tons of Plastic Prevented</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10,000</div>
              <p className="text-lg opacity-90">Trees Planted</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-lg opacity-90">Carbon Neutral Shipping</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5,000+</div>
              <p className="text-lg opacity-90">Eco-Conscious Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Looking Ahead</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our 2025 Goals</CardTitle>
              <CardDescription>Ambitious targets for an even more sustainable future</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Achieve 100% renewable energy usage in all operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Expand our product line to 500+ sustainable items</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Plant 50,000 trees through customer purchases</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Launch a product take-back and recycling program</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Reduce packaging waste by an additional 30%</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
