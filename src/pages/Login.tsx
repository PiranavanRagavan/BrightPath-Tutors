import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Shield, KeyRound } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-background to-muted/20">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-4">
          <div className="flex justify-center mb-4">
            <h1 className="text-4xl font-bold text-primary">BrightPath Tutors</h1>
          </div>
          <CardTitle className="text-3xl text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Access your BrightPath Tutors account
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-xs text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••"
              />
            </div>
          </div>
          
          <Button className="w-full" onClick={handleLogin}>
            Log In
          </Button>
          
          {/* Two-Factor Authentication Visual Demo */}
          <div className="space-y-3 pt-4 border-t">
            <div className="flex items-center gap-2">
              <KeyRound className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Two-Factor Authentication</span>
            </div>
            <Input 
              placeholder="Enter 2FA code"
              disabled
              className="text-center tracking-widest"
            />
            <p className="text-xs text-muted-foreground">
              This feature is not active — demonstration purpose only.
            </p>
          </div>
          
          {/* Security Badge */}
          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Shield className="h-4 w-4 text-primary" />
              <span>Enhanced Security</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Login protected by attempt limits and firewall security
            </p>
          </div>
          
          <div className="text-center pt-2">
            <p className="text-xs text-muted-foreground mb-2">
              This is a demonstration login page. No actual authentication required.
            </p>
            <Link to="/signup" className="text-xs text-primary hover:underline">
              Don't have an account? Create one
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
