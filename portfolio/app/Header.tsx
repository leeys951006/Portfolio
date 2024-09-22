'use client'; // 클라이언트 컴포넌트

import { useState, useContext } from 'react';
import { BrightModeContext } from './ClientProvider';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const { isBrightMode } = useContext(BrightModeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 사이드바 상태 관리

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="relative container mx-auto px-4 py-4 flex items-center justify-between">
        {/* 로고 중앙 배치 */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image src={isBrightMode ? '/logo2.png' : '/logo.png'} alt="Logo" width={150} height={50} className="cursor-pointer" />
          </Link>
        </div>

        {/* 햄버거 버튼 (모바일용) */}
        <div className="sm:hidden flex items-center ml-auto">
          <button onClick={toggleMenu} className="text-[#333333] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* 기본 메뉴 (데스크탑용) */}
        <nav className="hidden sm:flex space-x-8 ml-auto">
          <Link
            href="/"
            className={`font-semibold ${isBrightMode ? 'text-[#F7B033]' : 'text-[#333333]'} hover:underline ${
              isBrightMode ? 'hover:text-[#FFD700]' : 'hover:text-[#666666]'
            } transition-colors duration-200`}
          >
            홈
          </Link>
          <Link
            href="/about"
            className={`font-semibold ${isBrightMode ? 'text-[#F7B033]' : 'text-[#333333]'} hover:underline ${
              isBrightMode ? 'hover:text-[#FFD700]' : 'hover:text-[#666666]'
            } transition-colors duration-200`}
          >
            소개
          </Link>
          <Link
            href="/project-group"
            className={`font-semibold ${isBrightMode ? 'text-[#F7B033]' : 'text-[#333333]'} hover:underline ${
              isBrightMode ? 'hover:text-[#FFD700]' : 'hover:text-[#666666]'
            } transition-colors duration-200`}
          >
            프로젝트
          </Link>
         
        </nav>

        {/* 사이드바 메뉴 (모바일용) */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out sm:hidden z-20`}
        >
          <button onClick={toggleMenu} className="absolute bottom-4 left-4 focus:outline-none">
            <Image src={isBrightMode ? '/button2.png' : '/button.png'} alt="Close Menu" width={40} height={40} className="cursor-pointer" />
          </button>

          <nav className="mt-16 space-y-4">
            <Link
              href="/"
              onClick={toggleMenu}
              className={`block px-4 py-2 font-semibold hover:text-gray-500 transition-colors duration-200 ${isBrightMode ? 'text-[#F7B033]' : 'text-[#333333]'}`}
            >
              홈
            </Link>
            <Link
              href="/about"
              onClick={toggleMenu}
              className={`block px-4 py-2 font-semibold hover:text-gray-500 transition-colors duration-200 ${isBrightMode ? 'text-[#F7B033]' : 'text-[#333333]'}`}
            >
              소개
            </Link>
            <Link
              href="/project-group"
              onClick={toggleMenu}
              className={`block px-4 py-2 font-semibold hover:text-gray-500 transition-colors duration-200 ${isBrightMode ? 'text-[#F7B033]' : 'text-[#333333]'}`}
            >
              프로젝트
            </Link>
           
          </nav>
        </div>

        {/* 오버레이 - 사이드바가 열렸을 때 메인 콘텐츠 가리기 */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={toggleMenu} // 오버레이 클릭 시 사이드바 닫기
          ></div>
        )}
      </div>
    </header>
  );
}
