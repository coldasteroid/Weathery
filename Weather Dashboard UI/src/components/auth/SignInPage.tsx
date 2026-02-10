import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#1a1a1a]">
            <SignIn routing="path" path="/sign-in" />
        </div>
    );
}
