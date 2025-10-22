"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Truck, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "./EmptyState";
import { VehiclePerformance as VehicleData } from "@/types/dashboard";
import Image from "next/image";

interface VehiclePerformanceProps {
    data: VehicleData[];
    isEmpty: boolean;
}

export const VehiclePerformance: React.FC<VehiclePerformanceProps> = ({
    data,
    isEmpty,
}) => {
    /**
     * Get performance status color
     */
    const getPerformanceColor = (status: string) => {
        switch (status) {
            case "good":
                return "text-green-400";
            case "warning":
                return "text-yellow-400";
            case "danger":
                return "text-red-400";
            default:
                return "text-slate-400";
        }
    };

    return (
        <Card className="bg-slate-800/50 border-slate-700 p-4 sm:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-white">
                    Vehicle performance
                </h3>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                    <ArrowRight className="w-5 h-5" />
                </Button>
            </div>

            {isEmpty ? (
                /* Empty State */
                <EmptyState
                    icon={Truck}
                    title="No vehicle data available to display"
                    description="Add vehicles or update your system."
                    actionLabel="Update vehicle"
                    onAction={() => console.log("Update vehicle")}
                    variant="compact"
                />
            ) : (
                /* Populated State - Vehicle Cards */
                <div className="space-y-4">
                    {data.map((vehicle) => (
                        <div
                            key={vehicle.id}
                            className="bg-slate-900/50 rounded-xl p-4 border border-slate-700 hover:border-slate-600 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                {/* Vehicle Icon/Image - Lebih besar di mobile */}
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-slate-400" />
                                </div>

                                {/* Vehicle Info - Text wrap responsif */}
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-base sm:text-lg font-semibold text-white mb-1 truncate">
                                        {vehicle.name}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-400 mb-2">
                                        {vehicle.type} • {vehicle.brand}
                                    </p>

                                    {/* Performance Bar */}
                                    <div className="space-y-1">
                                        <div className="flex items-center justify-between text-xs">
                                            <span
                                                className={`font-medium ${getPerformanceColor(
                                                    vehicle.status
                                                )}`}
                                            >
                                                {vehicle.status === "good"
                                                    ? "Good performance"
                                                    : "Low performance"}
                                            </span>
                                            <span className="text-white font-semibold">
                                                {vehicle.performance}%
                                            </span>
                                        </div>
                                        {/* Progress bar dengan gradient responsif */}
                                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all duration-500 ${vehicle.status === "good"
                                                        ? "bg-gradient-to-r from-cyan-400 to-cyan-500"
                                                        : "bg-gradient-to-r from-red-400 to-orange-400"
                                                    }`}
                                                style={{ width: `${vehicle.performance}%` }}
                                            />
                                            {/* Pattern stripe di bagian kosong */}
                                            <div
                                                className="h-full bg-repeat-x opacity-30"
                                                style={{
                                                    width: `${100 - vehicle.performance}%`,
                                                    backgroundImage:
                                                        "repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.1) 5px, rgba(255,255,255,0.1) 10px)",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Warnings Badge */}
                                    {vehicle.warnings > 0 && (
                                        <div className="flex items-center gap-1 mt-2">
                                            <Badge
                                                variant="destructive"
                                                className="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 border-red-500/30"
                                            >
                                                <AlertTriangle className="w-3 h-3 mr-1" />
                                                {vehicle.warnings} warning{vehicle.warnings > 1 && "s"}
                                            </Badge>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </Card>
    );
};