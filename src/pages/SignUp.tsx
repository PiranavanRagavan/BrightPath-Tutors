import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-background to-muted/20">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-4">
          <div className="flex justify-center mb-4">
            <h1 className="text-4xl font-bold text-primary">BrightPath Tutors</h1>
          </div>
          <CardTitle className="text-3xl text-center">Create Account</CardTitle>
          <CardDescription className="text-center">
            Join BrightPath Tutors today
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullname">Full Name</Label>
              <Input 
                id="fullname" 
                type="text" 
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input 
                id="confirm-password" 
                type="password" 
                placeholder="••••••••"
              />
            </div>
          </div>
          
          <Button className="w-full" onClick={handleSignUp}>
            Create Account
          </Button>
          
          <div className="text-center pt-2">
            <p className="text-xs text-muted-foreground mb-2">
              This is a demonstration sign-up page. No data is stored.
            </p>
            <Link to="/login" className="text-xs text-primary hover:underline">
              Already have an account? Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
