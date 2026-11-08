import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Plans from './pages/plans';
import Reports from './pages/reports';

/* Page ids match the ids of the header navigation items.
   Add new pages here as you build them (indicators, food-security, ...). */
const PAGES = {
  home: Home,
  plans: Plans,
  reports: Reports,
};

function App() {
  const [page, setPage] = useState('home');

  const navigate = (id) => {
    if (PAGES[id]) setPage(id);
  };

  // Always start a new page at the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [page]);

  const Page = PAGES[page];

  return (
    <>
      <Header activeId={page} onNavigate={navigate} />
      <main>
        <Page onNavigate={navigate} />
      </main>
      <Footer />
    </>
  );
}

export default App;
