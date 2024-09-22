'use client';
import { useState, useContext } from 'react';
import { BrightModeContext } from '../../app/ClientProvider';
import BalloonCursorAbout from '../../components/BalloonCursorAbout';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CSSTransition } from 'react-transition-group';
import './AboutPage.css'; // 애니메이션 CSS 파일
import Image from 'next/image'; // 'Image' 컴포넌트를 가져옵니다.

export default function AboutPage() {
  const { isBrightMode } = useContext(BrightModeContext);
  const [showSlider, setShowSlider] = useState(false);
  const [sliderImages, setSliderImages] = useState<string[]>([]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // 화살표 삭제
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const handleImageClick = (imageSet: string[]) => {
    setSliderImages(imageSet);
    setShowSlider(true);
  };

  const handleCloseSlider = () => {
    setShowSlider(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={` ${isBrightMode ? 'bg-white' : 'bg-white'} flex flex-col items-center justify-center m-0`}>
      {/* Languege 박스 */}
      <div
        className={`flex flex-col items-center justify-center space-y-8 md:flex-col md:space-y-8 w-full h-120 md:w-full md:h-160 ${isBrightMode ? 'bg-[#F7B033]' : 'bg-[#333333]'}`}
      >
        <h1 className="text-3xl font-bold text-white">Front-End</h1>

        {/* Front-end 이미지들 */}
        <div className="flex flex-wrap items-center justify-center space-x-4">
          <img src="/html.png" alt="HTML" className="w-12 h-auto md:w-20 md:h-auto shadow-lg rounded-md transition-transform transform hover:scale-105" />
          <img src="/css.png" alt="CSS" className="w-12 h-auto md:w-20 md:h-auto shadow-lg rounded-md transition-transform transform hover:scale-105" />
          <img src="/js.png" alt="JavaScript" className="w-12 h-auto md:w-20 md:h-auto shadow-lg rounded-md transition-transform transform hover:scale-105" />
          <img src="/ts.png" alt="TypeScript" className="w-12 h-auto md:w-20 md:h-auto shadow-lg rounded-md transition-transform transform hover:scale-105" />
          <img src="/react.png" alt="React" className="w-12 h-auto md:w-20 md:h-auto shadow-lg rounded-md transition-transform transform hover:scale-105" />
          <img src="/next.js.png" alt="Next.js" className="w-12 h-auto md:w-20 md:h-auto shadow-lg rounded-md transition-transform transform hover:scale-105" />
        </div>

        <h1 className="text-3xl font-bold text-white">Back-End</h1>

        {/* Back-end 이미지들 */}
        <div className="flex flex-wrap items-center justify-center space-x-4">
          <img src="/python.png" alt="Python" className="w-12 h-auto md:w-20 md:h-auto shadow-lg rounded-md transition-transform transform hover:scale-105" />
          <img src="/node.js.png" alt="Node.js" className="w-12 h-auto md:w-20 md:h-auto shadow-lg rounded-md transition-transform transform hover:scale-105" />
          <img src="/fastapi.png" alt="FastAPI" className="w-12 h-auto md:w-20 md:h-auto shadow-lg rounded-md transition-transform transform hover:scale-105" />
          <img src="/nest.js.png" alt="Nest.js" className="w-12 h-auto md:w-20 md:h-auto shadow-lg rounded-md transition-transform transform hover:scale-105" />
        </div>

        <h1 className="text-3xl font-bold text-white">Data Base</h1>

        {/* Data Base 이미지들 */}
        <div className="flex flex-wrap items-center justify-center space-x-4">
          <img src="/mysql.png" alt="MySQL" className="w-12 h-auto md:w-20 md:h-auto shadow-lg rounded-md transition-transform transform hover:scale-105" />
          <img src="/sqlite.png" alt="SQLite" className="w-12 h-auto md:w-20 md:h-auto shadow-lg rounded-md transition-transform transform hover:scale-105" />
        </div>
      </div>

      {/* Tool 박스 */}
      <div className="w-full md:w-full bg-white flex flex-col items-center p-4">
        <div className="w-full md:w-1/4 bg-white shadow-md rounded-lg p-4 mb-4">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: '#333333' }}>
            Tool
          </h2>
          <div className="flex flex-row flex-wrap items-center justify-center space-x-4">
            <img
              src="/notion.png"
              alt="Notion"
              className="w-10 md:w-10 h-auto cursor-pointer hover:opacity-75 transition-opacity duration-200"
              onClick={() =>
                handleImageClick(['/notion1.png', '/notion2.png', '/notion3.png', '/notion4.png', '/notion5.png', '/notion6.png', '/notion7.png', '/notion8.png', '/notion9.png'])
              }
            />
            <img
              src="/slack.png"
              alt="Slack"
              className="w-10 md:w-10 h-auto cursor-pointer hover:opacity-75 transition-opacity duration-200"
              onClick={() => handleImageClick(['/slack1.png', '/slack2.png', '/slack3.png', '/slack4.png', '/slack5.png', '/slack6.png'])}
            />
            <img
              src="/git.png"
              alt="Git"
              className="w-10 md:w-10 h-auto cursor-pointer hover:opacity-75 transition-opacity duration-200"
              onClick={() => handleImageClick(['/git1.png', '/git2.png', '/git3.png', '/git4.png'])}
            />
            <img
              src="/github.png"
              alt="GitHub"
              className="w-10 md:w-10 h-auto cursor-pointer hover:opacity-75 transition-opacity duration-200"
              onClick={() => handleImageClick(['/github1.png', '/github2.png'])}
            />
            <img
              src="/figma.png"
              alt="Figma"
              className="w-10 md:w-10 h-auto cursor-pointer hover:opacity-75 transition-opacity duration-200"
              onClick={() => handleImageClick(['/figma1.png', '/figma2.png', '/figma3.png', '/figma4.png', '/figma5.png', '/figma6.png'])}
            />
          </div>
        </div>
      </div>

      {/* New Section 슬라이드 */}
      <CSSTransition in={showSlider} timeout={300} classNames="slide" unmountOnExit onExited={() => setSliderImages([])}>
        <div className="w-full md:w-7/12 bg-white shadow-md rounded-lg p-4 flex flex-col items-center relative pb-10">
          <button className="absolute top-2 right-2 text-2xl font-bold text-gray-800 hover:text-gray-600" onClick={handleCloseSlider}>
            ✖︎
          </button>
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: '#333333' }}>
            작업 내역
          </h2>

          <Slider {...sliderSettings} className="w-full">
            {sliderImages.map((image, index) => (
              <div key={index} className="flex justify-center items-center">
                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
              </div>
            ))}
          </Slider>
        </div>
      </CSSTransition>

      <BalloonCursorAbout />

      {/* Scroll to Top 버튼 */}
      <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
        <Image src={isBrightMode ? '/위.png' : '/위2.png'} alt="Scroll to top" width={40} height={40} />
      </button>
    </div>
  );
}
