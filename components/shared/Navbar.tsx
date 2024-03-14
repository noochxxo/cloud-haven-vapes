"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

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
import { ModeToggle } from "./ModeToggle";
import HamburgerMenu from "./HamburgerMenu";
import MenuSvg from "./MenuSvg";
import { Button } from "../ui/button";

const Navbar = () => {
  const pathname = usePathname();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    toggleNavigation();
  };

  return (
    <div
      className={`
      fixed
      top-0
      left-0
      w-full
      z-50
      border-b
    `}
    >
      <div
        className="
        flex
        items-center
        pb-2
        pt-7
        px-5
        
        lg:px-2
        xl:px-10
        max-lg:py-4
      "
      >
        <ModeToggle />
        <a href="#hero" className="ml-4 block w-[12rem] xl:mr-8">
          {/* <Image
          src={Logo}
          width={500}
          height={500}
          alt="Cloud Haven Vapes Logo"
        /> */}
          Cloud Haven Vapes
        </a>
        <NavigationMenu
          className={`
          ${openNavigation ? "flex" : "hidden"}
          justify-self-center
          fixed
          top-[5rem]
          left-0
          right-0
          bottom-0
          lg:static
          lg:flex
          lg:mx-auto
        `}
        >
          <NavigationMenuList
            className={`
              relative
              z-2
              flex
              flex-col
              items-center
              justify-center
              m-auto
              lg:flex-row
              ${openNavigation ? "w-screen" : ""}
            `}
          >
            {navLinks.map((link) => {
              const isActive = link.route === pathname
              return (
                <NavigationMenuItem
                  key={link.route}
                  className={`uppercase
                    block
                    relative
                    text-2xl
                    py-6
                    md:py-8
                    lg:-mr-0.25
                    lg:text-xs
                    lg:font-semibold
                    
                  `}
                >
                  <Link href={link.route} legacyBehavior passHref >
                    <NavigationMenuLink
                    active={isActive}
                      onClick={handleClick}
                      className={`
                    ${navigationMenuTriggerStyle()}
                  `}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
          <HamburgerMenu />
        </NavigationMenu>
        <Button className="ml-auto lg:hidden" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
