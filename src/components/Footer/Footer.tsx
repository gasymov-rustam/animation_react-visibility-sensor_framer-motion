import { memo } from 'react';
import { CenterMenu } from '../CenterMenu';
import { Facebook, Twitter, YouTube, LinkedIn } from '@mui/icons-material';

import { cls } from './Footer.styles';

export const Footer = memo(() => (
  <footer className={cls.footer}>
    <CenterMenu />

    {/* Social icons */}
    <div className={cls.socialIcons}>
      <div className={cls.socialItem}>
        <Facebook />
      </div>
      <div className={cls.socialItem}>
        <Twitter />
      </div>
      <div className={cls.socialItem}>
        <YouTube />
      </div>
      <div className={cls.socialItem}>
        <LinkedIn />
      </div>
    </div>

    {/* detail */}
    <span className={cls.details}>
      Dubs fuegian congee metes, utricles sulphurate nibs vivaria eger. Vestibule ullamcorper valuta
      varies.
    </span>
  </footer>
));
