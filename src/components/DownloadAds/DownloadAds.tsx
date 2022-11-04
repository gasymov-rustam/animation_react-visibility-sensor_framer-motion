import { memo } from 'react';
import AppStore from '../../img/AppStore.png';
import GooglePlay from '../../img/GooglePlay.png';

import { cls } from './DownloadAds.styles';

export const DownloadAds = memo(() => (
  <div>
    <div className={cls.downloadImages}>
      <img src={AppStore} alt='Error' className={cls.appStore} />

      <img src={GooglePlay} alt='Error' className={cls.googlePlay} />
    </div>
  </div>
));
