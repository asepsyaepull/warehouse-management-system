/**
 * Interface untuk data karyawan
 */
export interface Employee {
    id: string;
    name: string;
    role: string;
    avatar: string;
    initials: string;
}

/**
 * Interface untuk credentials login
 */
export interface LoginCredentials {
    employeeId: string;
    pin: string;
}

/**
 * Interface untuk response login dari API
 */
export interface LoginResponse {
    success: boolean;
    message?: string;
    token?: string;
    employee?: Employee;
}

/**
 * Props untuk komponen PinInput
 */
export interface PinInputProps {
    pin: string[];
    setPin: (pin: string[]) => void;
    isError: boolean;
    setIsError: (isError: boolean) => void;
    errorMessage: string;
    disabled: boolean;
}

/**
 * Props untuk komponen EmployeeSelector
 */
export interface EmployeeSelectorProps {
    employees: Employee[];
    selectedEmployee: Employee | null;
    onSelectEmployee: (employee: Employee) => void;
}

/**
 * Props untuk komponen LoginActions
 */
export interface LoginActionsProps {
    isPinComplete: boolean;
    selectedEmployee: Employee | null;
    onSubmit: (e: React.FormEvent) => void;
    onAddNewEmployee: () => void;
}

/**
 * Props untuk komponen LoginActions
 * ✅ Updated dengan isLoading
 */
export interface LoginActionsProps {
    isPinComplete: boolean;
    selectedEmployee: Employee | null;
    isLoading?: boolean; // ✅ Tambahkan
    onSubmit: (e: React.FormEvent) => void;
    onAddNewEmployee: () => void;
}

/**
 * ✅ Tambahkan: User session data yang disimpan di localStorage
 */
export interface UserSession {
    id: string;
    name: string;
    role: string;
    avatar: string;
    loginTime: string;
}

/**
 * Form data untuk registrasi employee baru
 */
export interface EmployeeRegistrationData {
    // Step 1: Personal Information
    fullName: string;
    dateOfBirth: string;
    contactNumber: string;
    address: string;
    emergencyContact: string;

    // Step 2: Job Details
    employeeId: string;
    jobRole: string;
    employmentType: string;
    dateOfJoining: string;

    // Step 3: Access & Permissions
    accessLevel: string;
    profilePicture: File | null;
}

/**
 * Job role options
 */
export const JOB_ROLES = [
    { value: "driver-assistant", label: "Driver Assistant" },
    { value: "warehouse-manager", label: "Warehouse Manager" },
    { value: "inventory-clerk", label: "Inventory Clerk" },
    { value: "forklift-operator", label: "Forklift Operator" },
    { value: "supervisor", label: "Supervisor" },
] as const;

/**
 * Employment type options
 */
export const EMPLOYMENT_TYPES = [
    { value: "full-time", label: "Full Time" },
    { value: "part-time", label: "Part Time" },
    { value: "contract", label: "Contract" },
    { value: "temporary", label: "Temporary" },
] as const;

/**
 * Access level options
 */
export const ACCESS_LEVELS = [
    { value: "basic", label: "Basic - View Only" },
    { value: "standard", label: "Standard - View & Edit" },
    { value: "advanced", label: "Advanced - Full Access" },
    { value: "admin", label: "Admin - All Permissions" },
] as const;