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