import Link from "next/link";
const menuItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];
const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-4 p-2 text-center">
        {menuItems.map((menuItem, i) => {
          return (
            <li key={i}>
              <Link href={menuItem.link} passHref className="hover:border-b-2 pb-0 hover:pb-1 hover:border-gray-100 duration-200 transition-all">
                {menuItem.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
