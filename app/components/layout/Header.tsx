"use client";

import React, { useEffect, useState } from "react";
import {
  Heart,
  Search,
  ShoppingBag,
  User,
  Menu,
  Sun,
  Moon,
  Bell,
} from "lucide-react";
import { APP_NAME } from "@/app/utils/constant";
import Button from "../ui/Button";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { toggleTheme } from "@/app/store/slices/themeSlice";

export const Header = () => {
    const dispatch = useAppDispatch();
const theme = useAppSelector(
  (state) => state.theme.mode
);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-red-100 shadow-sm">
      <div className="max-w-7xl mx-auto h-16 px-4 md:px-6 flex items-center justify-between gap-4">

        {/* LEFT */}
        <div className="flex items-center gap-3 min-w-fit cursor-pointer">
          <button className="md:hidden p-2 rounded-full hover:bg-red-50 transition">
            <Menu className="w-5 h-5 text-gray-700" />
          </button>

          <h1 className="text-3xl font-black tracking-tight leading-none select-none">
            <span className="text-red-900">{APP_NAME}</span>
          </h1>
        </div>

        {/* SEARCH */}
        <div className="hidden md:flex flex-1 max-w-xl">
          <div className="w-full flex items-center gap-3 px-4 py-2.5 rounded-full border border-red-100 bg-red-50 hover:border-red-300 focus-within:border-red-400 transition">
            <Search className="w-5 h-5 text-red-700 shrink-0" />

            <input
              type="text"
              placeholder="Search products, brands and more..."
              className="w-full bg-transparent outline-none text-sm placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 md:gap-3">

          {/* mobile search */}
          <button className="md:hidden h-10 w-10 rounded-full hover:bg-red-50 flex items-center justify-center transition">
            <Search className="w-5 h-5 text-gray-700" />
          </button>

          {/* notifications */}
          <button className="h-10 w-10 rounded-full hover:bg-red-50 flex items-center justify-center transition">
            <Bell className="w-5 h-5 text-gray-700" />
          </button>


          {/* wishlist */}
          <button className="h-10 w-10 rounded-full hover:bg-red-50 flex items-center justify-center transition">
            <Heart className="w-5 h-5 text-gray-700 hover:text-red-800" />
          </button>

          {/* theme toggle */}
          <button
            onClick={()=> {
                     dispatch(toggleTheme());
                }}
            aria-label="Toggle theme"
            className="h-10 w-10 rounded-full hover:bg-red-50 flex items-center justify-center transition"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-gray-700" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>

          {/* cart */}
          <button className="relative h-10 w-10 rounded-full hover:bg-red-50 flex items-center justify-center transition">
            <ShoppingBag className="w-5 h-5 text-gray-700 hover:text-red-800" />

            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-900 text-white text-[10px] font-semibold flex items-center justify-center">
              2
            </span>
          </button>

          {/* desktop login */}
           <Button className="hidden md:flex"> <User className="w-5 h-5" /> Primary</Button>
 
          {/* mobile login */}
          <button className="md:hidden h-10 w-10 rounded-full hover:bg-red-50 flex items-center justify-center transition">
            <User className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
};