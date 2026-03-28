import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Disable browser's built-in scroll restoration so reload always starts at top
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
