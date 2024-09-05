'use client';

import Image from 'next/image';
import { useContext, useState, useEffect } from 'react';
import { BrightModeContext } from './ClientProvider';
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
      behavior: 'smooth', // 부드럽게 스크롤됩니다.
    });
  };

  return (
    <div className={`min-h-screen ${isBrightMode ? 'bg-[#f0f0f0]' : 'bg-white'} flex flex-col items-center justify-between`}>
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row p-4 items-center justify-between">
        <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0 lg:mt-8">
          <Image src={isBrightMode ? '/윙크.png' : '/홈 사진.jpg'} alt="Home" width={600} height={400} className="rounded-lg object-cover" />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <h1 className={`text-4xl lg:text-6xl font-extrabold ${isBrightMode ? 'text-[#F7B033]' : 'text-[#333333]'}`}>LEEYEONSEUNG</h1>
          <div className={`w-24 h-1 ${isBrightMode ? 'bg-[#F7B033]' : 'bg-[#333333]'} mt-8 mb-6`}></div>

          <p className={`text-base lg:text-xl mt-4 ${isBrightMode ? 'text-[#F7B033]' : 'text-[#333333]'}`}>
            새로운 도전을 두려워하지 않는{' '}
            <span className="inline-block overflow-hidden align-middle" style={{ height: '50px', verticalAlign: 'middle' }}>
              <span className="block transition-transform duration-500 ease-in-out" style={{ transform: `translateY(calc(-${currentWordIndex * 50}px))` }}>
                {words.map((word, index) => (
                  <span key={index} className="block h-[50px] leading-[50px] text-2xl lg:text-4xl font-bold">
                    {word}
                  </span>
                ))}
              </span>
            </span>
            입니다.
          </p>

          <div className="flex items-center mt-6">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={isBrightMode} onChange={toggleBrightMode} className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F7B033]"></div>
            </label>
            <span className={`ml-2 text-sm ${isBrightMode ? 'text-[#F7B033]' : 'text-[#333333]'}`}>채용 하기</span>
          </div>
        </div>
      </div>

      <div className={`w-full h-auto lg:h-[300px] flex flex-col items-center justify-center mt-12 p-4 ${isBrightMode ? 'bg-[#F7B033]' : 'bg-[#333333]'}`}>
        <h1 className="text-white font-bold text-3xl lg:text-4xl mb-6 lg:mb-8">정보</h1>

        <div className="flex flex-col lg:flex-row items-center w-full justify-center lg:space-x-16">
          <p className="text-white text-center mb-4 lg:mb-0 lg:mr-8">Phone: 010-5546-0640</p>
          <p className="text-white text-center mb-4 lg:mb-0 lg:mr-8">
            Email: <span className="cursor-pointer hover:text-gray-300 transition-colors duration-200" onClick={copyEmailToClipboard}>leeys951006@gmail.com</span>
          </p>

          <div className="relative flex items-center space-x-4">
            <a href="https://github.com/leeys951006" target="_blank" rel="noopener noreferrer">
              <Image src="/github.png" alt="GitHub" width={40} height={40} className="cursor-pointer hover:opacity-75 transition-opacity duration-200" />
            </a>
            <span className="h-6 w-[2px] bg-white"></span>

            <div className="relative">
              <a href="https://nifty-mountain-1e6.notion.site/6082bd6c7d394c01a33ca3c9395cd3b1?v=7bdd17d9378f42e2bffce1b200cfc53a&pvs=4" target="_blank" rel="noopener noreferrer">
                <Image src="/notion.png" alt="Notion" width={40} height={40} className="cursor-pointer hover:opacity-75 transition-opacity duration-200" />
              </a>
            </div>

            <span className="h-6 w-[2px] bg-white"></span>
            <a href="/이연승_포트폴리오.pdf" target="_blank" rel="noopener noreferrer">
              <Image src="/pdf.png" alt="PDF" width={40} height={40} className="cursor-pointer hover:opacity-75 transition-opacity duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* 오른쪽 하단 고정 버튼 */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center rounded-full shadow-lg"
      >
        <Image src={isBrightMode ? '/위.png' : '/위2.png'} alt="Scroll to top" width={40} height={40} />
      </button>
      <BalloonCursor />
    </div>
  );
}
