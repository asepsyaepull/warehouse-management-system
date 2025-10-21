/**
 * ============================================
 * CUSTOM HOOK: useEmployeeLogin
 * ============================================
 * Menangani semua logic untuk employee login
 * Memisahkan business logic dari UI components
 */

import { useState, useRef } from "react";
import { Employee, LoginCredentials } from "@/types/employee";
import { CONFIG } from "@/constants/employees";

export const useEmployeeLogin = () => {
    // ============================================
    // STATE MANAGEMENT
    // ============================================

    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
    const [pin, setPin] = useState<string[]>(Array(CONFIG.PIN_LENGTH).fill(""));
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedEmployee || !isPinComplete) return;

        setIsLoading(true);

        const enteredPin = pin.join("");
        const credentials: LoginCredentials = {
            employeeId: selectedEmployee.id,
            pin: enteredPin,
        };

        try {
            // TODO: Replace with actual API call
            // const response = await authenticateEmployee(credentials);

            // Simulasi API call
            await new Promise(resolve => setTimeout(resolve, 500));

            if (enteredPin === CONFIG.CORRECT_PIN) {
                console.log("✅ Login successful!", {
                    employee: selectedEmployee.name,
                    role: selectedEmployee.role,
                    timestamp: new Date().toISOString(),
                });

                // TODO: Navigate to dashboard
                // router.push("/dashboard");
            } else {
                throw new Error("Invalid PIN");
            }
        } catch (error) {
            setIsError(true);
            setErrorMessage("Invalid PIN. Please try again.");

            setTimeout(() => {
                resetPin();
                inputRefs.current[0]?.focus();
            }, CONFIG.ERROR_RESET_DELAY);
        } finally {
            setIsLoading(false);
        }
    };

    /**
     * Handle add new employee
     */
    const handleAddNewEmployee = () => {
        console.log("Navigate to: /employees/new");
        // TODO: Implement navigation
        // router.push("/employees/new");
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