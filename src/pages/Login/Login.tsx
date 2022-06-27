import { BoxLogin } from '../../components/BoxLogin/BoxLogin';
import * as S from "./Login.style"
export const Login = () =>{
  return(<S.Login>
    <S.LoginContent>
      <BoxLogin/>
    </S.LoginContent>
  </S.Login>);
}
