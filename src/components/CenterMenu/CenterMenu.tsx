import { memo } from 'react';

import { cls } from './CenterMenu.styles';

export const CenterMenu = memo(() => (
  <div className={cls.wrapper}>
    <ul className={cls.ul}>
      <li className={cls.liStyle}>Home</li>
      <li className={cls.liStyle}>About</li>
      <li className={cls.liStyle}>Performer</li>
      <li className={cls.liStyle}>Event Schedule</li>
    </ul>
  </div>
));
