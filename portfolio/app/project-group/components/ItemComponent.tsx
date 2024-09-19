'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Item {
  name: string;
  image?: string;
  projectName: string;
  duration: string;
  languages: string;
  frameworks: string;
}

const ItemComponent: React.FC<{ item: Item }> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const images =
    item.projectName === 'ERP System'
      ? [
          '/ERP_drawio.png',
          '/ERP_figma.png',
          '/ERP_google-sheet.png',
          '/ERP_main.png',
          '/ERP_열추가.png',
          '/ERP_행추가.png',
          '/ERP_테이블추가.png',
          '/ERP_deleted.png',
          '/ERP_password.png',
          '/ERP_setting.png',
          '/ERP_template.png',
        ]
      : item.projectName === '랜덤 포켓몬'
      ? ['/포켓몬이미지.png', '/포켓몬1.png', '/포켓몬2.png', '/포켓몬3.png']
      : item.projectName === '스트레스 블로그'
      ? ['/스트레스1.png', '/스트레스2.png', '/스트레스 blog.png', '/스트레스 blog list.png', '/스트레스 blog coments.png']
      : item.projectName === '영양제 조절 사이트'
      ? [
          '/영양제 설계1.png',
          '/영양제 설계2.png',
          '/영양제 설계3.png',
          '/영양제 설계4.png',
          '/영양제.png',
          '/영양제 프로필.png',
          '/영양제 추가.png',
          '/영양제 추가 2.png',
          '/영양제 추가 3.png',
          '/영양분 정보.png',
          '/영양제 언어 설정.png',
          '/영양제 언어 설정1.png',
          '/영양제 언어 설정 2.png',
          '/영양제 언어 설정 3.png',
        ]
      : [];

  const openModal = () => {
    if (item.projectName === 'ERP System') {
      setModalImage(images[0]);
      setCurrentIndex(0);
    } else if (item.projectName === '랜덤 포켓몬') {
      setModalImage(images[0]);
      setCurrentIndex(0);
    } else if (item.projectName === '스트레스 블로그') {
      setModalImage(images[0]);
      setCurrentIndex(0);
    } else if (item.projectName === '영양제 조절 사이트') {
      setModalImage(images[0]);
      setCurrentIndex(0);
    } else {
      console.log('자세히 보기 클릭됨');
    }
  };

  const closeModal = () => {
    setModalImage(null);
    setIsHovered(false);
  };

  const showPreviousImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setModalImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setModalImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const openNotion = () => {
    if (item.projectName === 'ERP System') {
      window.open('https://kongukjae.notion.site/ERP-abc3f61cb1ce4a52859ab0f5c4aedec4?pvs=4', '_blank');
    } else if (item.projectName === '랜덤 포켓몬') {
      window.open('https://kongukjae.notion.site/랜덤-포켓몬-abcdefg123456', '_blank'); // Notion 링크를 실제 링크로 교체하세요.
    } else if (item.projectName === '스트레스 블로그') {
      window.open('https://kongukjae.notion.site/스트레스-블로그-abcdefg123456', '_blank'); // Notion 링크를 실제 링크로 교체하세요.
    } else if (item.projectName === '영양제 조절 사이트') {
      window.open('https://kongukjae.notion.site/영양제-조절-사이트-abcdefg123456', '_blank'); // Notion 링크를 실제 링크로 교체하세요.
    } else {
      console.log('Notion 링크 클릭됨');
    }
  };

  return (
    <div
      className="relative bg-gray-50 w-full h-[500px] flex flex-col items-center justify-between p-4"
      onMouseEnter={() => {
        // Set hover state only if modal is not open
        if (!modalImage) {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        // Set hover state only if modal is not open
        if (!modalImage) {
          setIsHovered(false);
        }
      }}
    >
      {isHovered && !modalImage && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <button className="bg-[#333333] text-white border border-white px-4 py-2 rounded mb-2" onClick={openModal}>
            자세히 보기
          </button>
          <button className="bg-[#333333] text-white border border-white px-4 py-2 rounded" onClick={openNotion}>
            Notion
          </button>
        </div>
      )}
      <div className="w-full flex flex-col items-center mb-4">{item.image && <img src={item.image} alt={item.name} className="max-w-full h-auto object-contain mb-4" />}</div>
      <div className="w-full flex flex-col items-start text-left mb-8 ml-1">
        <h3 className="text-2xl font-sans font-semibold mb-3 whitespace-nowrap overflow-hidden text-ellipsis">{item.projectName}</h3>
        <p className="text-sm font-sans mb-3 text-gray-500">{item.duration}</p>

        {/* 언어 */}
        <div className="text-sm font-sans mt-3 mb-3.5">
          {item.languages.split(',').map((lang: string, index: number) => (
            <span key={index} className="px-2 py-1 bg-yellow-300 rounded mr-2">
              {lang.trim()}
            </span>
          ))}
        </div>

        {/* 프레임워크 */}
        <div className="text-sm font-sans">
          {item.frameworks.split(',').map((framework: string, index: number) => (
            <span key={index} className="px-2 py-1 bg-blue-300 rounded mr-1">
              {framework.trim()}
            </span>
          ))}
        </div>
      </div>

      {/* 모달 */}
      {modalImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg relative max-w-5xl w-full mx-4">
            <button className="absolute top-2 right-2 text-gray-700 hover:text-gray-500 text-3xl font-bold" onClick={closeModal}>
              &times;
            </button>

            <Image src={modalImage} alt={item.projectName} width={1200} height={900} className="object-contain w-full h-auto" />

            {/* 이미지 설명 */}
            <div className="mt-4 text-center text-gray-700">
              {item.projectName === 'ERP System' && (
                <>
                  {modalImage === '/ERP_drawio.png' && <p>draw.io를 사용하여 시스템 구조 설계</p>}
                  {modalImage === '/ERP_figma.png' && <p>Figma를 사용하여 UI 및 구조 설계</p>}
                  {modalImage === '/ERP_google-sheet.png' && <p>Google Sheet를 사용하여 기능 설계</p>}
                  {modalImage === '/ERP_main.png' && <p>ERP 시스템의 메인 페이지</p>}
                  {modalImage === '/ERP_열추가.png' && <p>ERP 시스템에 열을 추가 기능</p>}
                  {modalImage === '/ERP_행추가.png' && <p>ERP 시스템에 행을 추가 기능</p>}
                  {modalImage === '/ERP_테이블추가.png' && <p>ERP 시스템에 새로운 테이블 추가 기능</p>}
                  {modalImage === '/ERP_deleted.png' && <p>ERP 시스템에서 행 삭제 기능</p>}
                  {modalImage === '/ERP_password.png' && <p>ERP 시스템 비밀번호 변경 화면</p>}
                  {modalImage === '/ERP_setting.png' && <p>ERP 시스템 설정 화면</p>}
                  {modalImage === '/ERP_template.png' && <p>ERP 시스템의 카테고리 추천 기능</p>}
                </>
              )}
              {item.projectName === '랜덤 포켓몬' && (
                <>
                  {modalImage === '/포켓몬이미지.png' && <p></p>}
                  {modalImage === '/포켓몬1.png' && <p></p>}
                  {modalImage === '/포켓몬2.png' && <p></p>}
                  {modalImage === '/포켓몬3.png' && <p></p>}
                </>
              )}
              {item.projectName === '스트레스 블로그' && (
                <>
                  {modalImage === '/스트레스1.png' && <p></p>}
                  {modalImage === '/스트레스2.png' && <p></p>}
                  {modalImage === '/스트레스 blog.png' && <p></p>}
                  {modalImage === '/스트레스 blog list.png' && <p></p>}
                  {modalImage === '/스트레스 blog coments.png' && <p></p>}
                </>
              )}
              {item.projectName === '영양제 조절 사이트' && (
                <>
                  {modalImage === '/영양제 설계1.png' && <p></p>}
                  {modalImage === '/영양제 설계2.png' && <p></p>}
                  {modalImage === '/영양제 설계3.png' && <p></p>}
                  {modalImage === '/영양제 설계4.png' && <p></p>}
                  {modalImage === '/영양제.png' && <p></p>}
                  {modalImage === '/영양제 프로필.png' && <p></p>}
                  {modalImage === '/영양제 추가.png' && <p></p>}
                  {modalImage === '/영양제 추가 2.png' && <p></p>}
                  {modalImage === '/영양제 추가 3.png' && <p></p>}
                  {modalImage === '/영양분 정보.png' && <p></p>}
                  {modalImage === '/영양제 언어 설정.png' && <p></p>}
                  {modalImage === '/영양제 언어 설정1.png' && <p></p>}
                  {modalImage === '/영양제 언어 설정 2.png' && <p></p>}
                  {modalImage === '/영양제 언어 설정 3.png' && <p></p>}
                </>
              )}
            </div>

            {/* 썸네일 이미지들 */}
            {item.projectName === 'ERP System' || item.projectName === '랜덤 포켓몬' || item.projectName === '스트레스 블로그' || item.projectName === '영양제 조절 사이트' ? (
              <div className="flex overflow-x-auto mt-4 py-2 border-t border-gray-200">
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    className={`w-32 h-32 cursor-pointer relative flex-shrink-0 border-4 ${
                      currentIndex === idx ? 'border-gray-400' : 'border-transparent'
                    } transition-transform transform hover:scale-105`}
                    onClick={() => {
                      setModalImage(src);
                      setCurrentIndex(idx);
                    }}
                  >
                    <Image src={src} alt={`Thumbnail ${idx + 1}`} layout="fill" objectFit="cover" className="rounded shadow" />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          {/* 모달 외부의 내비게이션 버튼들 */}
          <button className="fixed top-1/2 left-4 transform -translate-y-1/2 text-gray-600 text-7xl font-bold rounded-full p-8 hidden md:block" onClick={showPreviousImage}>
            &lt;
          </button>
          <button className="fixed top-1/2 right-4 transform -translate-y-1/2 text-gray-600 text-7xl font-bold rounded-full p-8 hidden md:block" onClick={showNextImage}>
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemComponent;
