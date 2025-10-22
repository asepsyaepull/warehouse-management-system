import { DashboardData } from "@/types/dashboard";

/**
 * Mock data - Dashboard POPULATED
 */
export const MOCK_DASHBOARD_POPULATED: DashboardData = {
    isEmpty: false,
    dateRange: {
        from: "Jan 2024",
        to: "Feb 2024",
    },
    stats: {
        totalProductInStock: 52500,
        totalProductSold: 19820,
        productInInventory: 29960,
        productInventoryChange: 17,
        productBeenSold: 18960,
        productSoldChange: -0.6,
        productReturned: 960,
        productReturnedChange: -0.2,
    },
    productStock: [
        { date: "Wed 12", productInStock: 75000, productSold: 60000 },
        { date: "Thu 13", productInStock: 100000, productSold: 50000 },
        { date: "Fri 14", productInStock: 125000, productSold: 85000 },
        { date: "Sat 15", productInStock: 40000, productSold: 115000 },
        { date: "Sun 16", productInStock: 95000, productSold: 120000 },
        { date: "Mon 17", productInStock: 70000, productSold: 105000 },
        { date: "Tue 17", productInStock: 30000, productSold: 95000 },
    ],
    bestSellingProducts: [
        { name: "Ultramilk 360gr", value: 2528, percentage: 34, color: "#FF8A65" },
        { name: "Other products", value: 2103, percentage: 30, color: "#64748B" },
        { name: "Beng - beng 230gr", value: 1416, percentage: 25, color: "#5DD3C7" },
        { name: "Minyak sanco 2lt", value: 903, percentage: 15, color: "#4FC3B3" },
    ],
    vehicles: [
        {
            id: "1",
            name: "DD 3146 XRP",
            type: "Medium Truck",
            brand: "Daihatsu Luxio",
            performance: 27,
            status: "danger",
            warnings: 5,
        },
        {
            id: "2",
            name: "DD 3147 XRP",
            type: "Mini Van",
            brand: "Toyota Hiace",
            performance: 80,
            status: "good",
            warnings: 1,
        },
    ],
    lowStockProducts: [
        {
            id: "1",
            name: "Fanta Strawberry",
            volume: "250ml",
            sold: 1200,
            inStock: 120,
            changePercentage: -0.4,
            trend: "down",
            image: "/products/fanta.png",
        },
        {
            id: "2",
            name: "Royco Ayam",
            volume: "150ml",
            sold: 2200,
            inStock: 90,
            changePercentage: 0.7,
            trend: "up",
            image: "/products/royco.png",
        },
    ],
};

/**
 * Mock data - Dashboard EMPTY
 */
export const MOCK_DASHBOARD_EMPTY: DashboardData = {
    isEmpty: true,
    dateRange: {
        from: "Jan 2024",
        to: "Feb 2024",
    },
    stats: {
        totalProductInStock: 0,
        totalProductSold: 0,
        productInInventory: 0,
        productInventoryChange: 0,
        productBeenSold: 0,
        productSoldChange: 0,
        productReturned: 0,
        productReturnedChange: 0,
    },
    productStock: [],
    bestSellingProducts: [],
    vehicles: [],
    lowStockProducts: [],
};