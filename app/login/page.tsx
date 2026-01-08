"use client";

import { Button } from "@/Components/ui";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm rounded-xl border p-6 text-center space-y-4">
        <h1 className="text-xl font-bold">Admin Login</h1>

        <Button
          onClick={() => signIn("github", { callbackUrl: "/admin" })}
          className="w-full rounded bg-black p-2 text-white"
        >
          Login with GitHub
        </Button>
      </div>
    </div>
  );
}
