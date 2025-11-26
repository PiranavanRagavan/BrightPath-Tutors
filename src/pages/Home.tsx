import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Package, Truck } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import heroImage from "@/assets/hero-image.jpg";
import bambooBottle from "@/assets/product-bamboo-bottle.jpg";
import toteBag from "@/assets/product-tote-bag.jpg";
import cutlery from "@/assets/product-cutlery.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Image Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Grid Item 1 */}
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="text-6xl">📚</span>
              </div>
            </div>
            
            {/* Grid Item 2 */}
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="text-6xl">✏️</span>
              </div>
            </div>
            
            {/* Grid Item 3 */}
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="text-6xl">🎓</span>
              </div>
            </div>
            
            {/* Grid Item 4 */}
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="text-6xl">🔬</span>
              </div>
            </div>
            
            {/* Grid Item 5 */}
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="text-6xl">📖</span>
              </div>
            </div>
            
            {/* Grid Item 6 */}
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="text-6xl">💡</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              At BrightPath Tutors, we accommodate learners of all ages from grade 1–8 building foundation skills, to high school and university level classes. We understand that every student has their own way of learning, which is why we have peer tutors who can support skill gaps and disabilities.
            </p>
            <p>
              Each tutor crafts lesson plans and teaching strategies to handle any difficulties students face. Our mission is not only focused on improving grades but also on helping students gain confidence to perform independently. We set clear, achievable goals and celebrate small successes while helping students learn from mistakes.
            </p>
            <div className="space-y-2">
              <p className="font-semibold">We support:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Parents wanting structured academic help</li>
                <li>High school students preparing for exams</li>
                <li>University learners needing subject-specific assistance</li>
              </ul>
            </div>
            <p>
              With interactive lessons, mentoring, and effective teaching techniques, BrightPath Tutors helps students overcome obstacles and grow academically and personally.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
