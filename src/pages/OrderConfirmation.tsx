import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  const orderNumber = Math.random().toString(36).substring(2, 10).toUpperCase();

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="h-12 w-12 text-success" />
            </div>
            <CardTitle className="text-3xl mb-2">Order Confirmed!</CardTitle>
            <p className="text-muted-foreground">Thank you for your purchase</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Order Number</p>
              <p className="text-2xl font-bold text-primary">{orderNumber}</p>
            </div>

            <div className="text-left space-y-4">
              <h3 className="font-semibold text-lg">What's Next?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <span>You'll receive a confirmation email shortly with your order details</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span>We'll prepare your eco-friendly package with sustainable materials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <span>Your order will ship within 2-3 business days via carbon-neutral delivery</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link to="/products" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
              <Link to="/" className="flex-1">
                <Button size="lg" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderConfirmation;
