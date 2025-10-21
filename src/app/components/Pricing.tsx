import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Free",
        description: "Perfect for startups and small warehouses",
        price: "$0",
        period: "forever",
        features: [
            "Up to 1,000 SKUs",
            "Single warehouse location",
            "Basic inventory tracking",
            "Email support",
            "Mobile app access",
        ],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Pro",
        description: "For growing teams with multiple locations",
        price: "$199",
        period: "per month",
        features: [
            "Unlimited SKUs",
            "Up to 5 warehouse locations",
            "Advanced analytics & reports",
            "Priority support",
            "API access",
            "Barcode & RFID support",
            "Multi-user permissions",
        ],
        cta: "Start Free Trial",
        popular: true,
    },
    {
        name: "Enterprise",
        description: "For large operations requiring custom solutions",
        price: "Custom",
        period: "contact us",
        features: [
            "Unlimited everything",
            "Unlimited warehouse locations",
            "Dedicated account manager",
            "24/7 phone support",
            "Custom integrations",
            "Advanced security & compliance",
            "On-premise deployment option",
            "Training & onboarding",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Choose the plan that fits your needs. Scale up or down anytime.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative border-border flex flex-col ${plan.popular
                                    ? "shadow-xl scale-105 border-blue-500 dark:border-blue-400"
                                    : ""
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        MOST POPULAR
                                    </span>
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                <CardDescription className="text-base">
                                    {plan.description}
                                </CardDescription>
                                <div className="pt-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    {plan.price !== "Custom" && (
                                        <span className="text-muted-foreground ml-2">
                                            / {plan.period}
                                        </span>
                                    )}
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 space-y-4">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className="w-full"
                                    variant={plan.popular ? "default" : "outline"}
                                    size="lg"
                                >
                                    {plan.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
