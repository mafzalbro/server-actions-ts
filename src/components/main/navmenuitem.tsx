
import {
  NavigationMenuItem,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { usePathname } from "next/navigation";


interface MenuItemProp {
  menuItem: {
    link: string,
    name: string,
  },
  i: number,
}

export default function NavMenuItem({menuItem, i}: MenuItemProp) {
  const path = usePathname()

  return (
    <NavigationMenuItem key={i + menuItem.name}>
              <Link href={menuItem.link} className={`${navigationMenuTriggerStyle()} ${((path.includes(menuItem.link) && menuItem.name !== 'Home') || (path === '/' && menuItem.link === '/')) ? 'font-bold text-primary' : 'text-muted-foreground'}`}>
                {menuItem.name}
              </Link>
            </NavigationMenuItem>
          )
}
