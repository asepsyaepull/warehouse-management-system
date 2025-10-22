import React from "react";
import { Button } from "@/components/ui/button";
import { LoginActionsProps } from "@/types/employee";
import { Loader2 } from "lucide-react"; // ✅ Tambahkan import
import Link from "next/link";

// ✅ Update interface untuk include isLoading
interface UpdatedLoginActionsProps extends LoginActionsProps {
    isLoading?: boolean;
}

export const LoginActions: React.FC<UpdatedLoginActionsProps> = ({
    isPinComplete,
    selectedEmployee,
    onSubmit,
    onAddNewEmployee,
    isLoading = false, // ✅ Tambahkan prop
}) => {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            {/* Start Work Button dengan Loading State */}
            <Button
                type="submit"
                disabled={!selectedEmployee || !isPinComplete || isLoading} // ✅ Disable saat loading
                className={`
          w-full h-14 text-lg font-semibold rounded-xl
          transition-all duration-300
          ${isPinComplete && selectedEmployee && !isLoading
                        ? "bg-cyan-400 hover:bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 hover:scale-[1.02] active:scale-[0.98]"
                        : "bg-slate-700 text-slate-500 cursor-not-allowed"
                    }
        `}
                aria-label="Start work button"
            >
                {isLoading ? (
                    /* ✅ Loading state */
                    <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Logging in...
                    </span>
                ) : isPinComplete && selectedEmployee ? (
                    /* Active state */
                    <span className="flex items-center gap-2">
                        Start work
                        <svg
                            className="w-5 h-5 animate-bounce-right"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </span>
                ) : (
                    /* Disabled state */
                    "Start work"
                )}
            </Button>

            {/* Add New Employee Link */}
            <div className="text-center">
                <Link href="/register">
                    <Button
                        type="button"
                        variant="link"
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200 hover:underline"
                        aria-label="Add new employee"
                    >
                        <span className="flex items-center gap-1">
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
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