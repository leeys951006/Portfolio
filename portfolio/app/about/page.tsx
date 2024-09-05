'use client';

import { useContext } from 'react';
import { BrightModeContext } from '../ClientProvider';
import BalloonCursor from '../../components/BalloonCursor';

export default function HomePage() {
  const { isBrightMode } = useContext(BrightModeContext);

  return (
    <div className={`min-h-screen ${isBrightMode ? 'bg-[#F7B033]' : 'bg-[#333333]'} flex flex-col items-center justify-center p-4`}>
      
      {/* Responsive flex container for two boxes */}
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-4 w-full md:w-auto md:h-auto">
        
        {/* Left box */}
        <div className={`w-full md:w-180 h-auto md:h-200 bg-[#f9f9f9] shadow-md md:shadow-xl md:transform md:hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg flex flex-col text-gray-900 p-4`}>
          <h1 className="text-3xl font-bold text-center mb-4" style={{ color: '#333333' }}>Stack</h1>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex justify-center items-center space-x-4">
              <img src="/html.png" alt="HTML" className="w-2/5 md:w-30 h-auto"/>
             
            </div>
            <div className="flex justify-center items-center space-x-4">
              <img src="/css.png" alt="CSS" className="w-1/4 md:w-30 h-auto"/>
           
            </div>
            <div className="flex justify-center items-center space-x-4">
              <img src="/js.png" alt="JavaScript" className="w-1/4 md:w-30 h-auto"/>
             
            </div>
            <div className="flex justify-center items-center space-x-4">
              <img src="/ts.png" alt="TypeScript" className="w-1/4 md:w-30 h-auto"/>
              
            </div>
            <div className="flex justify-center items-center space-x-4">
              <img src="/python.png" alt="Python" className="w-1/4 md:w-30 h-auto"/>
             
            </div>
          </div>
        </div>

        {/* Right box */}
        <div className={`w-full md:w-180 h-auto md:h-200 bg-[#f9f9f9] shadow-md md:shadow-xl md:transform md:hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg flex flex-col text-gray-900 p-4`}>
          <h1 className="text-3xl font-bold text-center mb-4" style={{ color: '#333333' }}>Framework</h1>
          <div className="flex flex-col md:flex-row md:space-x-4 w-full items-center justify-center flex-grow">
            
            {/* Left column */}
            <div className="flex flex-col space-y-4 items-center w-full md:w-1/2">
              <img src="/next.png" alt="Next.js" className="w-1/3 md:w-40 h-20"/>
              <img src="/nest.png" alt="NestJS" className="w-1/3 md:w-40 h-20"/>
              <img src="/fastapi.png" alt="FastAPI" className="w-1/2 md:w-60 h-20"/>
              <img src="/node.png" alt="Node.js" className="w-1/2 md:w-60 h-20"/>
              <img src="/react.png" alt="React" className="w-1/2 md:w-60 h-20"/>
            </div>
            
            {/* Right column */}
            <div className="flex flex-col space-y-4 items-center w-full md:w-1/2">
              <img src="/mysql.png" alt="MySQL" className="w-3/4 md:w-60 h-30"/>
              <img src="/sql.png" alt="SQL" className="w-2/4 md:w-60 h-40"/>
            </div>

          </div>
        </div>
      </div>
      
      <BalloonCursor />
      
    </div>
  );
}
