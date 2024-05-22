import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./button";
import { Menu } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { LogoIcon, ResponsiveLogoName } from '../Logos'
import { SwitchTheme } from "../switchTheme";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#about",
    label: "Sobre nós",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
  {
    href: "#contact",
    label: "Contato",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="py-5">
      <NavigationMenu className="container sticky block top-0 z-40 bg-white dark:border-b-slate-700 dark:bg-background">
        <NavigationMenuList className="flex justify-between items-center w-full">
          <NavigationMenuItem className="flex items-center gap-2">
            <LogoIcon color="green" />
            <ResponsiveLogoName />
          </NavigationMenuItem>

          <span className="flex items-center gap-4">
            <NavigationMenuItem className="flex items-center gap-4 relative">
              <SwitchTheme className="flex items-center gap-2 max-[640px]:hidden" />
              <ModeToggle className="min-[640px]:hidden" />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Sheet
                open={isOpen}
                onOpenChange={setIsOpen}>
                <SheetTrigger className="p-3 h-full shadow-md">
                  <Menu
                    className="h-5 w-5"
                    onClick={() => setIsOpen(true)}>
                    <span className="sr-only">Menu Icon</span>
                  </Menu>
                </SheetTrigger>

                <SheetContent side={"right"} className="w-1/2">
                  <SheetHeader>
                    <SheetTitle className="font-semibold text-xl">
                      Entreg<span className="font-black">ação</span >
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                    {routeList.map(({ href, label }: RouteProps) => (
                      <a
                        rel="noreferrer noopener"
                        key={label}
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        {label}
                      </a>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </NavigationMenuItem>
          </span>
        </NavigationMenuList>
      </NavigationMenu>
    </header >
  );
};
