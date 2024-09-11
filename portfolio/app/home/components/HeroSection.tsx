import Image from 'next/image';
import WordCarousel from './WordCarousel';
import ModeToggle from './ModeToggle';

interface HeroSectionProps {
  isBrightMode: boolean;
  currentWordIndex: number;
  words: string[];
  toggleBrightMode: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isBrightMode, currentWordIndex, words, toggleBrightMode }) => (
  <div className="w-full max-w-[1200px] flex flex-col lg:flex-row p-4 items-center justify-between">
    <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0 lg:mt-8">
      <Image src={isBrightMode ? '/윙크.png' : '/홈 사진.jpg'} alt="Home" width={600} height={400} className="rounded-lg object-cover" />
    </div>

    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
      <h1 className={`text-4xl lg:text-6xl font-extrabold ${isBrightMode ? 'text-[#F7B033]' : 'text-[#333333]'}`}>LEEYEONSEUNG</h1>
      <div className={`w-24 h-1 ${isBrightMode ? 'bg-[#F7B033]' : 'bg-[#333333]'} mt-8 mb-6`}></div>

      <WordCarousel currentWordIndex={currentWordIndex} words={words} isBrightMode={isBrightMode} />

      <ModeToggle isBrightMode={isBrightMode} toggleBrightMode={toggleBrightMode} />
    </div>
  </div>
);

export default HeroSection;
