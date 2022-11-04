import { memo } from 'react';
import Path from '../../img/Path318.png';
import { DownloadAds } from '../DownloadAds';
import { cls } from './Download.styles';

export const Download = memo(() => (
  <div className={cls.downloadWrapper}>
    {/* title icon or path icon */}
    <img src={Path} alt='Error' className={cls.img} />

    {/* heading */}
    <div className={cls.headLine}>
      <span>Download The Best Music</span>

      <span>
        <b>App Now!</b>
      </span>

      <span className={cls.text}>
        Dubs fuegian congee metes, utricles sulphurate nibs vivaria eger. Vestibule ullamcorper
        valuta varies.
      </span>
    </div>

    {/* dowload ads */}
    <div className={cls.downloadAdsWrapper}>
      <DownloadAds />
    </div>
  </div>
));
