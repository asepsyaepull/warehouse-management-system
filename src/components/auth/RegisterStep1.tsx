import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { EmployeeRegistrationData } from "@/types/employee";

interface RegisterStep1Props {
    formData: {
        fullName: string;
        dateOfBirth: string;
        contactNumber: string;
        address: string;
        emergencyContact: string;
    };
    errors: Partial<Record<string, string>>;
    onChange: (field: keyof EmployeeRegistrationData, value: any) => void;
}

export const RegisterStep1: React.FC<RegisterStep1Props> = ({
    formData,
    errors,
    onChange,
}) => {
    return (
        <div className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium text-slate-300">
                    Full name
                </Label>
                <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter name"
                    value={formData.fullName}
                    onChange={(e) => onChange("fullName", e.target.value)}
                    className={cn(
                        "w-full h-12 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500",
                        "focus:border-cyan-400 focus:ring-cyan-400/20",
                        errors.fullName && "border-red-500"
                    )}
                />
                {errors.fullName && (
                    <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>
                )}
            </div>

            {/* Date of Birth */}
            <div className="space-y-2">
                <Label htmlFor="dateOfBirth" className="text-sm font-medium text-slate-300">
                    Date of birth
                </Label>
                <div className="relative">
                    <Input
                        id="dateOfBirth"
                        type="date"
                        placeholder="Select date of birth"
                        value={formData.dateOfBirth}
                        onChange={(e) => onChange("dateOfBirth", e.target.value)}
                        className={cn(
                            "w-full h-12 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500",
                            "focus:border-cyan-400 focus:ring-cyan-400/20",
                            errors.dateOfBirth && "border-red-500"
                        )}
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
                {errors.dateOfBirth && (
                    <p className="text-xs text-red-400 mt-1">{errors.dateOfBirth}</p>
                )}
            </div>

            {/* Contact Number */}
            <div className="space-y-2">
                <Label htmlFor="contactNumber" className="text-sm font-medium text-slate-300">
                    Contact number
                </Label>
                <Input
                    id="contactNumber"
                    type="tel"
                    placeholder="Enter contact number"
                    value={formData.contactNumber}
                    onChange={(e) => onChange("contactNumber", e.target.value)}
                    className={cn(
                        "w-full h-12 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500",
                        "focus:border-cyan-400 focus:ring-cyan-400/20",
                        errors.contactNumber && "border-red-500"
                    )}
                />
                {errors.contactNumber && (
                    <p className="text-xs text-red-400 mt-1">{errors.contactNumber}</p>
                )}
            </div>

            {/* Address */}
            <div className="space-y-2">
                <Label htmlFor="address" className="text-sm font-medium text-slate-300">
                    Address
                </Label>
                <Textarea
                    id="address"
                    placeholder="Enter address"
                    value={formData.address}
                    onChange={(e) => onChange("address", e.target.value)}
                    rows={3}
                    className={cn(
                        "w-full bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 resize-none",
                        "focus:border-cyan-400 focus:ring-cyan-400/20",
                        errors.address && "border-red-500"
                    )}
                />
                {errors.address && (
                    <p className="text-xs text-red-400 mt-1">{errors.address}</p>
                )}
            </div>

            {/* Emergency Contact */}
            <div className="space-y-2">
                <Label htmlFor="emergencyContact" className="text-sm font-medium text-slate-300">
                    Emergency contact
                </Label>
                <Input
                    id="emergencyContact"
                    type="text"
                    placeholder="Enter emergency contact"
                    value={formData.emergencyContact}
                    onChange={(e) => onChange("emergencyContact", e.target.value)}
                    className={cn(
                        "w-full h-12 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500",
                        "focus:border-cyan-400 focus:ring-cyan-400/20",
                        errors.emergencyContact && "border-red-500"
                    )}
                />
                {errors.emergencyContact && (
                    <p className="text-xs text-red-400 mt-1">{errors.emergencyContact}</p>
                )}
            </div>
        </div>
    );
};