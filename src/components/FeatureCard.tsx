import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const FeatureCard = ({ icon: Icon, title, description, features }: FeatureCardProps) => {
  return (
    <Card className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
      <CardHeader className="text-center">
        <div className="mx-auto p-3 bg-gradient-primary rounded-lg w-fit group-hover:shadow-glow transition-all duration-300">
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;