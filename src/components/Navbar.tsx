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
import { LogoIcon, LogoName } from './Logos'
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
    < header className="py-5">
      <NavigationMenu className="sticky block top-0 z-40 bg-white dark:border-b-slate-700 dark:bg-background">
        <NavigationMenuList className="block">
          <NavigationMenuItem >
            {/* mobile */}
            <div className="flex justify-between w-full h-10 tablet:hidden relative">
              <LogoIcon color="green" height={40} width={40}/>
              <LogoName color="blue" className="absolute inset-x-1/2 -translate-x-2/4" height={80} />
              <span className="flex items-center gap-x-4 tablet:hidden">
                <SwitchTheme className="flex items-center h-full gap-x-2 max-[640px]:hidden" />
                <ModeToggle className="min-[640px]:hidden max-[460px]:hidden" />
                <Sheet
                  open={isOpen}
                  onOpenChange={setIsOpen}>
                  <SheetTrigger className="p-3 h-full shadow-md">
                    <Menu
                      className="flex min-[992px]:hidden h-5 w-5"
                      onClick={() => setIsOpen(true)}>
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
          </NavigationMenuItem>

          {/* desktop */}
          <NavigationMenuItem className="font-bold flex hidden">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              Entregação
            </a>
          </NavigationMenuItem>

          <nav className="hidden min-[992px]:flex gap-2">
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

          <div className="hidden min-[992px]:flex gap-2">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header >
  );
};
