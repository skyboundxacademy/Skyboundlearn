"use client";

import * as React from "react";
import { Header } from "./header";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
  fullWidth?: boolean;
}

export function MainLayout({ children, hideHeader = false, fullWidth = false }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {!hideHeader && <Header />}
      <main className={cn(
        "container",
        !fullWidth && "py-6",
        fullWidth && "py-0"
      )}>
        {children}
      </main>
    </div>
  );
}
