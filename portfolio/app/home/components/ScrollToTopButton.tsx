import Image from 'next/image';

interface ScrollToTopButtonProps {
  isBrightMode: boolean;
  scrollToTop: () => void;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ isBrightMode, scrollToTop }) => (
  <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
    <Image src={isBrightMode ? '/위.png' : '/위2.png'} alt="Scroll to top" width={40} height={40} />
  </button>
);

export default ScrollToTopButton;
