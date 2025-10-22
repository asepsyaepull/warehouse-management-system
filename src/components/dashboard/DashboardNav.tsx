"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Truck, Package as PackageIcon, Car, FileText } from "lucide-react";

export const DashboardNav: React.FC = () => {
    return (
        <div className="bg-slate-900 border-b border-slate-800 sticky top-16 md:top-20 z-30">
            <div className="px-4 sm:px-6 lg:px-8">
                <Tabs defaultValue="dashboard" className="w-full">
                    {/* Tabs List - Scroll horizontal di mobile jika overflow */}
                    <TabsList className="w-full h-auto bg-transparent border-0 p-0 flex justify-start overflow-x-auto scrollbar-hide">
                        <TabsTrigger
                            value="dashboard"
                            className="flex items-center gap-2 px-4 py-3 data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-400 text-slate-400 hover:text-white rounded-t-lg border-b-2 border-transparent data-[state=active]:border-cyan-400 transition-colors"
                        >
                            <Home className="w-4 h-4" />
                            <span className="text-sm font-medium">Dashboard</span>
                        </TabsTrigger>

                        <TabsTrigger
                            value="delivery"
                            className="flex items-center gap-2 px-4 py-3 data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-400 text-slate-400 hover:text-white rounded-t-lg border-b-2 border-transparent data-[state=active]:border-cyan-400 transition-colors"
                        >
                            <Truck className="w-4 h-4" />
                            <span className="text-sm font-medium">Delivery Service</span>
                        </TabsTrigger>

                        <TabsTrigger
                            value="product"
                            className="flex items-center gap-2 px-4 py-3 data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-400 text-slate-400 hover:text-white rounded-t-lg border-b-2 border-transparent data-[state=active]:border-cyan-400 transition-colors"
                        >
                            <PackageIcon className="w-4 h-4" />
                            <span className="text-sm font-medium">Product</span>
                        </TabsTrigger>

                        <TabsTrigger
                            value="vehicle"
                            className="flex items-center gap-2 px-4 py-3 data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-400 text-slate-400 hover:text-white rounded-t-lg border-b-2 border-transparent data-[state=active]:border-cyan-400 transition-colors"
                        >
                            <Car className="w-4 h-4" />
                            <span className="text-sm font-medium">Vehicle</span>
                        </TabsTrigger>

                        <TabsTrigger
                            value="report"
                            className="flex items-center gap-2 px-4 py-3 data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-400 text-slate-400 hover:text-white rounded-t-lg border-b-2 border-transparent data-[state=active]:border-cyan-400 transition-colors"
                        >
                            <FileText className="w-4 h-4" />
                            <span className="text-sm font-medium">Report</span>
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        </div>
    );
};