import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { products, reviews } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import bambooBottle from "@/assets/product-bamboo-bottle.jpg";
import toteBag from "@/assets/product-tote-bag.jpg";
import cutlery from "@/assets/product-cutlery.jpg";
import beeswaxWraps from "@/assets/product-beeswax-wraps.jpg";
import glassPlanter from "@/assets/product-glass-planter.jpg";
import yogaMat from "@/assets/product-yoga-mat.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { addToCart } = useCart();

  const productImages: Record<number, string> = {
    1: bambooBottle,
    2: toteBag,
    3: cutlery,
    4: beeswaxWraps,
    5: glassPlanter,
    6: yogaMat,
  };

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const getProductReview = (productId: number) => {
    return reviews.find(r => r.productId === productId);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carefully curated sustainable products for conscious consumers
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const review = getProductReview(product.id);
            return (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden relative group">
                  <img
                    src={productImages[product.id] || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-success">
                    Eco-Friendly
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{product.category}</Badge>
                  
                  {/* Customer Review */}
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
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Recommended Products Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">${product.price}</span>
                  <Button size="sm" onClick={() => addToCart(product)}>Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
