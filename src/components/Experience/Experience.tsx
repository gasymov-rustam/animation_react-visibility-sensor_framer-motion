import { memo } from 'react';

import { cls } from './Experience.styles';
import Path from '../../img/Path318.png';
import Group2 from '../../img/Group2.png';
import Group4 from '../../img/Group4.png';
import MusicIcon from '../../img/music icon.png';
import { Feature } from '../Feature';

export const Experience = memo(() => (
  <div className={cls.experience}>
    {/* title icon */}
    <img src={Path} alt='Error' className={cls.imgPath} />

    {/* heading */}
    <div className={cls.headline}>
      <span>An Amazing App Can Change Your Daily Life</span>

      <span>
        <b>Music Experience</b>
      </span>
    </div>

    {/* features  */}
    <div className={cls.feature}>
      <Feature icon={Group2} title='For Live Music' />
      <Feature icon={MusicIcon} title='For Daily Music' />
      <Feature icon={Group4} title='For Artists' />
    </div>
  </div>
));
