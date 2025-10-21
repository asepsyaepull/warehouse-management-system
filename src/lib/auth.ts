/**
 * ============================================
 * AUTHENTICATION UTILITIES
 * ============================================
 * Helper functions untuk authentication
 */

import { LoginCredentials, LoginResponse } from "@/types/employee";

/**
 * Authenticate employee login via API
 * @param credentials - Employee ID dan PIN
 * @returns Promise dengan login response
 */
export async function authenticateEmployee(
    credentials: LoginCredentials
): Promise<LoginResponse> {
    try {
        const response = await fetch("/api/auth/employee/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error("Authentication failed");
        }

        const data: LoginResponse = await response.json();
        return data;
    } catch (error) {
        console.error("Authentication error:", error);
        return {
            success: false,
            message: "An error occurred during login. Please try again.",
        };
    }
}

/**
 * Store authentication token
 * @param token - JWT token dari server
 */
export function storeAuthToken(token: string): void {
    if (typeof window !== "undefined") {
        localStorage.setItem("authToken", token);
        // Atau gunakan httpOnly cookies untuk security yang lebih baik
    }
}

/**
 * Get stored authentication token
 * @returns Auth token atau null
 */
export function getAuthToken(): string | null {
    if (typeof window !== "undefined") {
        return localStorage.getItem("authToken");
    }
    return null;
}

/**
 * Remove authentication token (logout)
 */
export function clearAuthToken(): void {
    if (typeof window !== "undefined") {
        localStorage.removeItem("authToken");
    }
}

/**
 * Check if user is authenticated
 * @returns Boolean indicating auth status
 */
export function isAuthenticated(): boolean {
    return getAuthToken() !== null;
}