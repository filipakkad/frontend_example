import { useEffect, useState } from 'react';

const useViewport = () => {
  const [windowSize, setWindowSize] = useState({
    width: NaN,
    height: NaN,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
};

export { useViewport };
