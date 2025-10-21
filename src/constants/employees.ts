import { Employee } from "@/types/employee";

export const EMPLOYEES: Employee[] = [
    {
        id: "1",
        name: "Ralph Edwards",
        role: "Driver assistent",
        avatar: "/avatars/ralph.jpg",
        initials: "RE",
    },
    {
        id: "2",
        name: "John Doe",
        role: "Warehouse Manager",
        avatar: "/avatars/john.jpg",
        initials: "JD",
    },
    {
        id: "3",
        name: "Jane Smith",
        role: "Inventory Clerk",
        avatar: "/avatars/jane.jpg",
        initials: "JS",
    },
    {
        id: "4",
        name: "Michael Brown",
        role: "Forklift Operator",
        avatar: "/avatars/michael.jpg",
        initials: "MB",
    },
];

/**
 * Warehouse quotes untuk carousel
 */
export const WAREHOUSE_QUOTES = [
    {
        id: "1",
        text: "In the warehouse, every box moved is a step closer to progress, and every aisle walked is a path toward teamwork.",
        author: "WareTrack Company, Author",
    },
    {
        id: "2",
        text: "Excellence in logistics starts with attention to detail and ends with customer satisfaction.",
        author: "WareTrack Company, Author",
    },
    {
        id: "3",
        text: "A well-organized warehouse is the backbone of efficient supply chain management.",
        author: "WareTrack Company, Author",
    },
];

/**
 * Configuration constants
 */
export const CONFIG = {
    PIN_LENGTH: 6,
    CORRECT_PIN: "123456", // Dummy - ganti dengan API validation
    ERROR_RESET_DELAY: 1500,
    FOCUS_DELAY: 100,
} as const;