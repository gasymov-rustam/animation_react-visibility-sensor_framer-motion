import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';

import { cls } from './Feature.styles';

interface FeatureProps {
  title: string;
  icon: string;
  // icon: SVGProps<SVGElement>;
}

export const Feature = memo((props: FeatureProps) => {
  const { title, icon } = props;
  const [elementIsVisible, setElementIsVisible] = useState(false);

  const variant = {
    true: {
      transform: 'scale(1)',
    },
    false: {
      transform: 'scale(0.5)',
    },
  };

  return (
    <VisibilitySensor
      onChange={(isVisible: boolean) => setElementIsVisible(isVisible)}
      // minTopValue={100}
    >
      <div className={cls.feature}>
        {/* icon */}
        <motion.div
          variants={variant}
          transition={{
            duration: 1,
            type: 'ease-out',
          }}
          animate={`${elementIsVisible}`}
          className={cls.icon}
        >
          <img src={icon} alt='Error' className={cls.img} />
        </motion.div>

        <span className={cls.title}>{title}</span>

        <span className={cls.text}>
          Nuns element's, dolor vitae laconia pulvinate, augur felid scelerisque libero, sit amen
          laurent lorem.
        </span>

        <span className={cls.description}>Learn more</span>
      </div>
    </VisibilitySensor>
  );
});
