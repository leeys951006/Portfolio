'use client';

import { useContext, useState } from 'react';
import { BrightModeContext } from '../ClientProvider';
import BalloonCursor from '../../components/BalloonCursor';

export default function HomePage() {
  const { isBrightMode } = useContext(BrightModeContext);
  const [activeButton, setActiveButton] = useState('All');

  // 색상 값을 직접 설정합니다.
  const buttonBgColor = isBrightMode ? '#F5A623' : '#444444'; // 기존보다 더 눈에 띄는 색상으로 조정

  return (
    <div className={`min-h-screen ${isBrightMode ? 'bg-[#f0f0f0]' : 'bg-white'} flex flex-col items-center justify-between`}>
      <div className={`w-full min-h-screen flex flex-col items-center justify-center space-y-8 ${isBrightMode ? 'bg-[#F7B033]' : 'bg-[#333333]'}`}>
        {/* 새로 추가된 div */}
        <div style={{ backgroundColor: buttonBgColor }} className="p-4 rounded-full shadow-lg border border-gray-300">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveButton('All')}
              className={`px-4 py-2 rounded-full ${activeButton === 'All' ? 'bg-white text-black font-bold' : `bg-${isBrightMode ? 'bg-[#F7B033]' : 'bg-[#333333]'} text-white`}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveButton('Group')}
              className={`px-4 py-2 rounded-full ${activeButton === 'Group' ? 'bg-white text-black font-bold' : `bg-${isBrightMode ? 'bg-[#F7B033]' : 'bg-[#333333]'} text-white`}`}
            >
              Group
            </button>
            <button
              onClick={() => setActiveButton('Solo')}
              className={`px-4 py-2 rounded-full ${activeButton === 'Solo' ? 'bg-white text-black font-bold' : `bg-${isBrightMode ? 'bg-[#F7B033]' : 'bg-[#333333]'} text-white`}`}
            >
              Solo
            </button>
          </div>
        </div>
      </div>
      <BalloonCursor />
    </div>
  );
}
