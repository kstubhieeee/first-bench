import Link from "next/link";
import {
  Bell,
  Building2,
  Gauge,
  Sparkles,
  LightbulbIcon,
  Zap,
  BarChart2,
  FileText,
  Menu,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Nav({ profileImage }: { profileImage: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link
        href="/dashboard"
        className="flex items-center space-x-2 text-gray-300 hover:text-white"
      >
        <Gauge className="w-5 h-5" />
        <span>Dashboard</span>
      </Link>
      <Link
        href="/firstguru"
        className="flex items-center space-x-2 text-gray-300 hover:text-white"
      >
        <Sparkles className="w-5 h-5" />
        <span>FirstGuru</span>
      </Link>
      <Link
        href="/townhall"
        className="flex items-center space-x-2 text-gray-300 hover:text-white"
      >
        <Building2 className="w-5 h-5" />
        <span>TownHall</span>
      </Link>
      <Link
        href="/evaluation"
        className="flex items-center space-x-2 text-gray-300 hover:text-white"
      >
        <Zap className="w-5 h-5" />
        <span>AI Evaluation</span>
      </Link>
      <Link
        href="/performance"
        className="flex items-center space-x-2 text-gray-300 hover:text-white"
      >
        <BarChart2 className="w-5 h-5" />
        <span>Performance</span>
      </Link>
      <Link
        href="/mock-test"
        className="flex items-center space-x-2 text-teal-400 hover:text-teal-300"
      >
        <FileText className="w-5 h-5" />
        <span>Mock Test</span>
      </Link>
    </>
  );

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-[#1f2937] text-white">
      {/* Logo Section */}
      <div className="flex items-center space-x-8">
        <Link href="/" className="flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-teal-400"
            viewBox="0 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <span className="text-xl font-semibold">Firstbench</span>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLinks />
        </div>
      </div>

      {/* Notification and Profile Section */}
      <div className="flex items-center space-x-4">
        <Bell className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
        <Avatar className="w-8 h-8">
          <AvatarImage src={profileImage} alt="Profile" />
          <AvatarFallback>RU</AvatarFallback>
        </Avatar>

        {/* Mobile Menu Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-[#1f2937]"
          >
            <nav className="flex flex-col space-y-4 mt-4">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
