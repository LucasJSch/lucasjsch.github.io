'use client';
import { useState } from 'react';
import { Menu, X, SunMoon } from 'lucide-react';
const navigation = [['About', 'about'], ['Experience', 'timeline'], ['Project AirSim', 'project-airsim-solutions'], ['Case Studies', 'case-studies'], ['Skills', 'skills'], ['Education', 'education'], ['Contact', 'contact']];
export function Header() {
  const [open, setOpen] = useState(false);
  function toggleTheme() { const dark = document.documentElement.classList.toggle('dark'); try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch {} }
  return <header className="site-header"><div className="shell header-inner"><a href="#home" className="monogram" aria-label="Lucas Scheinkerman home">LS.</a><nav id="navigation" className={open ? 'navigation open' : 'navigation'} aria-label="Primary" onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } }}>{navigation.map(([label,id])=><a key={id} href={'#'+id} onClick={()=>setOpen(false)}>{label}</a>)}</nav><div className="header-actions"><button className="icon-button" aria-label="Toggle light and dark theme" onClick={toggleTheme}><SunMoon size={20}/></button><button id="menu-toggle" className="icon-button menu-button" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></div></header>;
}
