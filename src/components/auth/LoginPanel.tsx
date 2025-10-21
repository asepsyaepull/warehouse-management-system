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
        <div className="w-full min-h-screen md:w-1/2 bg-slate-900 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="w-full max-w-md space-y-6 sm:space-y-8">

                {/* Header - Logo & Title */}
                <div className="text-center space-y-4 sm:space-y-6">
                    {/* Logo */}
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <div className="relative">
                            <Package className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400" aria-hidden="true" />
                            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-cyan-400 rounded-full animate-pulse" />
                        </div>
                        <h1 className="text-xl sm:text-2xl font-bold text-white">
                            Ware<span className="text-cyan-400">Track</span>
                        </h1>
                    </div>

                    {/* Title */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                            Employee login
                        </h2>
                        <p className="text-slate-400 text-xs sm:text-sm">
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
                    onSubmit={onSubmit}
                    onAddNewEmployee={onAddNewEmployee}
                />

                {/* Footer Info */}
                <div className="pt-6 sm:pt-8 border-t border-slate-800">
                    <p className="text-xs text-slate-500 text-center px-4">
                        Need help? Contact your administrator or IT support
                    </p>
                </div>

            </div>
        </div>
    );
};