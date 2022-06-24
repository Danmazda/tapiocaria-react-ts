import * as S from "./Menu.style";
import { MenuProps } from "./Menu.type";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";

import { Link } from "react-router-dom";
export const Menu = ({ active, opened, NavItems }: MenuProps) => {
  return (
    <>
      {opened && (
        <S.Menu>
          <S.MenuLogo>
            <img
              src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-crepe-sweet-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
              alt="Imagem de tapioca"
            />
          </S.MenuLogo>
          <S.MenuButtonsContainer>
            {NavItems.map((navItem, index) => {
              return (
                <S.MenuItem key={`navItem-(${index})`}>
                  <Link to={navItem.path}>{navItem.icon}</Link>
                </S.MenuItem>
              );
            })}
            <S.MenuItem>
              <Logout />
            </S.MenuItem>
          </S.MenuButtonsContainer>
        </S.Menu>
      )}
    </>
  );
};
