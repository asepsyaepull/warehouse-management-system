"use client";

import React from "react";
import { useEmployeeRegister } from "@/hooks/useEmployeeRegister";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import { StepIndicator } from "./StepIndicator";
import { RegisterStep1 } from "./RegisterStep1";
import { RegisterStep2 } from "./RegisterStep2";
import { RegisterStep3 } from "./RegisterStep3";
import { WAREHOUSE_QUOTES } from "@/constants/employees";

const EmployeeRegister = () => {
    const {
        currentStep,
        formData,
        errors,
        isSubmitting,
        updateFormData,
        goToNextStep,
        goToPreviousStep,
        handleSubmit,
        handleCancel,
    } = useEmployeeRegister();

    // Dynamic quote based on step
    const currentQuote = WAREHOUSE_QUOTES[currentStep - 1] || WAREHOUSE_QUOTES[0];

    /**
     * Render current step form
     */
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <RegisterStep1
                        formData={formData}
                        errors={errors}
                        onChange={updateFormData}
                    />
                );
            case 2:
                return (
                    <RegisterStep2
                        formData={formData}
                        errors={errors}
                        onChange={updateFormData}
                    />
                );
            case 3:
                return (
                    <RegisterStep3
                        formData={formData}
                        errors={errors}
                        onChange={updateFormData}
                    />
                );
            default:
                return null;
        }
    };

    /**
     * Get step title
     */
    const getStepTitle = () => {
        switch (currentStep) {
            case 1:
                return "Personal information";
            case 2:
                return "Job details";
            case 3:
                return "Access & permissions";
            default:
                return "";
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">

            {/* ========================================
          KOLOM KIRI: Warehouse Image & Quote
          - Full width di mobile (atas)
          - 50% width di desktop (kiri)
          - Background image responsif
          ======================================== */}
            <div className="relative w-full md:w-1/2 min-h-[250px] sm:min-h-[300px] md:min-h-screen bg-linear-to-br from-slate-900 to-slate-800">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070')`,
                    }}
                    aria-hidden="true"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

                {/* Content - padding responsif untuk mobile */}
                <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 md:p-12 lg:p-16 text-white">

                    {/* Quote mark icon */}
                    <div className="mb-4 sm:mb-6">
                        <svg
                            className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 opacity-80"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                        >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                    </div>

                    {/* Quote text - font size responsif */}
                    <blockquote className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
                            {currentQuote.text}
                        </p>
                    </blockquote>

                    {/* Author badge */}
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 rounded-full backdrop-blur-sm bg-white/5 w-fit">
                        <Package className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" aria-hidden="true" />
                        <span className="text-xs sm:text-sm font-medium">{currentQuote.author}</span>
                    </div>

                    {/* Pagination dots - spacing responsif */}
                    <div className="flex gap-2 mt-6 sm:mt-8" role="tablist" aria-label="Step pagination">
                        {[1, 2, 3].map((step) => (
                            <div
                                key={step}
                                className={`w-6 sm:w-8 h-1 rounded-full transition-all duration-300 ${step === currentStep ? "bg-cyan-400" : "bg-white/30"
                                    }`}
                                role="tab"
                                aria-selected={step === currentStep}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* ========================================
          KOLOM KANAN: Registration Form
          - Full width di mobile (bawah)
          - 50% width di desktop (kanan)
          - Padding responsif, max-width untuk readability
          - Centered content di mobile
          ======================================== */}
            <div className="w-full md:w-1/2 bg-slate-900 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="w-full max-w-md space-y-6 sm:space-y-8">

                    {/* ========================================
              HEADER: Logo & Title
              - Logo size responsif
              - Title font size responsif
              ======================================== */}
                    <div className="text-center space-y-4 sm:space-y-6">
                        {/* Logo WareTrack */}
                        <div className="flex items-center justify-center gap-2 sm:gap-3">
                            <div className="relative">
                                <Package className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" aria-hidden="true" />
                                <div className="absolute -bottom-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full animate-pulse" />
                            </div>
                            <h1 className="text-xl sm:text-2xl font-bold text-white">
                                Ware<span className="text-cyan-400">Track</span>
                            </h1>
                        </div>

                        {/* Page Title */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                                Add new employee
                            </h2>
                            <div className="h-1 w-24 sm:w-32 bg-linear-to-r from-cyan-400 to-transparent mx-auto rounded-full" />
                        </div>
                    </div>

                    {/* ========================================
              STEP INDICATOR
              - Compact di mobile dengan dots
              - Full stepper di desktop
              ======================================== */}
                    <StepIndicator currentStep={currentStep} totalSteps={3} />

                    {/* ========================================
              FORM SECTION
              - Card style dengan padding proporsional
              - Space antar field cukup untuk touch
              ======================================== */}
                    <div className="bg-slate-800/30 rounded-2xl p-4 sm:p-6 border border-slate-700/50">
                        {/* Step Title */}
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
                            {getStepTitle()}
                        </h3>

                        {/* Dynamic Step Form */}
                        <div className="animate-fade-in">
                            {renderStep()}
                        </div>
                    </div>

                    {/* ========================================
              ACTION BUTTONS
              - Full width di mobile untuk easy touch
              - Spacing cukup antar tombol
              - Back button hanya tampil di step 2 & 3
              ======================================== */}
                    <div className="space-y-3 sm:space-y-4">
                        {/* Primary Action Button */}
                        <Button
                            onClick={currentStep === 3 ? handleSubmit : goToNextStep}
                            disabled={isSubmitting}
                            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-xl bg-cyan-400 hover:bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all duration-300"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Processing...
                                </span>
                            ) : currentStep === 3 ? (
                                "Register employee"
                            ) : (
                                "Continue"
                            )}
                        </Button>

                        {/* Secondary Actions */}
                        <div className="flex gap-3 sm:gap-4">
                            {/* Back button - hanya tampil di step 2 & 3 */}
                            {currentStep > 1 && (
                                <Button
                                    type="button"
                                    onClick={goToPreviousStep}
                                    variant="outline"
                                    className="flex-1 h-11 sm:h-12 text-sm sm:text-base border-slate-700 text-slate-300 hover:bg-slate-800"
                                >
                                    Back
                                </Button>
                            )}

                            {/* Cancel button */}
                            <Button
                                type="button"
                                onClick={handleCancel}
                                variant="ghost"
                                className={`h-11 sm:h-12 text-sm sm:text-base text-red-400 hover:text-red-300 hover:bg-red-400/10 ${currentStep === 1 ? 'w-full' : 'flex-1'
                                    }`}
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>

                    {/* ========================================
              FOOTER INFO
              - Font size kecil, proporsional
              ======================================== */}
                    <div className="pt-4 sm:pt-6 border-t border-slate-800">
                        <p className="text-xs sm:text-sm text-slate-500 text-center">
                            Need help? Contact your administrator
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default EmployeeRegister;