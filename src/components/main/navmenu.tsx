"use client"

import {
  NavigationMenu,
  // NavigationMenuContent,
  // NavigationMenuIndicator,
  // NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // NavigationMenuViewport,
  // navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import NavMenuItem from "./navmenuitem";


const menuItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Settings", link: "/settings" },
];

export function NavMenu() {
  return (
    <NavigationMenu className="text-center m-4 p-2">
    <NavigationMenuList className="gap-2">
      {menuItems.map((menuItem, i) => <NavMenuItem menuItem={menuItem} i={i} />)}
        {/* <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Link</NavigationMenuLink>
        </NavigationMenuContent> */}
    </NavigationMenuList>
  </NavigationMenu>
  
  )
}
