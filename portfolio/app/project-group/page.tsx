'use client';

import { useContext, useState, useEffect } from 'react';
import { BrightModeContext } from '../../app/ClientProvider';
import Image from 'next/image';
import ButtonController from './components/ButtonController';
import ItemComponent from './components/ItemComponent';

interface Item {
  name: string;
  image?: string;
  projectName: string;
  duration: string;
  languages: string;
  frameworks: string;
}

export default function HomePage() {
  const { isBrightMode } = useContext(BrightModeContext);
  const [activeButton, setActiveButton] = useState<'All' | 'Group' | 'Solo'>('All');

  // 그룹 아이템 정의
  const groupItems: Item[] = [
    {
      name: 'Group Item',
      image: '/ERP_main.png',
      projectName: 'ERP System',
      duration: '24.07.15 - 24.08.14',
      languages: 'Tailwind CSS, TypeScript, Python',
      frameworks: 'React, Next.js, Nest.js, Fast API, SQLite',
    },
  ];

  // 솔로 아이템 정의
  const soloItems: Item[] = [
    {
      name: 'Solo Item 1',
      image: '/포켓몬.png',
      projectName: '랜덤 포켓몬',
      duration: '24.05.11 - 24.05.13',
      languages: 'JavaScript',
      frameworks: 'Node.js',
    },
    {
      name: 'Solo Item 2',
      image: '/스트레스 blog.png',
      projectName: '스트레스 블로그',
      duration: '24.05.24 - 24.07.07',
      languages: 'HTML, CSS, JavaScript',
      frameworks: 'Node.js',
    },
    {
      name: 'Solo Item 3',
      image: '/영양제.png',
      projectName: '영양제 조절 사이트',
      duration: '24.07.15 - 24.08.28',
      languages: 'HTML, CSS, JavaScript',
      frameworks: 'SQLite, Node.js',
    },
    {
      name: 'Solo Item 4',
      image: '/PlanT.jpg',
      projectName: '여행 공유 사이트',
      duration: '24.08.23 - 진행중',
      languages: 'Tailwind CSS, TypeScript, Python',
      frameworks: 'React, Next.js, Nest.js, MySQL',
    },
  ];

  // 활성화된 버튼에 따라 표시할 아이템 결정
  let items: Item[] = [];
  if (activeButton === 'Group') {
    items = groupItems;
  } else if (activeButton === 'Solo') {
    items = soloItems;
  } else if (activeButton === 'All') {
    items = groupItems.concat(soloItems);
  }

  // 밝기 모드 변경 시 렌더링 강제
  useEffect(() => {
    const handleResize = () => {
      window.dispatchEvent(new Event('resize'));
    };
    handleResize();
  }, [isBrightMode]);

  // 페이지 최상단으로 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${isBrightMode ? 'bg-[#f0f0f0]' : 'bg-white'} flex flex-col items-center justify-start`}>
      <div
        style={{ paddingTop: '40px', paddingBottom: '40px' }}
        className={`w-full min-h-screen flex flex-col items-center justify-start space-y-8 ${isBrightMode ? 'bg-[#F7B033]' : 'bg-[#333333]'}`}
      >
        {/* 버튼 컨트롤러 */}
        <ButtonController activeButton={activeButton} setActiveButton={setActiveButton} isBrightMode={isBrightMode} />

        {/* 아이템 그리드 */}
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <ItemComponent key={index} item={item} />
          ))}
        </div>
      </div>

      {/* 스크롤 상단으로 이동 버튼 */}
      <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
        <Image src={isBrightMode ? '/위.png' : '/위2.png'} alt="Scroll to top" width={40} height={40} />
      </button>
    </div>
  );
}
