import { useEffect, useState } from 'react';

interface BalloonCursorProps {
  excludePages?: string[];
}

export default function BalloonCursor({ excludePages = [] }: BalloonCursorProps) {
  const [balloonText, setBalloonText] = useState('이 페이지는 pc,모바일로 제작되었습니다');
  const [balloonStyle, setBalloonStyle] = useState({
    backgroundColor: '#333333',
    color: '#ffffff',
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    const balloon = document.querySelector('.balloon');

    const moveBalloon = (e: MouseEvent) => {
      if (!isMobile && balloon) {
        (balloon as HTMLElement).style.left = `${e.clientX + 30}px`;
        (balloon as HTMLElement).style.top = `${e.clientY + 10}px`;
      }
    };

    window.addEventListener('mousemove', moveBalloon);

    const images = document.querySelectorAll('img');
    images.forEach((image) => {
      image.addEventListener('mouseover', () => {
        if (
          (image as HTMLImageElement).src.includes('github.png') ||
          (image as HTMLImageElement).src.includes('notion.png') ||
          (image as HTMLImageElement).src.includes('pdf.png')
        ) {
          if (!excludePages.includes('about')) {
            setBalloonText('클릭시 해당사이트로 이동합니다');
            setBalloonStyle({
              backgroundColor: '#F7B033',
              color: '#ffffff',
            });
          }
        }
      });
      image.addEventListener('mouseout', () => {
        setBalloonText('이 페이지는 pc,모바일로 제작되었습니다');
        setBalloonStyle({
          backgroundColor: '#333333',
          color: '#ffffff',
        });
      });
    });

    const email = document.querySelector('span.cursor-pointer');
    if (email) {
      email.addEventListener('mouseover', () => {
        setBalloonText('클릭하면 복사됩니다.');
        setBalloonStyle({
          backgroundColor: '#F7B033',
          color: '#ffffff',
        });
      });
      email.addEventListener('mouseout', () => {
        setBalloonText('이 페이지는 pc,모바일로 제작되었습니다');
        setBalloonStyle({
          backgroundColor: '#333333',
          color: '#ffffff',
        });
      });
    }

    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('mousemove', moveBalloon);
      images.forEach((image) => {
        image.removeEventListener('mouseover', () => {});
        image.removeEventListener('mouseout', () => {});
      });
      if (email) {
        email.removeEventListener('mouseover', () => {});
        email.removeEventListener('mouseout', () => {});
      }
    };
  }, [isMobile, excludePages]);

  if (isMobile) {
    return null;
  }

  return (
    <div
      className="balloon"
      style={{
        position: 'fixed',
        padding: '10px',
        borderRadius: '8px',
        backgroundColor: balloonStyle.backgroundColor,
        color: balloonStyle.color,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        pointerEvents: 'none',
      }}
    >
      {balloonText}
    </div>
  );
}
