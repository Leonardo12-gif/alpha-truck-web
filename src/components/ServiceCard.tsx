
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
    <Card className={`service-card backdrop-blur-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl border-2 ${className || ""}`} style={style}>
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-br from-truck-red to-truck-red-light p-3 rounded-xl shadow-lg flex-shrink-0">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-xl font-bold leading-tight">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
