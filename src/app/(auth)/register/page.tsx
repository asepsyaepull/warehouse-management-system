import { EmployeeRegister } from "@/components/auth";

export const metadata = {
    title: "Register Employee - WareTrack",
    description: "Add new employee to the warehouse management system",
};

export default function RegisterPage() {
    return <EmployeeRegister />;
}