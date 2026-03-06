import { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function TableOfContents({ headings, className }) {
  const [activeHeadingId, setActiveHeadingId] = useState('');

  useEffect(() => {
    if (!headings || headings.length === 0) return;

    const headingElements = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean);

    if (headingElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveHeadingId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length === 0) {
    return null;
  }

  return (
    <nav
      className={clsx('glass-card p-6 sticky top-24', className)}
      aria-label="Table of contents"
    >
      <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
        On This Page
      </h3>

      <ul className="space-y-1">
        {headings.map((heading) => {
          const isActive = activeHeadingId === heading.id;
          const indentLevel = heading.level - 2;

          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={clsx(
                  'block py-1.5 text-sm transition-all duration-200 border-l-2',
                  indentLevel > 0 ? 'pl-6' : 'pl-3',
                  isActive
                    ? 'text-neon-cyan border-neon-cyan'
                    : 'text-gray-400 border-transparent hover:text-gray-200 hover:border-gray-600'
                )}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
