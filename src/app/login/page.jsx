import SignIn from "@/components/SignIn";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import React from "react";

const Login = () => (
  <section className="max-w-[720px] mx-auto">
    {/* Header */}
    <header className="py-6">
      <nav className="flex items-center justify-between">
        <ul className="flex gap-6">
          <li className="text-3xl font-bold">
            <Link href="/">Home</Link>
          </li>
        </ul>

        <ThemeToggle />
      </nav>
    </header>
    <div>
      <SignIn />
    </div>
  </section>
);

export default Login;
