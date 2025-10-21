import React from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";
import { EmployeeSelectorProps } from "@/types/employee";

export const EmployeeSelector: React.FC<EmployeeSelectorProps> = ({
    employees,
    selectedEmployee,
    onSelectEmployee,
}) => {
    return (
        <div className="space-y-2">
            <label
                htmlFor="employee-selector"
                className="text-sm font-medium text-slate-300 block"
            >
                Select Employee
            </label>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        id="employee-selector"
                        variant="outline"
                        className="w-full h-auto py-3 sm:py-4 px-3 sm:px-4 bg-slate-800/50 border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all duration-200"
                        aria-label="Select employee account"
                    >
                        {selectedEmployee ? (
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-cyan-400/20">
                                        <AvatarImage
                                            src={selectedEmployee.avatar}
                                            alt={`${selectedEmployee.name} avatar`}
                                        />
                                        <AvatarFallback className="bg-cyan-400/10 text-cyan-400 font-semibold text-xs sm:text-sm">
                                            {selectedEmployee.initials}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="text-left">
                                        <p className="font-semibold text-white text-sm sm:text-base">{selectedEmployee.name}</p>
                                        <p className="text-xs text-slate-400">{selectedEmployee.role}</p>
                                    </div>
                                </div>
                                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 transition-transform duration-200" aria-hidden="true" />
                            </div>
                        ) : (
                            <div className="flex items-center justify-between w-full">
                                <span className="text-slate-400 text-sm sm:text-base">Select an employee</span>
                                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" aria-hidden="true" />
                            </div>
                        )}
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    className="w-[var(--radix-dropdown-menu-trigger-width)] bg-slate-800 border-slate-700 p-1.5 sm:p-2"
                    align="start"
                    sideOffset={8}
                >
                    {employees.map((employee) => (
                        <DropdownMenuItem
                            key={employee.id}
                            onClick={() => onSelectEmployee(employee)}
                            className="cursor-pointer p-2 sm:p-3 rounded-md hover:bg-slate-700 focus:bg-slate-700 transition-colors duration-150"
                        >
                            <div className="flex items-center gap-2 sm:gap-3 w-full">
                                <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-slate-600">
                                    <AvatarImage
                                        src={employee.avatar}
                                        alt={`${employee.name} avatar`}
                                    />
                                    <AvatarFallback className="bg-slate-700 text-slate-300 font-semibold text-xs sm:text-sm">
                                        {employee.initials}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-white text-xs sm:text-sm truncate">{employee.name}</p>
                                    <p className="text-xs text-slate-400 truncate">{employee.role}</p>
                                </div>
                                {selectedEmployee?.id === employee.id && (
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse flex-shrink-0" aria-label="Currently selected" />
                                )}
                            </div>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};