import { PackageCheck, ClipboardList, Truck } from "lucide-react";

const steps = [
    {
        icon: PackageCheck,
        number: "01",
        title: "Receive & Record",
        description: "Scan and log incoming goods instantly. Our system captures all details and updates inventory in real-time.",
    },
    {
        icon: ClipboardList,
        number: "02",
        title: "Manage & Track",
        description: "Organize stock placement with smart location mapping. Monitor movement and optimize storage efficiency.",
    },
    {
        icon: Truck,
        number: "03",
        title: "Ship with Confidence",
        description: "Process orders fast with full traceability. From pick to pack to dispatch, every step is tracked.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 lg:py-32 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Simple Process, Smart Workflow
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        From receiving to shipping, WMS guides you through every step with precision and ease.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="relative">
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
                                )}
                                <div className="relative bg-card border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow">
                                    <div className="relative">
                                        <div className="absolute -top-4 -left-4 text-6xl font-bold text-blue-100 dark:text-blue-900/30">
                                            {step.number}
                                        </div>
                                        <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}