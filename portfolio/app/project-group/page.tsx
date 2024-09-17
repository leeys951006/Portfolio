'use client'

import { useContext, useState, useEffect } from 'react';
import { BrightModeContext } from '../../app/ClientProvider';
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
  const groupItems: { name: string, image?: string }[] = [{ name: 'Group Item', image: '/ERP_main.png' }];
  const soloItems: { name: string }[] = [
    { name: 'Solo Item 1' },
    { name: 'Solo Item 2' },
    { name: 'Solo Item 3' },
    { name: 'Solo Item 4' },
    { name: 'Solo Item 5' },
    { name: 'Solo Item 6' },
  ];

  // 활성화된 버튼에 따라 표시할 아이템 결정
  let items: { name: string, image?: string }[] = [];
  if (activeButton === 'Group') {
    items = groupItems;
  } else if (activeButton === 'Solo') {
    items = soloItems;
  } else if (activeButton === 'All') {
    items = groupItems.concat(soloItems);
  }

  // 상태 업데이트 후 렌더링 강제
  useEffect(() => {
    // 상태 업데이트가 적용되지 않는 경우 강제로 렌더링
    const handleResize = () => {
      // 페이지 리사이즈 이벤트를 감지하여 렌더링 강제
      window.dispatchEvent(new Event('resize'));
    };
    handleResize();
  }, [isBrightMode]);

  return (
    <div className={`min-h-screen ${isBrightMode ? 'bg-[#f0f0f0]' : 'bg-white'} flex flex-col items-center justify-start`}>
      <div
        style={{ paddingTop: '40px', paddingBottom: '40px' }}
        className={`w-full min-h-screen flex flex-col items-center justify-start space-y-8 ${isBrightMode ? 'bg-[#F7B033]' : 'bg-[#333333]'}`}
      >
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
            <div key={index} className="bg-gray-200  w-full h-[500px] flex items-start justify-center">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-w-full h-auto object-contain mt-6" // 가로 사이즈 최대화
                />
              ) : (
                item.name
              )}
            </div>
          ))}
        </div>
      </div>
      <BalloonCursor />
    </div>
  );
}
