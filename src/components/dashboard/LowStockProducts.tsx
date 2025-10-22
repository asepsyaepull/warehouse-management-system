"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Package, ArrowRight, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmptyState } from "./EmptyState";
import { LowStockProduct } from "@/types/dashboard";
import Image from "next/image";

interface LowStockProductsProps {
    data: LowStockProduct[];
    isEmpty: boolean;
}

export const LowStockProducts: React.FC<LowStockProductsProps> = ({
    data,
    isEmpty,
}) => {
    return (
        <Card className="bg-slate-800/50 border-slate-700 p-4 sm:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-white">
                    Product running out of stock
                </h3>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                    <ArrowRight className="w-5 h-5" />
                </Button>
            </div>

            {isEmpty ? (
                /* Empty State */
                <EmptyState
                    icon={Package}
                    title="No Low Stock Products Yet"
                    actionLabel="Add product"
                    onAction={() => console.log("Add product")}
                    variant="compact"
                />
            ) : (
                /* Populated State - Product Grid */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.map((product) => (
                        <div
                            key={product.id}
                            className="bg-slate-900/50 rounded-xl p-4 border border-slate-700 hover:border-slate-600 transition-colors"
                        >
                            {/* Product Header */}
                            <div className="flex items-start gap-3 mb-3">
                                {/* Product Icon/Image */}
                                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Package className="w-6 h-6 text-slate-400" />
                                </div>

                                {/* Product Info */}
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-semibold text-white mb-0.5 truncate">
                                        {product.name}
                                    </h4>
                                    <p className="text-xs text-slate-400">{product.volume}</p>
                                </div>

                                {/* Trend Badge */}
                                <div
                                    className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded ${product.trend === "up"
                                            ? "text-green-400 bg-green-400/10"
                                            : "text-red-400 bg-red-400/10"
                                        }`}
                                >
                                    {product.trend === "up" ? (
                                        <TrendingUp className="w-3 h-3" />
                                    ) : (
                                        <TrendingDown className="w-3 h-3" />
                                    )}
                                    {Math.abs(product.changePercentage)}%
                                </div>
                            </div>

                            {/* Product Stats */}
                            <div className="grid grid-cols-2 gap-3">
                                {/* Sold */}
                                <div>
                                    <div className="text-xl sm:text-2xl font-bold text-white mb-0.5">
                                        {product.sold.toLocaleString()}
                                    </div>
                                    <div className="text-xs text-slate-400">sold</div>
                                </div>

                                {/* In Stock */}
                                <div>
                                    <div className="text-xl sm:text-2xl font-bold text-white mb-0.5">
                                        {product.inStock.toLocaleString()}
                                    </div>
                                    <div className="text-xs text-slate-400">in stock</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </Card>
    );
};