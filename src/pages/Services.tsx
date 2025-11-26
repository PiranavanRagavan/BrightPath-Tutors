import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Sparkles } from "lucide-react";
import { services, reviews, getMostPopularServices, getRelatedServices } from "@/data/services";
import { useCart } from "@/contexts/CartContext";

const Services = () => {
  const { addToCart } = useCart();

  const getServiceReview = (serviceId: number) => {
    return reviews.find(r => r.productId === serviceId);
  };

  const mostPopularIds = getMostPopularServices();
  const mostPopularServices = services.filter(s => mostPopularIds.includes(s.id));

  const renderServiceCard = (service: typeof services[0], showBadge?: string) => {
    const review = getServiceReview(service.id);
    return (
      <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
        {service.image && (
          <div className="aspect-[4/3] overflow-hidden relative group">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {showBadge && (
              <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                {showBadge}
              </Badge>
            )}
          </div>
        )}
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <CardTitle className="text-xl">{service.name}</CardTitle>
            <span className="text-2xl font-bold text-primary">${service.price}</span>
          </div>
          <CardDescription>{service.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {review && (
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">"{review.comment}"</p>
              <p className="text-xs text-muted-foreground mt-1">- {review.author}</p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full" 
            onClick={() => addToCart(service)}
          >
            ADD TO CART
          </Button>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional tutoring services tailored to your learning needs
          </p>
        </div>

        {/* Most Popular Services */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Most Popular Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mostPopularServices.map((service) => renderServiceCard(service, "Popular"))}
          </div>
        </div>

        {/* All Services */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">All Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => renderServiceCard(service))}
          </div>
        </div>

        {/* Recommended for You Section */}
        <div className="bg-muted/30 rounded-lg p-8 max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Recommended for You</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Based on your browsing, these services might be perfect for your learning journey
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => renderServiceCard(service))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
