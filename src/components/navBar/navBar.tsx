'use client';

import { useEffect, useState } from 'react';
import NavBarMobile from './navBarMobile';
import NavBarDesktop from './navBarDesktop';


export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return isMobile ? <NavBarMobile /> : <NavBarDesktop />;
}
