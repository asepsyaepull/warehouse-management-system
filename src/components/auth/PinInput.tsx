import React from "react";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { PinInputProps } from "@/types/employee";
import { CONFIG } from "@/constants/employees";

export const PinInput: React.FC<PinInputProps & {
    inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
    onPinChange: (index: number, value: string) => void;
    onKeyDown: (index: number, e: React.KeyboardEvent<HTMLInputElement>) => void;
    onPaste: (e: React.ClipboardEvent) => void;
}> = ({
    pin,
    isError,
    errorMessage,
    disabled,
    inputRefs,
    onPinChange,
    onKeyDown,
    onPaste,
}) => {
        return (
            <div className="space-y-3">
                <label
                    htmlFor="pin-input-0"
                    className="text-sm font-medium text-slate-300 block"
                >
                    Enter your PIN to validate yourself.
                </label>

                {/* PIN Input Grid */}
                <div
                    className="flex gap-1.5 sm:gap-2 md:gap-3 justify-center"
                    onPaste={onPaste}
                    role="group"
                    aria-label={`${CONFIG.PIN_LENGTH}-digit PIN input`}
                >
                    {pin.map((digit, index) => (
                        <div key={index} className="relative">
                            <Input
                                ref={(el) => { inputRefs.current[index] = el; }}
                                id={`pin-input-${index}`}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => onPinChange(index, e.target.value)}
                                onKeyDown={(e) => onKeyDown(index, e)}
                                disabled={disabled}
                                className={`
                w-10 h-12 sm:w-12 sm:h-14 md:w-14 md:h-16 
                text-center text-xl sm:text-2xl font-bold
                rounded-xl sm:rounded-2xl
                bg-slate-800/50 
                border-2
                transition-all duration-300
                focus:scale-110 focus:shadow-lg focus:shadow-cyan-400/20
                disabled:opacity-50 disabled:cursor-not-allowed
                ${digit ? "border-cyan-400 bg-slate-800" : "border-slate-700"}
                ${isError ? "border-red-500 animate-shake" : ""}
              `}
                                aria-label={`PIN digit ${index + 1}`}
                                aria-invalid={isError}
                                autoComplete="off"
                            />

                            {/* Bullet mask */}
                            {digit && (
                                <div
                                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                    aria-hidden="true"
                                >
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-cyan-400 rounded-full animate-scale-in" />
                                </div>
                            )}

                            {/* Active indicator */}
                            {index === pin.findIndex(p => p === "") && !disabled && !isError && (
                                <div
                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-0.5 bg-cyan-400 animate-pulse"
                                    aria-hidden="true"
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Error Alert */}
                {isError && (
                    <Alert
                        variant="destructive"
                        className="bg-red-500/10 border-red-500/50 animate-fade-in"
                    >
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription className="text-red-400 text-sm">
                            {errorMessage}
                        </AlertDescription>
                    </Alert>
                )}

                {/* Helper Text */}
                {!isError && !disabled && (
                    <p className="text-xs text-slate-500 text-center animate-fade-in">
                        Enter your {CONFIG.PIN_LENGTH}-digit PIN to continue
                    </p>
                )}
            </div>
        );
    };