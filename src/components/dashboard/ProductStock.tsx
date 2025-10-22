"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { BarChart3, TrendingUp, Package } from "lucide-react";
import { EmptyState } from "./EmptyState";
import { ProductStockData, DashboardStats } from "@/types/dashboard";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Legend,
    Tooltip,
} from "recharts";

interface ProductStockProps {
    data: ProductStockData[];
    stats: DashboardStats;
    isEmpty: boolean;
}

export const ProductStock: React.FC<ProductStockProps> = ({
    data,
    stats,
    isEmpty,
}) => {
    return (
        <div className="space-y-4">
            {/* Main Card - Bar Chart */}
            <Card className="bg-slate-800/50 border-slate-700 p-4 sm:p-6">
                <div className="mb-4 sm:mb-6">
                    <h3 className="text-sm text-slate-400 mb-1">Product stock</h3>
                    <p className="text-xs text-slate-500">
                        Insightful overview of Product stock
                    </p>
                </div>

                {isEmpty ? (
                    /* Empty State */
                    <EmptyState
                        icon={BarChart3}
                        title="Product stock data is not available"
                        description="Please add or sync your data to view the chart."
                        actionLabel="Add stock"
                        onAction={() => console.log("Add stock")}
                    />
                ) : (
                    /* Populated State */
                    <div className="space-y-4">
                        {/* Stats Summary */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div>
                                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                                    {stats.totalProductInStock.toLocaleString()}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-slate-400">
                                    <div className="w-2 h-2 rounded-full bg-slate-400" />
                                    Product in stock
                                </div>
                            </div>

                            <div>
                                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                                    {stats.totalProductSold.toLocaleString()}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-cyan-400">
                                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                                    Product sold
                                </div>
                            </div>
                        </div>

                        {/* Bar Chart - Responsif height */}
                        <div className="w-full h-64 sm:h-72 md:h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={data}
                                    margin={{ top: 20, right: 10, left: 0, bottom: 20 }}
                                >
                                    {/* Grid dengan style dark mode */}
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#334155"
                                        vertical={false}
                                    />

                                    {/* X Axis */}
                                    <XAxis
                                        dataKey="date"
                                        stroke="#64748B"
                                        tick={{ fill: "#94A3B8", fontSize: 12 }}
                                        axisLine={{ stroke: "#334155" }}
                                    />

                                    {/* Y Axis */}
                                    <YAxis
                                        stroke="#64748B"
                                        tick={{ fill: "#94A3B8", fontSize: 12 }}
                                        axisLine={{ stroke: "#334155" }}
                                        tickFormatter={(value) => `${value / 1000}k`}
                                    />

                                    {/* Tooltip */}
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#1E293B",
                                            border: "1px solid #334155",
                                            borderRadius: "8px",
                                            color: "#FFF",
                                        }}
                                        labelStyle={{ color: "#94A3B8" }}
                                    />

                                    {/* Legend */}
                                    <Legend
                                        wrapperStyle={{
                                            paddingTop: "20px",
                                            fontSize: "12px",
                                        }}
                                        iconType="circle"
                                    />

                                    {/* Bars dengan pattern untuk product in stock */}
                                    <Bar
                                        dataKey="productInStock"
                                        fill="#64748B"
                                        name="Product in stock"
                                        radius={[4, 4, 0, 0]}
                                    />

                                    <Bar
                                        dataKey="productSold"
                                        fill="#5DD3C7"
                                        name="Product sold"
                                        radius={[4, 4, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                )}
            </Card>

            {/* Additional Stats Cards - Grid responsif */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {/* Product in Inventory */}
                <Card className="bg-slate-800/50 border-slate-700 p-4">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        {stats.productInInventory.toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-400 mb-2">Product in inventory</div>
                    {stats.productInventoryChange !== 0 && (
                        <div
                            className={`flex items-center gap-1 text-xs ${stats.productInventoryChange > 0
                                    ? "text-green-400"
                                    : "text-red-400"
                                }`}
                        >
                            <TrendingUp className="w-3 h-3" />
                            {Math.abs(stats.productInventoryChange)}%
                        </div>
                    )}
                </Card>

                {/* Product Been Sold */}
                <Card className="bg-slate-800/50 border-slate-700 p-4">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        {stats.productBeenSold.toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-400 mb-2">Product has been sold</div>
                    {stats.productSoldChange !== 0 && (
                        <div
                            className={`flex items-center gap-1 text-xs ${stats.productSoldChange > 0 ? "text-green-400" : "text-red-400"
                                }`}
                        >
                            <TrendingUp
                                className={`w-3 h-3 ${stats.productSoldChange < 0 ? "rotate-180" : ""
                                    }`}
                            />
                            {Math.abs(stats.productSoldChange)}%
                        </div>
                    )}
                </Card>

                {/* Product Returned */}
                <Card className="bg-slate-800/50 border-slate-700 p-4 col-span-2 md:col-span-1">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        {stats.productReturned.toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-400 mb-2">Product has been returned</div>
                    {stats.productReturnedChange !== 0 && (
                        <div
                            className={`flex items-center gap-1 text-xs ${stats.productReturnedChange > 0
                                    ? "text-green-400"
                                    : "text-red-400"
                                }`}
                        >
                            <TrendingUp
                                className={`w-3 h-3 ${stats.productReturnedChange < 0 ? "rotate-180" : ""
                                    }`}
                            />
                            {Math.abs(stats.productReturnedChange)}%
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
};