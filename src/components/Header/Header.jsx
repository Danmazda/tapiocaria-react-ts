import * as S from "./Header.style";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Market} from "../../assets/icons/market.svg";
import RoutePath from "../../types/routes";
export const Header = () => {
  return (
    <S.Header>
      <S.HeaderLogo> AAAAAAAAAAAAAAAAAAA</S.HeaderLogo>
      <nav>
        <S.HeaderNav>
          <li>
            <Link to={RoutePath.HOME}>Home</Link>
          </li>
        </S.HeaderNav>
      </nav>
      <S.HeaderSearch>
        <Search/>
        <input type="text" />
        <Market/>
      </S.HeaderSearch>
    </S.Header>
  );
};
