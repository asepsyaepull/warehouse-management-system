"use client";

import React, { useState } from "react";
import { useEmployeeLogin } from "@/hooks/useEmployeeLogin";
import { EMPLOYEES } from "@/constants/employees";
import { WarehouseQuoteSection } from "./WarehouseQuoteSection";
import { LoginPanel } from "./LoginPanel";

const EmployeeLogin = () => {
    const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

    // ✅ Destructure isLoading dari hook
    const {
        selectedEmployee,
        pin,
        isError,
        errorMessage,
        isPinComplete,
        isLoading, // ✅ Tambahkan ini
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
                isLoading={isLoading} // ✅ Pass isLoading prop
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