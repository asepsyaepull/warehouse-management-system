"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20" />

            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
                            <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                                ✨ Trusted by 500+ warehouses worldwide
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            Smart Warehouse Management for{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                                Modern Businesses
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                            Streamline your inventory, logistics, and operations with
                            real-time accuracy and effortless control. Transform chaos into
                            clarity.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="text-base group">
                                Start Free Trial
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button size="lg" variant="ghost" className="text-base">
                                <Play className="mr-2 h-5 w-5" />
                                View Demo
                            </Button>
                        </div>

                        <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 border-2 border-background" />
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-background" />
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-background" />
                                </div>
                                <span>Loved by teams</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-yellow-500">★★★★★</span>
                                <span>4.9/5 rating</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-2xl blur-3xl opacity-20 animate-pulse" />
                        <div className="relative bg-card border border-border rounded-2xl shadow-2xl p-8 space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-sm text-muted-foreground">Total Inventory</p>
                                    <p className="text-3xl font-bold">24,892</p>
                                </div>
                                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                                    <ArrowRight className="rotate-[-45deg] h-5 w-5" />
                                    <span className="text-lg font-semibold">+12%</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
                                    <span className="text-sm font-medium">Active Orders</span>
                                    <span className="text-sm font-bold">348</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
                                    <span className="text-sm font-medium">Pending Shipments</span>
                                    <span className="text-sm font-bold">127</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
                                    <span className="text-sm font-medium">Stock Alerts</span>
                                    <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
                                        23
                                    </span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-border">
                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                    <span>Last updated</span>
                                    <span>2 minutes ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}