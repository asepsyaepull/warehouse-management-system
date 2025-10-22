"use client";

import React, { useState, useEffect } from "react";
import { Package, Search, Bell, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { getCurrentUser, logout } from "@/lib/auth";
import { UserSession } from "@/types/employee";

interface DashboardHeaderProps {
    dateRange: {
        from: string;
        to: string;
    };
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
    dateRange,
}) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState<UserSession | null>(null); 

    // Get current user dari localStorage
    useEffect(() => {
        const user = getCurrentUser();
        setCurrentUser(user);
    }, []);

    // Handle logout
    const handleLogout = () => {
        if (confirm("Are you sure you want to logout?")) {
            logout();
        }
    };

    return (
        <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Left: Logo */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="relative">
                            <Package className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full animate-pulse" />
                        </div>
                        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                            Ware<span className="text-cyan-400">Track</span>
                        </h1>
                    </div>

                    {/* Center: Search */}
                    <div className="hidden md:block flex-1 max-w-md mx-8">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <Input
                                type="search"
                                placeholder="Search here..."
                                className="w-full h-11 pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                            />
                        </div>
                    </div>

                    {/* Right: Actions & Avatar */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Mobile Search Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-slate-400 hover:text-white"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        >
                            <Search className="w-5 h-5" />
                        </Button>

                        {/* Date Range */}
                        <Button
                            variant="outline"
                            className="hidden lg:flex items-center gap-2 bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
                        >
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">
                                {dateRange.from} - {dateRange.to}
                            </span>
                        </Button>

                        {/* Notification Bell */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="relative text-slate-400 hover:text-white"
                        >
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
                        </Button>

                        {/* User Avatar Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-auto p-0">
                                    <Avatar className="w-9 h-9 sm:w-10 sm:h-10 border-2 border-cyan-400/30">
                                        <AvatarImage
                                            src={currentUser?.avatar || "/avatars/user.jpg"}
                                            alt={currentUser?.name || "User"}
                                        />
                                        <AvatarFallback className="bg-cyan-400/10 text-cyan-400 font-semibold">
                                            {currentUser?.name.split(" ").map(n => n[0]).join("").toUpperCase() || "U"}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56 bg-slate-800 border-slate-700">
                                {/* ✅ User Info */}
                                {currentUser && (
                                    <>
                                        <div className="px-3 py-2">
                                            <p className="text-sm font-medium text-white">{currentUser.name}</p>
                                            <p className="text-xs text-slate-400">{currentUser.role}</p>
                                        </div>
                                        <DropdownMenuSeparator className="bg-slate-700" />
                                    </>
                                )}

                                <DropdownMenuItem className="text-white hover:bg-slate-700 cursor-pointer">
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-white hover:bg-slate-700 cursor-pointer">
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="bg-slate-700" />
                                <DropdownMenuItem
                                    className="text-red-400 hover:bg-slate-700 cursor-pointer"
                                    onClick={handleLogout} // ✅ Logout handler
                                >
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* Mobile Search Expandable */}
                {isSearchOpen && (
                    <div className="md:hidden pb-4 animate-fade-in">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <Input
                                type="search"
                                placeholder="Search here..."
                                autoFocus
                                className="w-full h-11 pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                            />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};