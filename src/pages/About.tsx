import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header Image Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-8xl">🎓</span>
        </div>
      </section>

      {/* Our Goals Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Goals</h2>
          <div className="text-lg text-muted-foreground leading-relaxed">
            <p>
              Our goals are simple, to empower students to their potential by building their confidence and independence in learning. We simplify complex topics by breaking them into their core concepts and building on that, as well as personalized strategies specifically tailored to each student's needs. Furthermore, we encourage lifelong learning by inspiring curiosity and problem-solving skills that extend beyond the classroom. Most importantly, we focus on showcasing proven improvements in a student's understanding, performance, and academic success.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              At BrightPath Tutors, we believe that every student deserves a chance of reaching their academic potential. We are a team of skilled tutors who provide tutoring both indirectly through worksheet solutions and directly through teaching sessions.
            </p>
            <p>
              Our mission is to simplify challenging subjects, boost confidence, and give students a chance at academic success. Our tutors make learning fun, engaging, and results-driven. We offer one-on-one tutoring and small group sessions, each customized to the student's needs. Whether it's math, science, or English, we support students every step of the way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
