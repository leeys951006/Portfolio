'use client';

import { useContext, useState } from 'react';
import { BrightModeContext } from '../ClientProvider';
import BalloonCursor from '../../components/BalloonCursor';

export default function HomePage() {
  const { isBrightMode } = useContext(BrightModeContext);
  const [activeButton, setActiveButton] = useState<'All' | 'Group' | 'Solo'>('All');

  // 색상 값을 직접 설정합니다.
  const buttonBgColor = isBrightMode ? '#dd9c2a' : '#555555';

  // 버튼들의 위치를 조정합니다.
  const buttonPositions: Record<'All' | 'Group' | 'Solo', string> = {
    All: 'translate-x-[-85px]',
    Group: 'translate-x-[-6px]',
    Solo: 'translate-x-[78px]',
  };

  // 각 카테고리의 아이템 정의
  const groupItems: string[] = ['Group Item'];
  const soloItems: string[] = ['Solo Item 1', 'Solo Item 2', 'Solo Item 3', 'Solo Item 4', 'Solo Item 5', 'Solo Item 6'];

  // 활성화된 버튼에 따라 표시할 아이템 결정
  let items: string[] = [];
  if (activeButton === 'Group') {
    items = groupItems;
  } else if (activeButton === 'Solo') {
    items = soloItems;
  } else if (activeButton === 'All') {
    items = groupItems.concat(soloItems);
  }

  return (
    <div className={`min-h-screen ${isBrightMode ? 'bg-[#f0f0f0]' : 'bg-white'} flex flex-col items-center justify-start`}>
      <div className={`w-full min-h-screen flex flex-col items-center justify-start pt-16 pb-16 space-y-8 ${isBrightMode ? 'bg-[#F7B033]' : 'bg-[#333333]'}`}>
        {/* 버튼 컨트롤러 */}
        <div className="w-full flex items-center justify-center">
          <div style={{ backgroundColor: buttonBgColor }} className="p-4 rounded-full shadow-lg border border-gray-300 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-1/4 h-3/4 bg-white transition-transform duration-300 ease-in-out ${buttonPositions[activeButton]} rounded-l-full rounded-r-full`} />
            </div>
            <div className="flex space-x-4 relative z-10">
              <button onClick={() => setActiveButton('All')} className={`px-4 py-2 rounded-full ${activeButton === 'All' ? 'text-black font-bold' : 'text-white'}`}>
                All
              </button>
              <button onClick={() => setActiveButton('Group')} className={`px-4 py-2 rounded-full ${activeButton === 'Group' ? 'text-black font-bold' : 'text-white'}`}>
                Group
              </button>
              <button onClick={() => setActiveButton('Solo')} className={`px-4 py-2 rounded-full ${activeButton === 'Solo' ? 'text-black font-bold' : 'text-white'}`}>
                Solo
              </button>
            </div>
          </div>
        </div>

        {/* 아이템 div */}
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-4 gap-4 ">
          {items.map((item, index) => (
            <div key={index} className="bg-gray-200 p-4 w-full h-[500px]">
              {item}
            </div>
          ))}
        </div>
      </div>
      <BalloonCursor />
    </div>
  );
}
