"use client";

import { useState } from "react";
import { EmployeeRegistrationData } from "@/types/employee";

export const useEmployeeRegister = () => {
    // Current step (1, 2, or 3)
    const [currentStep, setCurrentStep] = useState(1);

    // Form data untuk semua steps
    const [formData, setFormData] = useState<EmployeeRegistrationData>({
        fullName: "",
        dateOfBirth: "",
        contactNumber: "",
        address: "",
        emergencyContact: "",
        employeeId: "",
        jobRole: "",
        employmentType: "",
        dateOfJoining: "",
        accessLevel: "",
        profilePicture: null,
    });

    // Error states
    const [errors, setErrors] = useState<Partial<Record<keyof EmployeeRegistrationData, string>>>({});

    // Loading state
    const [isSubmitting, setIsSubmitting] = useState(false);

    /**
     * Update form data
     */
    const updateFormData = (field: keyof EmployeeRegistrationData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error saat user mulai mengetik
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    /**
     * Validasi Step 1: Personal Information
     */
    const validateStep1 = (): boolean => {
        const newErrors: Partial<Record<keyof EmployeeRegistrationData, string>> = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }
        if (!formData.dateOfBirth) {
            newErrors.dateOfBirth = "Date of birth is required";
        }
        if (!formData.contactNumber.trim()) {
            newErrors.contactNumber = "Contact number is required";
        } else if (!/^[0-9+\-\s()]+$/.test(formData.contactNumber)) {
            newErrors.contactNumber = "Invalid contact number format";
        }
        if (!formData.address.trim()) {
            newErrors.address = "Address is required";
        }
        if (!formData.emergencyContact.trim()) {
            newErrors.emergencyContact = "Emergency contact is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /**
     * Validasi Step 2: Job Details
     */
    const validateStep2 = (): boolean => {
        const newErrors: Partial<Record<keyof EmployeeRegistrationData, string>> = {};

        if (!formData.employeeId.trim()) {
            newErrors.employeeId = "Employee ID is required";
        }
        if (!formData.jobRole) {
            newErrors.jobRole = "Job role is required";
        }
        if (!formData.employmentType) {
            newErrors.employmentType = "Employment type is required";
        }
        if (!formData.dateOfJoining) {
            newErrors.dateOfJoining = "Date of joining is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /**
     * Validasi Step 3: Access & Permissions
     */
    const validateStep3 = (): boolean => {
        const newErrors: Partial<Record<keyof EmployeeRegistrationData, string>> = {};

        if (!formData.accessLevel) {
            newErrors.accessLevel = "Access level is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /**
     * Go to next step
     */
    const goToNextStep = () => {
        let isValid = false;

        if (currentStep === 1) {
            isValid = validateStep1();
        } else if (currentStep === 2) {
            isValid = validateStep2();
        }

        if (isValid && currentStep < 3) {
            setCurrentStep(prev => prev + 1);
        }
    };

    /**
     * Go to previous step
     */
    const goToPreviousStep = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };

    /**
     * Submit final registration
     */
    const handleSubmit = async () => {
        if (!validateStep3()) return;

        setIsSubmitting(true);

        try {
            // TODO: Implement actual API call
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (value !== null) {
                    formDataToSend.append(key, value);
                }
            });

            // Simulasi API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log("✅ Employee registered successfully!", formData);

            // TODO: Redirect ke login atau success page
            // router.push("/login");

        } catch (error) {
            console.error("Registration error:", error);
            setErrors({ fullName: "Registration failed. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    /**
     * Handle cancel
     */
    const handleCancel = () => {
        // TODO: Implement navigation
        console.log("Cancel registration");
        // router.push("/login");
    };

    return {
        currentStep,
        formData,
        errors,
        isSubmitting,
        updateFormData,
        goToNextStep,
        goToPreviousStep,
        handleSubmit,
        handleCancel,
    };
};