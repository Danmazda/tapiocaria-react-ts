import RoutePath from "../../types/routes";

//Onde usar???
export interface NavItem {
  icon: JSX.Element;
  path: RoutePath;
}

export interface MenuProps {
  active: RoutePath;
  opened: boolean;
  NavItems: NavItem[];
}
