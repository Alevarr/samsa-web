import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import LogoIcon from "../../icons/LogoIcon";
import { APP_ROUTES } from "@/constant/appRoutes.constant";
import { useLocation } from "react-router-dom";
import navItems from "./navItems.constant";

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <Navbar className="bg-almost-white" isBlurred>
      <NavbarBrand>
        <Link href={APP_ROUTES.index}>
          <LogoIcon />
          <p className="font-bold text-inherit ml-2 text-primary-500">
            GraphLabs
          </p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => (
          <NavbarItem isActive={pathname === item.href}>
            <Link
              color={pathname === item.href ? "primary" : "foreground"}
              href={item.href}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Войти</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Зарегистрироваться
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
