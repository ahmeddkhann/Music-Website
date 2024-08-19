"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed lg:top-10 top-3 inset-x-0  max-w-2xl mx-auto z-50" , className)}>
      <Menu setActive={setActive}>

        <Link href={"/"} >
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>

        <MenuItem  setActive={setActive} active={active} item="Our Courses">
        <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/courses">
        All Courses
        </HoveredLink>
        <HoveredLink href="/courses">
        Guitar Course
        </HoveredLink>
        <HoveredLink href="/courses">
        Piano Course
        </HoveredLink>
        <HoveredLink href="/courses">
        Drum Course
        </HoveredLink>
        <HoveredLink href="/courses">
        Sitar Course
        </HoveredLink>
        <HoveredLink href="/courses">
        Violent Course
        </HoveredLink>
        <HoveredLink href="/courses">
        Trumpet Course
        </HoveredLink>
        <HoveredLink href="/courses">
        Oboe Course
        </HoveredLink>
        <HoveredLink href="/courses">
        Banjo Course
        </HoveredLink>
        </div>
        </MenuItem>
        
        <Link href={"contacts"} >
        <MenuItem setActive={setActive} active={active} item="Contact Us">
        </MenuItem>
        </Link>

        <Link href={"register"} >
        <MenuItem setActive={setActive} active={active} item="Register?">
        </MenuItem>
        </Link>

      </Menu>
    </div>
  )
}

export default Navbar
