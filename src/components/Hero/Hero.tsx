import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';
import Bg from '../../img/backgraphics.png';
import P1 from '../../img/p1.png';
import P2 from '../../img/p2.png';
import P3 from '../../img/p3.png';
import P4 from '../../img/p4.png';
import { cls } from './Hero.styles';
import { DownloadAds } from '../DownloadAds';

export const Hero = memo(() => {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  const bg = {
    true: {
      left: '7rem',
    },
    false: {
      left: '19rem',
    },
  };

  const musicPlayer = {
    true: {
      left: '295px',
    },
    false: {
      left: '235px',
    },
  };

  const rect = {
    true: {
      left: '11rem',
    },
    false: {
      left: '13rem',
    },
  };

  const heart = {
    true: {
      left: '9rem',
    },
    false: {
      left: '12.5rem',
    },
  };

  return (
    <VisibilitySensor
      onChange={(isVisible: boolean) => setElementIsVisible(isVisible)}
      minTopValue={1000}
    >
      <div className={cls.wrapper}>
        {/* left side */}
        <div className={cls.heading}>
          <span>Experience The</span>

          <span>
            <b>Best Quality Music</b>
          </span>

          <span className='text-[15px] text-[#525D6E]'>
            Donee laurent nec veldt vitae aliquant. Ut quia incident purus.
            <br />
            Suspensive in leo non risus incident laborite.
          </span>

          {/* download ads */}
          <div>
            <span className={cls.download}>Download now on IOS and Android</span>
            <DownloadAds />
          </div>
        </div>

        {/* right side */}
        <div className={cls.wrapperImg}>
          <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: 'ease-out' }}
            src={Bg}
            alt='Error'
            className={cls.img_bg}
          />
          <img src={P1} alt='Error' className={cls.img_p1} />

          <motion.img
            variants={musicPlayer}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1,
              type: 'ease-out',
            }}
            src={P2}
            alt='Error'
            className={cls.img_p2}
          />

          <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{
              type: 'ease-out',
              duration: 1,
            }}
            src={P3}
            alt='Error'
            className={cls.img_p3}
          />

          <motion.img
            variants={heart}
            animate={`${elementIsVisible}`}
            transition={{
              type: 'ease-out',
              duration: 1,
            }}
            src={P4}
            alt='Error'
            className={cls.img_p4}
          />
        </div>
      </div>
    </VisibilitySensor>
  );
});
