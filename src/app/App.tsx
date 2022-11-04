import { memo } from 'react';
import { Download, Experience, Footer, Header, Hero, Search } from '../components';

export const App = memo(() => {
  return (
    <div className='text-white overflow-hidden'>
      <Header />
      <Hero />
      <Experience />
      <Search />
      <Download />
      <Footer />
    </div>
  );
});
