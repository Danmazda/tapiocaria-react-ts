import * as S from './BoxLogin.style'
import { Button } from '../Button/Button';
export const BoxLogin = () =>{
  return(<S.Box>
    <S.BoxLogo>
    <img
          src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-crepe-sweet-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
          alt="Imagem de tapioca"
        />
      <h2>Tapiocaria</h2>
    </S.BoxLogo>
    <S.BoxForm>
      <input type="email" required placeholder='Email'/>
      <input type="password" required placeholder='Senha' />
      <Button value='Login' type='submit'/>
    </S.BoxForm>
  </S.Box>);
}