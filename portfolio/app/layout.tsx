// app/layout.tsx (Next.js 13.x 기준)

import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'My Travel Planning Website',
  description: 'Travel planning made easy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* 로고 */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src="/logo.png" alt="Logo" width={150} height={50} className="cursor-pointer" />
              </Link>
            </div>

            {/* 메뉴 */}
            <nav className="space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-500">
                홈
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-500">
                소개
              </Link>
              <Link href="/team-projects" className="text-gray-700 hover:text-blue-500">
                팀프로젝트
              </Link>
              <Link href="/personal-projects" className="text-gray-700 hover:text-blue-500">
                개인프로젝트
              </Link>
            </nav>
          </div>
        </header>

        {/* 메인 콘텐츠 */}
        <main>{children}</main>
      </body>
    </html>
  );
}
