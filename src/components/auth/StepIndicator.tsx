import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
    currentStep,
    totalSteps = 3,
}) => {
    const steps = [
        { number: 1, label: "Personal" },
        { number: 2, label: "Job details" },
        { number: 3, label: "Access" },
    ];

    return (
        <div className="w-full max-w-md mx-auto mb-8">
            {/* Desktop: Full stepper dengan label */}
            <div className="hidden sm:flex items-center justify-between">
                {steps.map((step, index) => (
                    <React.Fragment key={step.number}>
                        {/* Step circle */}
                        <div className="flex flex-col items-center">
                            <div
                                className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300",
                                    currentStep > step.number
                                        ? "bg-cyan-400 text-slate-900"
                                        : currentStep === step.number
                                            ? "bg-cyan-400 text-slate-900 ring-4 ring-cyan-400/30"
                                            : "bg-slate-700 text-slate-400"
                                )}
                            >
                                {currentStep > step.number ? (
                                    <Check className="w-5 h-5" />
                                ) : (
                                    step.number
                                )}
                            </div>
                            {/* Label di bawah circle - hanya tampil di desktop */}
                            <span
                                className={cn(
                                    "text-xs mt-2 font-medium transition-colors",
                                    currentStep >= step.number
                                        ? "text-cyan-400"
                                        : "text-slate-500"
                                )}
                            >
                                {step.label}
                            </span>
                        </div>

                        {/* Connector line */}
                        {index < steps.length - 1 && (
                            <div className="flex-1 h-0.5 mx-4 bg-slate-700 relative">
                                <div
                                    className={cn(
                                        "absolute inset-0 bg-cyan-400 transition-all duration-500",
                                        currentStep > step.number ? "w-full" : "w-0"
                                    )}
                                />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Mobile: Compact dot indicators */}
            <div className="flex sm:hidden items-center justify-center gap-2">
                {steps.map((step) => (
                    <div key={step.number} className="flex items-center gap-2">
                        <div
                            className={cn(
                                "transition-all duration-300",
                                currentStep === step.number
                                    ? "w-8 h-2 bg-cyan-400 rounded-full"
                                    : currentStep > step.number
                                        ? "w-6 h-2 bg-cyan-400/70 rounded-full"
                                        : "w-6 h-2 bg-slate-700 rounded-full"
                            )}
                        />
                    </div>
                ))}
            </div>

            {/* Mobile: Current step label */}
            <div className="flex sm:hidden justify-center mt-3">
                <span className="text-sm font-medium text-cyan-400">
                    {steps[currentStep - 1].label}
                </span>
            </div>
        </div>
    );
};