import React from "react";
import { Package } from "lucide-react";
import { Employee } from "@/types/employee";
import { EmployeeSelector } from "./EmployeeSelector";
import { PinInput } from "./PinInput";
import { LoginActions } from "./LoginActions";

interface LoginPanelProps {
    employees: Employee[];
    selectedEmployee: Employee | null;
    pin: string[];
    isError: boolean;
    errorMessage: string;
    isPinComplete: boolean;
    isLoading: boolean; // ✅ Tambahkan prop
    inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
    onSelectEmployee: (employee: Employee) => void;
    onPinChange: (index: number, value: string) => void;
    onKeyDown: (index: number, e: React.KeyboardEvent<HTMLInputElement>) => void;
    onPaste: (e: React.ClipboardEvent) => void;
    onSubmit: (e: React.FormEvent) => void;
    onAddNewEmployee: () => void;
    setPin: (pin: string[]) => void;
    setIsError: (isError: boolean) => void;
}

export const LoginPanel: React.FC<LoginPanelProps> = ({
    employees,
    selectedEmployee,
    pin,
    isError,
    errorMessage,
    isPinComplete,
    isLoading, // ✅ Destructure prop
    inputRefs,
    onSelectEmployee,
    onPinChange,
    onKeyDown,
    onPaste,
    onSubmit,
    onAddNewEmployee,
    setPin,
    setIsError,
}) => {
    return (
        <div className="w-full md:w-1/2 bg-slate-900 flex items-center justify-center p-6 md:p-12">
            <div className="w-full max-w-md space-y-8">

                {/* Header - Logo & Title */}
                <div className="text-center space-y-6">
                    {/* Logo */}
                    <div className="flex items-center justify-center gap-3">
                        <div className="relative">
                            <Package className="w-8 h-8 text-cyan-400" aria-hidden="true" />
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                        </div>
                        <h1 className="text-2xl font-bold text-white">
                            Ware<span className="text-cyan-400">Track</span>
                        </h1>
                    </div>

                    {/* Title */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            Employee login
                        </h2>
                        <p className="text-slate-400 text-sm">
                            Choose your account to start work.
                        </p>
                    </div>
                </div>

                {/* Employee Selector */}
                <EmployeeSelector
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    onSelectEmployee={onSelectEmployee}
                />

                {/* PIN Input */}
                <PinInput
                    pin={pin}
                    setPin={setPin}
                    isError={isError}
                    setIsError={setIsError}
                    errorMessage={errorMessage}
                    disabled={!selectedEmployee}
                    inputRefs={inputRefs}
                    onPinChange={onPinChange}
                    onKeyDown={onKeyDown}
                    onPaste={onPaste}
                />

                {/* Login Actions */}
                <LoginActions
                    isPinComplete={isPinComplete}
                    selectedEmployee={selectedEmployee}
                    isLoading={isLoading} // ✅ Pass isLoading prop
                    onSubmit={onSubmit}
                    onAddNewEmployee={onAddNewEmployee}
                />

                {/* Footer Info */}
                <div className="pt-8 border-t border-slate-800">
                    <p className="text-xs text-slate-500 text-center">
                        Need help? Contact your administrator or IT support
                    </p>
                </div>

            </div>
        </div>
    );
};