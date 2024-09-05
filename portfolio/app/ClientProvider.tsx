'use client'; // 클라이언트 컴포넌트로 설정

import { createContext, useState, ReactNode } from 'react';

export const BrightModeContext = createContext({
  isBrightMode: false,
  toggleBrightMode: () => {},
});

export default function ClientProvider({ children }: { children: ReactNode }) {
  const [isBrightMode, setIsBrightMode] = useState(false);

  const toggleBrightMode = () => {
    setIsBrightMode((prev) => !prev);
  };

  return <BrightModeContext.Provider value={{ isBrightMode, toggleBrightMode }}>{children}</BrightModeContext.Provider>;
}
