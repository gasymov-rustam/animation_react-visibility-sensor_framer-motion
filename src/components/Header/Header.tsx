import { memo } from 'react';

import { cls } from './Header.styles';
import MusicLogo from '../../img/MusicLogo.png';
import { CenterMenu } from '../CenterMenu';

export const Header = memo(() => (
  <div className={cls.header}>
    {/* logo */}
    <img src={MusicLogo} alt='' className={cls.img} />

    {/* side menu */}
    <CenterMenu />

    {/* buttons */}
    <div className={cls.btnWrapper}>
      <button className={cls.btn}>Log in</button>

      <button className={cls.btnSignUp}>Sign up</button>
    </div>
  </div>
));
