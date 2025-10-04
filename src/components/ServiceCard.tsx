
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCard = ({ title, description, icon: Icon, className, style }: ServiceCardProps) => {
  return (
    <Card className={`service-card backdrop-blur-sm transition-all duration-300 hover:translate-y-[-8px] ${className || ""}`} style={style}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-truck-red to-truck-red-light p-3 rounded-lg shadow-md">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
