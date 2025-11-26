import { Shield, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const SecurityBadge = () => {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Shield className="h-4 w-4 text-primary" />
      <span className="flex items-center gap-1">
        <Lock className="h-3 w-3" />
        SSL Secured
      </span>
      <Badge variant="secondary" className="text-xs">
        Verified Safe
      </Badge>
    </div>
  );
};
