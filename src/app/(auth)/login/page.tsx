import { EmployeeLogin } from "@/components/auth";

export const metadata = {
    title: "Employee Login - WareTrack",
    description: "Login page for warehouse employees",
};

export default function LoginPage() {
    return <EmployeeLogin />;
}