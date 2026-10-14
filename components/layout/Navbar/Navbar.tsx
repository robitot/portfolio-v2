'use client';

import { useState } from 'react';
import { NAV, NAV_IDS } from '@/data/navigation';
import { PROFILE } from '@/data/profile';
import { useActiveSection } from '@/hooks/useActiveSection';
import { BurgerIcon } from '@/components/ui/icons';
import './Navbar.css';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_IDS);
  return (
    <header className="nav">
      <div className="nav-in">
        <a className="logo" href="#top" aria-label={`${PROFILE.name}, back to top`}>
          <b>RC</b>
          <span>{PROFILE.name}</span>
        </a>
        <nav className="nl-row" aria-label="Footer">
          {NAV.map((n) => (
            <Link key={n.id} className="nl" href={`/#${n.id}`}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          className="burger"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <BurgerIcon />
        </button>
      </div>
      <div className={open ? 'mnav open' : 'mnav'}>
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
      </div>
    </header>
  );
}
