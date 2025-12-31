import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-200/20 blur-3xl animate-pulse" />
                <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] rounded-full bg-indigo-200/20 blur-3xl animate-pulse" />
            </div>

            <div className="z-10 w-full flex justify-center px-4">
                <LoginForm />
            </div>
        </div>
    );
}
