'use client';

import Image from 'next/image';
import { useContext, useState, useEffect } from 'react';
import { BrightModeContext } from './ClientProvider';

export default function HomePage() {
  const { isBrightMode, toggleBrightMode } = useContext(BrightModeContext);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['개발자', '이연승', '도전자'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen ${isBrightMode ? 'bg-[#f0f0f0]' : 'bg-white'} flex flex-col items-center justify-between`}>
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row p-4 items-center justify-between">
        <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0 lg:mt-8">
          <Image src={isBrightMode ? '/홈 사진2.jpg' : '/홈 사진.jpg'} alt="Home" width={600} height={400} className="rounded-lg object-cover" />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <h1 className={`text-4xl lg:text-6xl font-extrabold ${isBrightMode ? 'text-[#F7B033]' : 'text-[#333333]'}`}>LEEYEONSEUNG</h1>
          <div className={`w-24 h-1 ${isBrightMode ? 'bg-[#F7B033]' : 'bg-[#333333]'} mt-8 mb-6`}></div>

          <p className={`text-lg lg:text-xl mt-4 ${isBrightMode ? 'text-[#F7B033]' : 'text-[#333333]'}`}>
            새로운 도전을 두려워하지 않는{' '}
            <span className="inline-block overflow-hidden align-middle" style={{ height: '40px', verticalAlign: 'middle' }}>
              <span className="block transition-transform duration-500 ease-in-out" style={{ transform: `translateY(-${currentWordIndex * 40}px)` }}>
                {words.map((word, index) => (
                  <span key={index} className="block h-[40px] leading-[40px]">
                    {word}
                  </span>
                ))}
              </span>
            </span>
            입니다.
          </p>

          <div className="flex items-center mt-6">
            <span className={`mr-2 text-sm ${isBrightMode ? 'text-[#F7B033]' : 'text-[#333333]'}`}>Dark Mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={isBrightMode} onChange={toggleBrightMode} className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F7B033]"></div>
            </label>
            <span className={`ml-2 text-sm ${isBrightMode ? 'text-[#F7B033]' : 'text-[#333333]'}`}>Bright Mode</span>
          </div>
        </div>
      </div>

      <div className={`w-full h-[300px] flex items-center justify-center mt-12 ${isBrightMode ? 'bg-[#F7B033]' : 'bg-[#333333]'}`}>
        <p className={`text-2xl ${isBrightMode ? 'text-white' : 'text-white'}`}>새로운 하단 섹션</p>
      </div>
    </div>
  );
}
