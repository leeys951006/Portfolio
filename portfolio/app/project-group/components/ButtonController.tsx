'use client';

interface ButtonControllerProps {
  activeButton: 'All' | 'Group' | 'Solo';
  setActiveButton: (button: 'All' | 'Group' | 'Solo') => void;
  isBrightMode: boolean;
}

const ButtonController: React.FC<ButtonControllerProps> = ({ activeButton, setActiveButton, isBrightMode }) => {
  // 밝기 모드에 따른 버튼 배경색 설정
  const buttonBgColor = isBrightMode ? '#dd9c2a' : '#555555';

  // 버튼 위치 정의
  const buttonPositions: Record<'All' | 'Group' | 'Solo', string> = {
    All: 'translate-x-[-85px]',
    Group: 'translate-x-[-6px]',
    Solo: 'translate-x-[78px]',
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div style={{ backgroundColor: buttonBgColor }} className="p-4 rounded-full shadow-lg border border-gray-300 relative">
        {/* 슬라이더 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-1/4 h-3/4 bg-white transition-transform duration-300 ease-in-out ${buttonPositions[activeButton]} rounded-l-full rounded-r-full`} />
        </div>

        {/* 버튼들 */}
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
  );
};

export default ButtonController;
