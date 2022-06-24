import * as S from "./Home.style";
import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { useState } from "react";
import RoutePath from '../../types/routes';
import { navItems } from '../../data/navigation';


export const Home = () => {
  const [opened, setOpened] = useState(false);
  return (
    <S.Home>
      <S.HomeContent>
        <Header></Header>
        <Menu NavItems={navItems} active={RoutePath.HOME} opened={opened}  ></Menu>
        <button
          onClick={() => {
            setOpened(!opened);
          }}
        >
          change
        </button>
      </S.HomeContent>
    </S.Home>
  );
};
