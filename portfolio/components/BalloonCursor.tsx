import { useEffect, useState } from 'react';

export default function BalloonCursor() {
  const [balloonText, setBalloonText] = useState('이 페이지는 pc,모바일로 제작되었습니다');
  const [balloonStyle, setBalloonStyle] = useState({
    backgroundColor: '#333333',
    color: '#ffffff',
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 화면 크기에 따라 모바일 여부 설정
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    const balloon = document.querySelector('.balloon');

    const moveBalloon = (e: MouseEvent) => {
      if (!isMobile && balloon) {
        // 모바일이 아닐 때만 말풍선 이동
        (balloon as HTMLElement).style.left = `${e.clientX + 30}px`; // 오른쪽으로 30px 이동
        (balloon as HTMLElement).style.top = `${e.clientY + 10}px`; // 아래로 10px 이동
      }
    };

    window.addEventListener('mousemove', moveBalloon);

    // 이미지에 마우스가 올려졌을 때 말풍선 텍스트 및 스타일 변경
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
      image.addEventListener('mouseover', () => {
        if (
          (image as HTMLImageElement).src.includes('github.png') ||
          (image as HTMLImageElement).src.includes('notion.png') ||
          (image as HTMLImageElement).src.includes('pdf.png')
        ) {
          setBalloonText('클릭시 해당사이트로 이동합니다');
          setBalloonStyle({
            backgroundColor: '#F7B033',
            color: '#ffffff',
          });
        }
      });
      image.addEventListener('mouseout', () => {
        setBalloonText('이 페이지는 pc,모바일으로 제작되었습니다');
        setBalloonStyle({
          backgroundColor: '#333333',
          color: '#ffffff',
        });
      });
    });

    // 이메일에 마우스가 올려졌을 때 말풍선 텍스트 및 스타일 변경
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
        setBalloonText('이 페이지는 pc,모바일으로 제작되었습니다');
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
  }, [isMobile]);

  // 모바일에서는 말풍선을 렌더링하지 않음
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
        pointerEvents: 'none', // 말풍선이 마우스 이벤트를 막지 않도록
      }}
    >
      {balloonText}
    </div>
  );
}
