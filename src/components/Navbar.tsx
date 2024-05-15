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

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LogoIconBlack } from "./Icons";
import { ResponsiveName } from "./Icons";
import { ResponsiveIcon } from "./Icons";
import { SwitchTheme } from "./switchTheme";

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
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto py-3">
        <NavigationMenuList className=" h-14 px-8 w-screen flex justify-between">

          {/* mobile */}
          <div className="flex justify-between w-full h-10 md:hidden">
            <ResponsiveIcon className="block h-full" />
            <ResponsiveName className="block h-full" />
            <span className="flex items-center md:hidden">
              <SwitchTheme className="flex items-center gap-x-2 max-[420px]:hidden" />

              <Sheet
                open={isOpen}
                onOpenChange={setIsOpen}
              >
                <SheetTrigger className="p-3 ml-4 shadow-md">
                  <Menu
                    className="flex md:hidden h-5 w-5"
                    onClick={() => setIsOpen(true)}
                  >
                    <span className="sr-only">Menu Icon</span>
                  </Menu>
                </SheetTrigger>

                <SheetContent side={"right"}>
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
            </span>
          </div>


          {/* desktop */}
          <NavigationMenuItem className="font-bold flex hidden">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <LogoIconBlack />
              Entregação
            </a>
          </NavigationMenuItem>

          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
