import { useState } from 'react';
import clsx from 'clsx';
import { formatDate } from '@utils/formatDate';

export default function PostMeta({ author, date, readingTime, className }) {
  const [isAvatarError, setIsAvatarError] = useState(false);

  const firstLetter = author?.name?.charAt(0)?.toUpperCase() || '?';

  return (
    <div
      className={clsx(
        'flex items-center gap-2 text-sm text-gray-400',
        className
      )}
    >
      {author && (
        <>
          {author.avatar && !isAvatarError ? (
            <img
              src={author.avatar}
              alt={author.name}
              className="w-6 h-6 rounded-full object-cover"
              onError={() => setIsAvatarError(true)}
            />
          ) : (
            <div className="w-6 h-6 rounded-full bg-neon-cyan/20 text-neon-cyan flex items-center justify-center text-xs font-semibold">
              {firstLetter}
            </div>
          )}
          <span className="text-gray-300">{author.name}</span>
          <span className="text-gray-600" aria-hidden="true">
            &middot;
          </span>
        </>
      )}

      {date && (
        <>
          <time dateTime={date}>{formatDate(date)}</time>
          <span className="text-gray-600" aria-hidden="true">
            &middot;
          </span>
        </>
      )}

      {readingTime && (
        <span className="flex items-center gap-1">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
            />
          </svg>
          {readingTime} min read
        </span>
      )}
    </div>
  );
}
