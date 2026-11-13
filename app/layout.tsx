import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Lucas Scheinkerman | Robotics, Computer Vision & AI Engineer', description: 'Robotics, computer vision, edge AI and LLM systems. Explore Lucas Scheinkerman’s work, from simulation infrastructure to deployed AI applications.', icons: { icon: '/icon.svg', shortcut: '/icon.svg' } };
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><script dangerouslySetInnerHTML={{ __html: `try{const t=localStorage.getItem('theme');const old=localStorage.getItem('darkMode');document.documentElement.classList.toggle('dark',t?t==='dark':old?old==='true':matchMedia('(prefers-color-scheme: dark)').matches)}catch{}` }} /><a href="#main" className="skip-link">Skip to content</a>{children}</body></html>;
}
