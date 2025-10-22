/**
 * Product stock data untuk bar chart
 */
export interface ProductStockData {
    date: string;
    productInStock: number;
    productSold: number;
}

/**
 * Best selling product untuk pie chart
 */
export interface BestSellingProduct {
    name: string;
    value: number;
    color: string;
    [key: string]: any;
}

/**
 * Vehicle performance data
 */
export interface VehiclePerformance {
    id: string;
    name: string;
    type: string;
    brand: string;
    performance: number;
    status: "good" | "warning" | "danger";
    warnings: number;
}

/**
 * Low stock product
 */
export interface LowStockProduct {
    id: string;
    name: string;
    volume: string;
    sold: number;
    inStock: number;
    changePercentage: number;
    image: string;
    trend: "up" | "down";
}

/**
 * Dashboard summary stats
 */
export interface DashboardStats {
    totalProductInStock: number;
    totalProductSold: number;
    productInInventory: number;
    productInventoryChange: number;
    productBeenSold: number;
    productSoldChange: number;
    productReturned: number;
    productReturnedChange: number;
}

/**
 * Complete dashboard data
 */
export interface DashboardData {
    stats: DashboardStats;
    productStock: ProductStockData[];
    bestSellingProducts: BestSellingProduct[];
    vehicles: VehiclePerformance[];
    lowStockProducts: LowStockProduct[];
    isEmpty: boolean;
    dateRange: {
        from: string;
        to: string;
    };
}