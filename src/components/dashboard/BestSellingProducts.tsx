"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmptyState } from "./EmptyState";
import { BestSellingProduct } from "@/types/dashboard";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface BestSellingProductsProps {
    data: BestSellingProduct[];
    isEmpty: boolean;
}

export const BestSellingProducts: React.FC<BestSellingProductsProps> = ({
    data,
    isEmpty,
}) => {
    return (
        <Card className="bg-slate-800/50 border-slate-700 p-4 sm:p-6">
            {/* Header dengan action button */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-white">
                    Best selling product
                </h3>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                    <ArrowRight className="w-5 h-5" />
                </Button>
            </div>

            {isEmpty ? (
                /* Empty State */
                <EmptyState
                    icon={DollarSign}
                    title="No product sales data to display"
                    description="Please add sales first."
                    actionLabel="Add sales data"
                    onAction={() => console.log("Add sales")}
                    variant="compact"
                />
            ) : (
                /* Populated State */
                <div className="space-y-4">
                    {/* Pie Chart - Auto resize responsif */}
                    <div className="w-full h-48 sm:h-56 md:h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius="60%"
                                    outerRadius="80%"
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#1E293B",
                                        border: "1px solid #334155",
                                        borderRadius: "8px",
                                        color: "#FFF",
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Legend - Grid responsif, wrap di mobile */}
                    <div className="grid grid-cols-2 gap-3">
                        {data.map((product, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <div
                                    className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                                    style={{ backgroundColor: product.color }}
                                />
                                <div className="min-w-0 flex-1">
                                    <div className="text-sm font-medium text-white truncate">
                                        {product.name}
                                    </div>
                                    <div className="text-xs text-slate-400">
                                        {product.value.toLocaleString()} products
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Card>
    );
};