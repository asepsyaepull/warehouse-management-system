'use client';
import React, { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { ACCESS_LEVELS, EmployeeRegistrationData } from "@/types/employee";

interface RegisterStep3Props {
    formData: {
        accessLevel: string;
        profilePicture: File | null;
    };
    errors: Partial<Record<string, string>>;
    onChange: (field: keyof EmployeeRegistrationData, value: any) => void;
}

export const RegisterStep3: React.FC<RegisterStep3Props> = ({
    formData,
    errors,
    onChange,
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    /**
     * Handle file upload
     */
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Validasi file
            if (file.size > 5 * 1024 * 1024) {
                alert("File size must be less than 5 MB");
                return;
            }

            if (!["image/jpeg", "image/png"].includes(file.type)) {
                alert("Only JPG or PNG files are allowed");
                return;
            }

            // Set preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);

            onChange("profilePicture", file);
        }
    };

    return (
        <div className="space-y-6">
            {/* Access Level */}
            <div className="space-y-2">
                <Label htmlFor="accessLevel" className="text-sm font-medium text-slate-300">
                    System access level
                </Label>
                <Select value={formData.accessLevel} onValueChange={(value) => onChange("accessLevel", value)}>
                    <SelectTrigger
                        id="accessLevel"
                        className={cn(
                            "w-full h-12 bg-slate-800/50 border-slate-700 text-white",
                            "focus:border-cyan-400 focus:ring-cyan-400/20",
                            !formData.accessLevel && "text-slate-500",
                            errors.accessLevel && "border-red-500"
                        )}
                    >
                        <SelectValue placeholder="Select access level" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                        {ACCESS_LEVELS.map((level) => (
                            <SelectItem key={level.value} value={level.value} className="text-white hover:bg-slate-700">
                                {level.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {errors.accessLevel && (
                    <p className="text-xs text-red-400 mt-1">{errors.accessLevel}</p>
                )}
            </div>

            {/* Profile Picture Upload */}
            <div className="space-y-3">
                <Label className="text-sm font-medium text-slate-300">
                    Profile picture
                </Label>

                <div className="flex flex-col items-center gap-4">
                    {/* Avatar Preview */}
                    <Avatar className="w-24 h-24 border-4 border-slate-700">
                        {previewUrl ? (
                            <AvatarImage src={previewUrl} alt="Profile preview" />
                        ) : (
                            <AvatarFallback className="bg-slate-700">
                                <User className="w-12 h-12 text-slate-400" />
                            </AvatarFallback>
                        )}
                    </Avatar>

                    {/* Upload Info & Button */}
                    <div className="text-center space-y-3">
                        <p className="text-xs text-slate-400">
                            JPG or PNG, &lt; 5 MB.
                        </p>

                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/jpeg,image/png"
                            onChange={handleFileChange}
                            className="hidden"
                        />

                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => fileInputRef.current?.click()}
                            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                        >
                            <Upload className="w-4 h-4 mr-2" />
                            Upload new picture
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};