import React from "react";
import { Button } from "@/components/ui/button";
import { LoginActionsProps } from "@/types/employee";
import Link from "next/link";

export const LoginActions: React.FC<LoginActionsProps> = ({
    isPinComplete,
    selectedEmployee,
    onSubmit,
    onAddNewEmployee,
}) => {
    return (
        <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4">
            {/* Start Work Button */}
            <Button
                type="submit"
                disabled={!selectedEmployee || !isPinComplete}
                className={`
            w-full h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-xl
            transition-all duration-300
            ${isPinComplete && selectedEmployee
                        ? "bg-cyan-400 hover:bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 hover:scale-[1.02] active:scale-[0.98]"
                        : "bg-slate-700 text-slate-500 cursor-not-allowed"
                    }
        `}
                aria-label="Start work button"
            >
                {isPinComplete && selectedEmployee ? (
                    <span className="flex items-center gap-2">
                        Start work
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce-right"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </span>
                ) : (
                    "Start work"
                )}
            </Button>

            {/* Add New Employee Link */}
            <div className="text-center">
                <Link href="/register"> {/* ✅ Update dengan Link */}
                    <Button
                        type="button"
                        variant="link"
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200 hover:underline"
                    >
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add new employee
                        </span>
                    </Button>
                </Link>
            </div>
        </form>
    );
};