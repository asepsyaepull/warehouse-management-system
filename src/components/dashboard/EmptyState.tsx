import React from "react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
    icon: LucideIcon;
    title: string;
    description?: string;
    actionLabel?: string;
    onAction?: () => void;
    variant?: "default" | "compact";
}

export const EmptyState: React.FC<EmptyStateProps> = ({
    icon: Icon,
    title,
    description,
    actionLabel,
    onAction,
    variant = "default",
}) => {
    const isCompact = variant === "compact";

    return (
        <div
            className={`flex flex-col items-center justify-center text-center ${isCompact ? "py-8" : "py-12 md:py-16"
                }`}
        >
            {/* Icon dengan background circle */}
            <div
                className={`rounded-full bg-cyan-400/20 flex items-center justify-center mb-4 ${isCompact ? "w-16 h-16" : "w-20 h-20 md:w-24 md:h-24"
                    }`}
            >
                <Icon
                    className={`text-cyan-400 ${isCompact ? "w-8 h-8" : "w-10 h-10 md:w-12 md:h-12"
                        }`}
                />
            </div>

            {/* Title - font size responsif */}
            <h3
                className={`font-semibold text-slate-300 mb-2 ${isCompact ? "text-sm" : "text-base md:text-lg"
                    }`}
            >
                {title}
            </h3>

            {/* Description (optional) */}
            {description && (
                <p className="text-xs md:text-sm text-slate-400 mb-4 max-w-xs">
                    {description}
                </p>
            )}

            {/* Action button (optional) */}
            {actionLabel && onAction && (
                <Button
                    variant="ghost"
                    size={isCompact ? "sm" : "default"}
                    onClick={onAction}
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10"
                >
                    {actionLabel}
                </Button>
            )}
        </div>
    );
};