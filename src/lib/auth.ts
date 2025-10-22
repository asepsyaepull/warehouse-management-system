import { LoginCredentials, LoginResponse, UserSession } from "@/types/employee";

/**
 * Authenticate employee login via API
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
 * ✅ Store user session di localStorage
 */
export function storeUserSession(user: UserSession): void {
    if (typeof window !== "undefined") {
        localStorage.setItem("currentUser", JSON.stringify(user));
    }
}

/**
 * ✅ Get current user session
 */
export function getCurrentUser(): UserSession | null {
    if (typeof window !== "undefined") {
        const userStr = localStorage.getItem("currentUser");
        if (userStr) {
            try {
                return JSON.parse(userStr);
            } catch {
                return null;
            }
        }
    }
    return null;
}

/**
 * ✅ Check if user is authenticated
 */
export function isAuthenticated(): boolean {
    return getCurrentUser() !== null;
}

/**
 * ✅ Logout user
 */
export function logout(): void {
    if (typeof window !== "undefined") {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("authToken");
        window.location.href = "/login";
    }
}

/**
 * Store authentication token
 */
export function storeAuthToken(token: string): void {
    if (typeof window !== "undefined") {
        localStorage.setItem("authToken", token);
    }
}

/**
 * Get stored authentication token
 */
export function getAuthToken(): string | null {
    if (typeof window !== "undefined") {
        return localStorage.getItem("authToken");
    }
    return null;
}

/**
 * Clear authentication token (logout)
 */
export function clearAuthToken(): void {
    if (typeof window !== "undefined") {
        localStorage.removeItem("authToken");
    }
}