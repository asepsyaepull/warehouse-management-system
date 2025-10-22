"use client";

import { useState, useEffect } from "react";
import { DashboardData } from "@/types/dashboard";
import { MOCK_DASHBOARD_POPULATED, MOCK_DASHBOARD_EMPTY } from "@/lib/mockData";

export const useDashboardData = () => {
    const [data, setData] = useState<DashboardData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    /**
     * Fetch dashboard data
     * Dalam production, ganti dengan actual API call
     */
    const fetchDashboardData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            // Simulasi API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // TODO: Replace dengan actual API call
            // const response = await fetch("/api/dashboard");
            // const data = await response.json();

            // Untuk demo, toggle antara populated dan empty
            // Uncomment salah satu:
            setData(MOCK_DASHBOARD_POPULATED); // Dashboard dengan data
            // setData(MOCK_DASHBOARD_EMPTY);     // Dashboard kosong

        } catch (err) {
            setError("Failed to fetch dashboard data");
            console.error("Dashboard fetch error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    /**
     * Refresh data
     */
    const refreshData = () => {
        fetchDashboardData();
    };

    // Initial fetch
    useEffect(() => {
        fetchDashboardData();
    }, []);

    return {
        data,
        isLoading,
        error,
        refreshData,
    };
};