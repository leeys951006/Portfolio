'use client';

import { useContext, useState, useEffect } from 'react';
import { BrightModeContext } from './ClientProvider';
import HeroSection from './home/components/HeroSection';
import InformationSection from './home/components/InformationSection';
import ScrollToTopButton from './home/components/ScrollToTopButton';
import BalloonCursor from '../components/BalloonCursor';

export default function HomePage() {
  const { isBrightMode, toggleBrightMode } = useContext(BrightModeContext);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['이연승', '개발자', '도전자'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('leeys951006@gmail.com').then(() => {
      alert('이메일이 복사되었습니다!');
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`min-h-screen ${isBrightMode ? 'bg-[#f0f0f0]' : 'bg-white'} flex flex-col items-center justify-between`}>
      <HeroSection isBrightMode={isBrightMode} currentWordIndex={currentWordIndex} words={words} toggleBrightMode={toggleBrightMode} />
      <InformationSection isBrightMode={isBrightMode} copyEmailToClipboard={copyEmailToClipboard} />
      <ScrollToTopButton isBrightMode={isBrightMode} scrollToTop={scrollToTop} />
      <BalloonCursor />
    </div>
  );
}
