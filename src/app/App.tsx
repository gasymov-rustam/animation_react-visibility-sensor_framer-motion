import { CSSProperties, memo } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Download, Experience, Footer, Header, Hero, Search } from '../components';

export const App = memo(() => {
  const { scrollYProgress } = useScroll();

  const progress: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundImage: 'linear-gradient(to right, red, green, blue)',
    transformOrigin: '0%',
    zIndex: 1000,
  };

  return (
    <>
      <motion.div style={{ ...progress, scaleX: scrollYProgress }} />
      <div className='text-white overflow-hidden'>
        <Header />
        <Hero />
        <Experience />
        <Search />
        <Download />
        <Footer />
      </div>
    </>
  );
});
