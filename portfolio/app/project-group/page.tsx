'use client';

import { useContext } from 'react';
import { BrightModeContext } from '../ClientProvider';
import BalloonCursor from '../../components/BalloonCursor';

export default function HomePage() {
  const { isBrightMode } = useContext(BrightModeContext);

  return (
    <div className={`min-h-screen ${isBrightMode ? 'bg-[#f0f0f0]' : 'bg-white'} flex flex-col items-center justify-between`}>
      <div className={`w-full min-h-screen flex flex-col items-center justify-center space-y-8 ${isBrightMode ? 'bg-[#F7B033]' : 'bg-[#333333]'}`}></div>
      <BalloonCursor />
    </div>
  );
}
