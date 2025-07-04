import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

type NavItem = {
  label: string;
  href: string;
};

// const navItems: NavItem[] = [
//     { label: 'Home', href: '/' },
//     { label: 'About', href: '/about' },
//     { label: 'Blog', href: '/blog' },
//     { label: 'Contact', href: '/contact' },
// ];

const Nav: React.FC = () => (
  <nav className="flex p-4 fixed w-screen top-0 z-50">
    <div className="">
      <h1 className="text-3xl">
        Vort<span className="font-bold text-primary">Edge</span>
      </h1>
    </div>

    <Button className="ml-auto bg-gray-100/55 py-2 px-8 rounded-full mix-blend-color-difference backdrop-blur-md shadow-lg">
      Contact Us
    </Button>
  </nav>
);

export default Nav;
