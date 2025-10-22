import { useState, useRef } from "react";
import { useRouter } from "next/navigation"; // ✅ Pastikan ini untuk App Router
// import { useRouter } from "next/router"; // ❌ Jangan pakai ini jika App Router
import { Employee, LoginCredentials } from "@/types/employee";
import { CONFIG } from "@/constants/employees";

export const useEmployeeLogin = () => {
    const router = useRouter();

    // ============================================
    // STATE MANAGEMENT
    // ============================================

    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
    const [pin, setPin] = useState<string[]>(Array(CONFIG.PIN_LENGTH).fill(""));
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(false);

    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // ============================================
    // COMPUTED VALUES
    // ============================================

    const isPinComplete = pin.every((digit) => digit !== "");

    // ============================================
    // HANDLERS
    // ============================================

    /**
     * Handle perubahan input PIN
     */
    const handlePinChange = (index: number, value: string) => {
        if (value && !/^\d$/.test(value)) return;

        const newPin = [...pin];
        newPin[index] = value;
        setPin(newPin);
        setIsError(false);

        if (value && index < CONFIG.PIN_LENGTH - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    /**
     * Handle keyboard navigation
     */
    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !pin[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }

        if (e.key === "ArrowLeft" && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }

        if (e.key === "ArrowRight" && index < CONFIG.PIN_LENGTH - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    /**
     * Handle paste PIN
     */
    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").trim();

        const pinRegex = new RegExp(`^\\d{${CONFIG.PIN_LENGTH}}$`);
        if (pinRegex.test(pastedData)) {
            const newPin = pastedData.split("");
            setPin(newPin);
            setIsError(false);
            inputRefs.current[CONFIG.PIN_LENGTH - 1]?.focus();
        }
    };

    /**
     * Handle employee selection
     */
    const handleSelectEmployee = (employee: Employee) => {
        setSelectedEmployee(employee);
        resetPin();
        setTimeout(() => inputRefs.current[0]?.focus(), CONFIG.FOCUS_DELAY);
    };

    /**
     * Reset PIN input
     */
    const resetPin = () => {
        setPin(Array(CONFIG.PIN_LENGTH).fill(""));
        setIsError(false);
        setErrorMessage("");
    };

    /**
     * Handle login submit
     * ✅ SIMPLIFIED: Single redirect strategy
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedEmployee || !isPinComplete) return;

        setIsLoading(true);
        setIsError(false);
        setErrorMessage("");

        const enteredPin = pin.join("");
        const credentials: LoginCredentials = {
            employeeId: selectedEmployee.id,
            pin: enteredPin,
        };

        try {
            // Simulasi API call
            await new Promise(resolve => setTimeout(resolve, 800));

            if (enteredPin === CONFIG.CORRECT_PIN) {
                // Session data
                const sessionData = {
                    id: selectedEmployee.id,
                    name: selectedEmployee.name,
                    role: selectedEmployee.role,
                    avatar: selectedEmployee.avatar,
                    loginTime: new Date().toISOString(),
                    accessToken: `mock_token_${selectedEmployee.id}_${Date.now()}`,
                    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
                };

                // Simpan ke localStorage
                if (typeof window !== "undefined") {
                    localStorage.setItem("currentUser", JSON.stringify(sessionData));
                    localStorage.setItem("isAuthenticated", "true");
                    console.log("✅ Login successful!", sessionData);
                }

                setIsRedirecting(true);

                // ✅ Single redirect strategy
                console.log("🔄 Redirecting to /dashboard...");

                // Method 1: Next.js Router (preferred)
                router.push("/dashboard");

                // Method 2: Force reload after short delay (backup)
                setTimeout(() => {
                    if (window.location.pathname !== "/dashboard") {
                        console.log("⚠️ Fallback: Using window.location");
                        window.location.href = "/dashboard";
                    }
                }, 1000);

            } else {
                throw new Error("Invalid PIN");
            }
        } catch (error) {
            console.error("❌ Login error:", error);

            setIsError(true);
            setErrorMessage(
                error instanceof Error && error.message === "Invalid PIN"
                    ? "Invalid PIN. Please try again."
                    : "Login failed. Please try again."
            );

            setTimeout(() => {
                resetPin();
                inputRefs.current[0]?.focus();
            }, CONFIG.ERROR_RESET_DELAY);

            setIsRedirecting(false);
            setIsLoading(false);
        }
    };

    /**
     * Handle add new employee
     * Better navigation handling
     */
    const handleAddNewEmployee = () => {
        try {
            console.log("📝 Navigate to: /register");
            router.push("/register");
        } catch (error) {
            console.error("❌ Navigation failed:", error);
            setErrorMessage("Failed to navigate to registration page");
        }
    };

    // ============================================
    // RETURN VALUES
    // ============================================

    return {
        // State
        selectedEmployee,
        pin,
        isError,
        errorMessage,
        isLoading,
        isPinComplete,
        inputRefs,
        isRedirecting,

        // Handlers
        handlePinChange,
        handleKeyDown,
        handlePaste,
        handleSelectEmployee,
        handleSubmit,
        handleAddNewEmployee,
        setPin,
        setIsError,
    };
};