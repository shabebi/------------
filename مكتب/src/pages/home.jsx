import Hero from '../components/hero';
import Pillars from '../components/pillars';
import About from '../components/about';
import Faq from '../components/faq';

export default function Home({ onNavigate }) {
  return (
    <>
      <Hero />
      {/* Pillar ids (plans, reports, ...) match the header nav ids */}
      <Pillars onExplore={(item) => onNavigate?.(item.id)} />
      <About />
      <Faq />
    </>
  );
}
