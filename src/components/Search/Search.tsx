import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import Bg from '../../img/backgraphics.png';
import D1 from '../../img/d1.png';
import D2 from '../../img/d2.png';
import D3 from '../../img/d3.png';
import D4 from '../../img/d4.png';
import SearchImg from '../../img/search.png';
import Path318 from '../../img/Path318.png';
import VisibilitySensor from 'react-visibility-sensor';

import { cls } from './Search.styles';
import { MusicPlayer } from '../MusicPlayer';

export const Search = memo(() => {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  const bg = {
    true: {
      left: '-44rem',
    },
    false: {
      left: '-50rem',
    },
  };

  const redimg = {
    true: {
      left: '18rem',
    },
    false: {
      left: '16rem',
    },
  };

  const musicimg = {
    true: {
      left: '2rem',
    },
    false: {
      left: '6rem',
    },
  };

  return (
    <div className={cls.searchWrapper}>
      {/* left side */}
      <div className={cls.leftSide}>
        <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: 'ease-out',
          }}
          src={Bg}
          alt='Error'
          className={cls.imgBg}
        />

        <motion.img src={D1} alt='Error' className={cls.imgD1} />
        <motion.img src={D2} alt='Error' className={cls.imgD2} />

        <motion.img
          variants={redimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: 'ease-out',
          }}
          src={D3}
          alt='Error'
          className={cls.imgD3}
        />

        <motion.img
          variants={musicimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: 'ease-out',
          }}
          src={D4}
          alt='Error'
          className={cls.imgD4}
        />
      </div>

      {/* right side */}
      <div className={cls.rightSide}>
        {/* Search */}
        <div className={cls.searchBar}>
          <input type='text' placeholder='Enter the keyword or URL' className={cls.searchInput} />

          {/* SearchIcon */}
          <div className={cls.searchIcon}>
            <img src={SearchImg} alt='Error' className={cls.searchImg} />
          </div>
        </div>

        {/* title icon */}
        <div className={cls.searchTitleIconWrapper}>
          <img src={Path318} alt='Error' className={cls.searchTitleIcon} />
        </div>

        {/* paragraph */}
        <div className={cls.searchDetail}>
          <span>Search Music by</span>

          <span>
            <b>Name or Direct URL</b>
          </span>

          <span className={cls.searchDescription}>
            Dubs fuegian congee metes, utricles sulphurate <br /> nibs vivaria eger. Vestibule
            ullamcorper <br /> valuta varies.
          </span>
        </div>

        {/* Music Player */}
        <VisibilitySensor onChange={(isVisible: boolean) => setElementIsVisible(isVisible)}>
          <MusicPlayer />
        </VisibilitySensor>
      </div>
    </div>
  );
});
