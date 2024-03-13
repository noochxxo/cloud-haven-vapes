"use client";

import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Logo from "@/public/assets/logo.png";
import { navLinks } from "@/constants";

const Navbar = () => {
  return (
    <div className={`
      fixed
      top-0
      left-0
      w-full
      z-50
      border-b
    `}>
      <div className="
        flex
        items-center
        px-5
        lg:px-7
        xl:px-10
        max-lg:py-4
      ">
        <a href="#hero"
          className="block w-[12rem] xl:mr-8"
        >
          {/* <Image
          src={Logo}
          width={500}
          height={500}
          alt="Cloud Haven Vapes Logo"
        /> */}
        Cloud Haven Vapes
        </a>
        <NavigationMenu className={`
          fixed
          top-[5rem]
          left-0
          right-0
          bottom-0
          lg:static
          lg:flex
          lg:mx-auto
        `}>
          <NavigationMenuList>
              {navLinks.map((link) => (
              <NavigationMenuItem>
                <Link href={link.route}>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} uppercase`}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
