interface WordCarouselProps {
  currentWordIndex: number;
  words: string[];
  isBrightMode: boolean;
}

const WordCarousel: React.FC<WordCarouselProps> = ({ currentWordIndex, words, isBrightMode }) => (
  <p className={`text-base lg:text-xl mt-4 ${isBrightMode ? 'text-[#F7B033]' : 'text-[#333333]'}`}>
    새로운 도전을 두려워하지 않는{' '}
    <span className="inline-block overflow-hidden align-middle" style={{ height: '50px', verticalAlign: 'middle' }}>
      <span className="block transition-transform duration-500 ease-in-out" style={{ transform: `translateY(calc(-${currentWordIndex * 50}px))` }}>
        {words.map((word, index) => (
          <span key={index} className="block h-[50px] leading-[50px] text-2xl lg:text-4xl font-bold">
            {word}
          </span>
        ))}
      </span>
    </span>
    입니다.
  </p>
);

export default WordCarousel;
