import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, RefreshCw, Building2, Zap } from "lucide-react";

const features = [
    {
        icon: RefreshCw,
        title: "Real-Time Stock Updates",
        description: "Monitor inventory levels instantly with live synchronization across all warehouses and channels.",
    },
    {
        icon: BarChart3,
        title: "Automated Tracking",
        description: "Track inbound and outbound shipments automatically with barcode and RFID integration.",
    },
    {
        icon: Building2,
        title: "Multi-Warehouse Visibility",
        description: "Manage multiple locations from a single dashboard with complete transparency and control.",
    },
    {
        icon: Zap,
        title: "API Integration",
        description: "Seamlessly connect with your ERP, eCommerce platforms, and shipping carriers.",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-20 lg:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Why Choose WMS
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Built for efficiency and designed for scale. Unlock powerful features that transform your warehouse operations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Card
                                key={index}
                                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-4">
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                                    <CardDescription className="text-base">
                                        {feature.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}