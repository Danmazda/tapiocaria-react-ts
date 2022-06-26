import * as S from "./Header.style";
import { DateTime } from "luxon";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Market } from "../../assets/icons/market.svg";
import RoutePath from "../../types/routes";
export const Header = () => {
 
  return (
    <S.Header>
      <S.HeaderLogo>
        <img
          src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-crepe-sweet-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
          alt="Imagem de tapioca"
        />
        <h1>Tapiocaria</h1>
      </S.HeaderLogo>
      <nav>
        <S.HeaderNav>
          <li>
            <S.HeaderNavLink to={RoutePath.HOME}>Home</S.HeaderNavLink>
          </li>
        </S.HeaderNav>
      </nav>
      <S.HeaderSearch>
        <Search />
        <input type="text" />
        <Market />
      </S.HeaderSearch>
    </S.Header>
  );
};
