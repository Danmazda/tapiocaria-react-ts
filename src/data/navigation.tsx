import { NavItem } from "../components/Menu/Menu.type";
import { ReactComponent as Home } from "../assets/icons/home.svg";
import { ReactComponent as Login } from "../assets/icons/users.svg";
import { ReactComponent as Settings } from "../assets/icons/settings.svg";

import RoutePath from "../types/routes";

export const navItems: NavItem[] = [
  {
    icon: <Home />,
    path: RoutePath.HOME,
  },
  {
    icon: <Login />,
    path: RoutePath.LOGIN,
  },
  {
    icon: <Settings />,
    path: RoutePath.SETTINGS,
  },

];
