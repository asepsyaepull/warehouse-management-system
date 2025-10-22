"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { ProductStock } from "@/components/dashboard/ProductStock";
import { BestSellingProducts } from "@/components/dashboard/BestSellingProducts";
import { VehiclePerformance } from "@/components/dashboard/VehiclePerformance";
import { LowStockProducts } from "@/components/dashboard/LowStockProducts";
import { useDashboardData } from "@/hooks/useDashboardData";
import { isAuthenticated } from "@/lib/auth";
import { Loader2 } from "lucide-react";

export default function DashboardPage() {
    const router = useRouter();
    const { data, isLoading, error } = useDashboardData();

    // Check authentication saat component mount
    useEffect(() => {
        if (!isAuthenticated()) {
            // Redirect ke login jika belum authenticated
            router.push("/login");
        }
    }, [router]);

    // Loading state
    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 text-cyan-400 animate-spin mx-auto mb-4" />
                    <p className="text-slate-400">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    // Error state
    if (error || !data) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-400 mb-4">{error || "Failed to load dashboard"}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="text-cyan-400 hover:underline"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950">
            <DashboardHeader dateRange={data.dateRange} />
            <DashboardNav />

            <main className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Dashboard
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div className="lg:col-span-2">
                        <ProductStock
                            data={data.productStock}
                            stats={data.stats}
                            isEmpty={data.isEmpty}
                        />
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                        <BestSellingProducts
                            data={data.bestSellingProducts}
                            isEmpty={data.isEmpty}
                        />
                        <VehiclePerformance
                            data={data.vehicles}
                            isEmpty={data.isEmpty}
                        />
                    </div>

                    <div className="lg:col-span-3">
                        <LowStockProducts
                            data={data.lowStockProducts}
                            isEmpty={data.isEmpty}
                        />
                    </div>
                </div>

                <div className="h-20" />
            </main>
        </div>
    );
}