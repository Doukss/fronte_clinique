"use client";
import { Flame } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      href: "/",
      label: "categories",
    },
    {
      href: "/test",
      label: "Connexion",
    },
  ];

  const isActiveLink = (href: string) =>
    pathname.replace(/\/$/, "") === href.replace(/\/$/, "");

  const renderNavLinks = (className: string) =>
    navLinks.map(({ href, label }) => {
      return (
        <Link
          href={href}
          key={href}
          className={`btn-sm ${className} ${isActiveLink(href) ? "btn-accent" : ""}`}
        >
          {label}
        </Link>
      );
    });

  return (
    <div className="border-b border-base-300 px-5 md:px-[10%] py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="p-2">
            <Flame className="w-8 h-8" />
          </div>
          <span className="font-bold text-2xl">
            Art<span className="text-accent">Nivo</span>
          </span>
        </div>
        <div>{renderNavLinks("btn")}</div>
      </div>
    </div>
  );
};

export default Navbar;
