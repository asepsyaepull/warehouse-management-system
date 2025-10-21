import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { JOB_ROLES, EMPLOYMENT_TYPES, EmployeeRegistrationData } from "@/types/employee";

interface RegisterStep2Props {
    formData: {
        employeeId: string;
        jobRole: string;
        employmentType: string;
        dateOfJoining: string;
    };
    errors: Partial<Record<string, string>>;
    onChange: (field: keyof EmployeeRegistrationData, value: any) => void;
}

export const RegisterStep2: React.FC<RegisterStep2Props> = ({
    formData,
    errors,
    onChange,
}) => {
    return (
        <div className="space-y-5">
            {/* Employee ID */}
            <div className="space-y-2">
                <Label htmlFor="employeeId" className="text-sm font-medium text-slate-300">
                    Employee ID
                </Label>
                <Input
                    id="employeeId"
                    type="text"
                    placeholder="PS 12345"
                    value={formData.employeeId}
                    onChange={(e) => onChange("employeeId", e.target.value)}
                    className={cn(
                        "w-full h-12 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500",
                        "focus:border-cyan-400 focus:ring-cyan-400/20",
                        errors.employeeId && "border-red-500"
                    )}
                />
                {errors.employeeId && (
                    <p className="text-xs text-red-400 mt-1">{errors.employeeId}</p>
                )}
            </div>

            {/* Job Role */}
            <div className="space-y-2">
                <Label htmlFor="jobRole" className="text-sm font-medium text-slate-300">
                    Job role
                </Label>
                <Select value={formData.jobRole} onValueChange={(value) => onChange("jobRole", value)}>
                    <SelectTrigger
                        id="jobRole"
                        className={cn(
                            "w-full h-12 bg-slate-800/50 border-slate-700 text-white",
                            "focus:border-cyan-400 focus:ring-cyan-400/20",
                            !formData.jobRole && "text-slate-500",
                            errors.jobRole && "border-red-500"
                        )}
                    >
                        <SelectValue placeholder="Select job role" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                        {JOB_ROLES.map((role) => (
                            <SelectItem key={role.value} value={role.value} className="text-white hover:bg-slate-700">
                                {role.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {errors.jobRole && (
                    <p className="text-xs text-red-400 mt-1">{errors.jobRole}</p>
                )}
            </div>

            {/* Employment Type */}
            <div className="space-y-2">
                <Label htmlFor="employmentType" className="text-sm font-medium text-slate-300">
                    Employment type
                </Label>
                <Select value={formData.employmentType} onValueChange={(value) => onChange("employmentType", value)}>
                    <SelectTrigger
                        id="employmentType"
                        className={cn(
                            "w-full h-12 bg-slate-800/50 border-slate-700 text-white",
                            "focus:border-cyan-400 focus:ring-cyan-400/20",
                            !formData.employmentType && "text-slate-500",
                            errors.employmentType && "border-red-500"
                        )}
                    >
                        <SelectValue placeholder="Select employment type" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                        {EMPLOYMENT_TYPES.map((type) => (
                            <SelectItem key={type.value} value={type.value} className="text-white hover:bg-slate-700">
                                {type.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {errors.employmentType && (
                    <p className="text-xs text-red-400 mt-1">{errors.employmentType}</p>
                )}
            </div>

            {/* Date of Joining */}
            <div className="space-y-2">
                <Label htmlFor="dateOfJoining" className="text-sm font-medium text-slate-300">
                    Date of joining
                </Label>
                <div className="relative">
                    <Input
                        id="dateOfJoining"
                        type="date"
                        placeholder="Select date"
                        value={formData.dateOfJoining}
                        onChange={(e) => onChange("dateOfJoining", e.target.value)}
                        className={cn(
                            "w-full h-12 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500",
                            "focus:border-cyan-400 focus:ring-cyan-400/20",
                            errors.dateOfJoining && "border-red-500"
                        )}
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
                {errors.dateOfJoining && (
                    <p className="text-xs text-red-400 mt-1">{errors.dateOfJoining}</p>
                )}
            </div>
        </div>
    );
};