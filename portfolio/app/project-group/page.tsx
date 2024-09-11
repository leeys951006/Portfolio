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

  // 박스 스타일
  const boxStyle = {
    width: '200px',
    height: '150px',
    margin: '10px',
    padding: '20px',
    borderRadius: '8px',
  };

  const groupBoxStyle = {
    ...boxStyle,
    backgroundColor: '#4CAF50',
  };

  const soloBoxStyle = {
    ...boxStyle,
    backgroundColor: '#FF5722',
  };

  // 부모 요소 스타일
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '90vw',
    maxHeight: '400px',

    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '12px',
    backgroundColor: '#fff',
  };

  return (
    <div className={`min-h-screen ${isBrightMode ? 'bg-[#f0f0f0]' : 'bg-white'} flex flex-col items-center justify-between`}>
      <div className={`w-full min-h-screen flex flex-col items-center justify-center space-y-8 ${isBrightMode ? 'bg-[#F7B033]' : 'bg-[#333333]'}`}>
        {/* 버튼 컨트롤러 */}
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

        {/* 박스 부모 요소 */}
        <div style={containerStyle}>
          {(activeButton === 'All' || activeButton === 'Group') && (
            <>
              <div style={groupBoxStyle}>
                <p>Group 박스 1</p>
              </div>
              <div style={groupBoxStyle}>
                <p>Group 박스 2</p>
              </div>
              <div style={groupBoxStyle}>
                <p>Group 박스 3</p>
              </div>
            </>
          )}
          {(activeButton === 'All' || activeButton === 'Solo') && (
            <>
              <div style={soloBoxStyle}>
                <p>Solo 박스 1</p>
              </div>
              <div style={soloBoxStyle}>
                <p>Solo 박스 2</p>
              </div>
              <div style={soloBoxStyle}>
                <p>Solo 박스 3</p>
              </div>
            </>
          )}
        </div>
      </div>
      <BalloonCursor />
    </div>
  );
}
