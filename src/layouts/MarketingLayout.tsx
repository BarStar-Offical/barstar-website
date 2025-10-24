import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type MarketingLayoutProps = {
  children: ReactNode;
};

const MarketingLayout = ({ children }: MarketingLayoutProps) => (
  <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default MarketingLayout;
