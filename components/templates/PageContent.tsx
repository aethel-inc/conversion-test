'use client';

import { usePathname } from 'next/navigation';

export default function PageContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <main key={pathname} className="page-wrapper">
      {children}
    </main>
  );
}
