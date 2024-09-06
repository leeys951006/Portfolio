'use client';

import { useState, useContext } from 'react';
import { BrightModeContext } from '../ClientProvider';
import BalloonCursor from '../../components/BalloonCursor';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function AboutPage() {
  const { isBrightMode } = useContext(BrightModeContext);
  const [showSlider, setShowSlider] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={`min-h-screen ${isBrightMode ? 'bg-[#f0f0f0]' : 'bg-white'} flex flex-col items-center justify-center m-0`}>
      {/* Stack, Framework 박스 */}
      <div
        className={`flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-4 w-full md:w-full md:h-240 ${
          isBrightMode ? 'bg-[#F7B033]' : 'bg-[#333333]'
        } items-center justify-center`}
      >
        {/* 왼쪽 박스 */}
        <div
          className={`w-full md:w-200 h-160 md:h-200 bg-[#f9f9f9] shadow-md md:shadow-xl md:transform md:hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg flex flex-col text-gray-900 p-4`}
        >
          <h1 className="text-3xl font-bold text-center mb-4" style={{ color: '#333333' }}>
            Stack
          </h1>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex justify-center items-center space-x-4">
              <img src="/html.png" alt="HTML" className="w-2/5 md:w-30 h-auto" />
            </div>
            <div className="flex justify-center items-center space-x-4">
              <img src="/css.png" alt="CSS" className="w-1/4 md:w-30 h-auto" />
            </div>
            <div className="flex justify-center items-center space-x-4">
              <img src="/js.png" alt="JavaScript" className="w-1/4 md:w-30 h-auto" />
            </div>
            <div className="flex justify-center items-center space-x-4">
              <img src="/ts.png" alt="TypeScript" className="w-1/4 md:w-30 h-auto" />
            </div>
            <div className="flex justify-center items-center space-x-4">
              <img src="/python.png" alt="Python" className="w-1/4 md:w-30 h-auto" />
            </div>
          </div>
        </div>

        {/* 오른쪽 박스 */}
        <div
          className={`w-full md:w-200 h-auto md:h-200 bg-[#f9f9f9] shadow-md md:shadow-xl md:transform md:hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg flex flex-col text-gray-900 p-4`}
        >
          <h1 className="text-3xl font-bold text-center mb-4" style={{ color: '#333333' }}>
            Framework
          </h1>
          <div className="flex flex-col md:flex-row md:space-x-4 w-full items-center justify-center flex-grow">
            {/* 왼쪽 열 */}
            <div className="flex flex-col space-y-4 items-center w-full md:w-1/2">
              <img src="/next.png" alt="Next.js" className="w-1/3 md:w-40 h-20" />
              <img src="/nest.png" alt="NestJS" className="w-1/3 md:w-40 h-20" />
              <img src="/fastapi.png" alt="FastAPI" className="w-1/2 md:w-60 h-20" />
              <img src="/node.png" alt="Node.js" className="w-1/2 md:w-60 h-20" />
              <img src="/react.png" alt="React" className="w-1/2 md:w-60 h-20" />
            </div>

            {/* 오른쪽 열 */}
            <div className="flex flex-col space-y-4 items-center w-full md:w-1/2">
              <img src="/mysql.png" alt="MySQL" className="w-3/4 md:w-60 h-30" />
              <img src="/sql.png" alt="SQL" className="w-2/4 md:w-60 h-40" />
            </div>
          </div>
        </div>
      </div>

      {/* Tool 박스 */}
      <div className="w-full md:w-full bg-white flex flex-col items-center p-4">
        <div className="w-full md:w-1/4 bg-white shadow-md rounded-lg p-4 mb-4">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: '#333333' }}>
            Tool
          </h2>
          <div className="flex flex-row flex-wrap items-center justify-center space-x-4">
            <img src="/notion.png" alt="Notion" className="w-10 md:w-10 h-auto cursor-pointer" onClick={() => setShowSlider(true)} />
            <img src="/slack.png" alt="Slack" className="w-10 md:w-10 h-auto" />
            <img src="/git.png" alt="Git" className="w-10 md:w-10 h-auto" />
            <img src="/github.png" alt="GitHub" className="w-10 md:w-10 h-auto" />
            <img src="/figma.png" alt="Figma" className="w-10 md:w-10 h-auto" />
          </div>
        </div>

        {/* New Section 슬라이드 */}
        {showSlider && (
          <div className="w-full md:w-full bg-white shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-bold text-center mb-4" style={{ color: '#333333' }}>
              New Section
            </h2>

            <Slider {...sliderSettings}>
              <div className="flex justify-center">
                <img src="/notion1.png" alt="Notion 1" className="w-full md:w-80 h-auto" />
              </div>
              <div className="flex justify-center">
                <img src="/notion2.png" alt="Notion 2" className="w-full md:w-80 h-auto" />
              </div>
              <div className="flex justify-center">
                <img src="/notion3.png" alt="Notion 3" className="w-full md:w-80 h-auto" />
              </div>
              <div className="flex justify-center">
                <img src="/notion4.png" alt="Notion 4" className="w-full md:w-80 h-auto" />
              </div>
              <div className="flex justify-center">
                <img src="/notion5.png" alt="Notion 5" className="w-full md:w-80 h-auto" />
              </div>
              <div className="flex justify-center">
                <img src="/notion6.png" alt="Notion 6" className="w-full md:w-80 h-auto" />
              </div>
              <div className="flex justify-center">
                <img src="/notion7.png" alt="Notion 7" className="w-full md:w-80 h-auto" />
              </div>
              <div className="flex justify-center">
                <img src="/notion8.png" alt="Notion 8" className="w-full md:w-80 h-auto" />
              </div>
              <div className="flex justify-center">
                <img src="/notion9.png" alt="Notion 9" className="w-full md:w-80 h-auto" />
              </div>
            </Slider>

            <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md" onClick={() => setShowSlider(false)}>
              Close
            </button>
          </div>
        )}
      </div>
      <BalloonCursor excludePages={['about']} />
    </div>
  );
}
