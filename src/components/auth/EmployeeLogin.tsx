"use client";

import React, { useState } from "react";
import { useEmployeeLogin } from "@/hooks/useEmployeeLogin";
import { EMPLOYEES } from "@/constants/employees";
import { WarehouseQuoteSection } from "./WarehouseQuoteSection";
import { LoginPanel } from "./LoginPanel";

/**
 * Main Employee Login Component
 * Halaman login untuk karyawan warehouse
 */
const EmployeeLogin = () => {
    // State untuk carousel quotes
    const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

    // Custom hook untuk login logic
    const {
        selectedEmployee,
        pin,
        isError,
        errorMessage,
        isPinComplete,
        inputRefs,
        handlePinChange,
        handleKeyDown,
        handlePaste,
        handleSelectEmployee,
        handleSubmit,
        handleAddNewEmployee,
        setPin,
        setIsError,
    } = useEmployeeLogin();

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Kolom Kiri: Warehouse Quote */}
            <WarehouseQuoteSection
                activeQuoteIndex={activeQuoteIndex}
                onQuoteChange={setActiveQuoteIndex}
            />

            {/* Kolom Kanan: Login Panel */}
            <LoginPanel
                employees={EMPLOYEES}
                selectedEmployee={selectedEmployee}
                pin={pin}
                isError={isError}
                errorMessage={errorMessage}
                isPinComplete={isPinComplete}
                inputRefs={inputRefs}
                onSelectEmployee={handleSelectEmployee}
                onPinChange={handlePinChange}
                onKeyDown={handleKeyDown}
                onPaste={handlePaste}
                onSubmit={handleSubmit}
                onAddNewEmployee={handleAddNewEmployee}
                setPin={setPin}
                setIsError={setIsError}
            />
        </div>
    );
};

export default EmployeeLogin;