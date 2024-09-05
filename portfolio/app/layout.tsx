import './globals.css';
import { ReactNode } from 'react';
import ClientProvider from './ClientProvider';
import Header from './Header';

export const metadata = {
  title: 'My Travel Planning Website',
  description: 'Travel planning made easy',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body className="flex flex-col min-h-screen bg-white">
        <ClientProvider>
          <Header /> {/* Header 컴포넌트 렌더링 */}
          <div className="border-b border-[#333333]"></div>
          <main className="flex-grow">{children}</main>
          <footer className="py-4 text-center text-[#333333]">
            <p className="text-sm">© 2024 My Travel Planning Website. All rights reserved.</p>
          </footer>
        </ClientProvider>
      </body>
    </html>
  );
}
