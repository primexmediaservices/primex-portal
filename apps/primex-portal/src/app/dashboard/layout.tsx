import type { Metadata } from "next";
import LithiumLayout from "@/layouts/lithium/lithium-layout";

export const metadata: Metadata = {
  title: "App Name",
  description: "Write your app description",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <LithiumLayout>
      {children}
    </LithiumLayout>
  );
}
