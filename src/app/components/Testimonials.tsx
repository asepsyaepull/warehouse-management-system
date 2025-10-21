import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "WMS transformed our warehouse operations completely. We reduced processing time by 40% and eliminated stock errors. Best investment we've made.",
        name: "Sarah Chen",
        role: "Operations Director",
        company: "TechLogistics Inc",
        initials: "SC",
    },
    {
        quote: "The real-time visibility across all our warehouses is game-changing. We can make informed decisions instantly and our customers love the accuracy.",
        name: "Michael Rodriguez",
        role: "Supply Chain Manager",
        company: "GlobalShip Solutions",
        initials: "MR",
    },
    {
        quote: "Integration was seamless and the support team is outstanding. WMS scaled with our growth from 1 to 5 warehouses without any hiccups.",
        name: "Emily Watson",
        role: "CEO",
        company: "FastTrack Distribution",
        initials: "EW",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 lg:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        See what warehouse professionals say about transforming their operations with WMS.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="border-border hover:shadow-xl transition-shadow">
                            <CardContent className="pt-6 space-y-4">
                                <Quote className="h-8 w-8 text-blue-500 opacity-50" />
                                <p className="text-muted-foreground leading-relaxed">
                                    {testimonial.quote}
                                </p>
                                <div className="flex items-center gap-3 pt-4">
                                    <Avatar>
                                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white font-semibold">
                                            {testimonial.initials}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
