import { Link } from 'react-router';

export default function PostNavigation({ prevPost, nextPost }) {
  if (!prevPost && !nextPost) {
    return null;
  }

  return (
    <nav
      className="flex justify-between gap-6"
      aria-label="Post navigation"
    >
      <div className="flex-1">
        {prevPost ? (
          <Link
            to={`/blog/${prevPost.slug}`}
            className="glass-card glass-card-hover block p-5 group"
          >
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan transition-colors duration-300 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Previous
                </p>
                <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 line-clamp-1">
                  {prevPost.title}
                </p>
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>

      <div className="flex-1">
        {nextPost ? (
          <Link
            to={`/blog/${nextPost.slug}`}
            className="glass-card glass-card-hover block p-5 group text-right"
          >
            <div className="flex items-center justify-end gap-3">
              <div className="min-w-0">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Next
                </p>
                <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 line-clamp-1">
                  {nextPost.title}
                </p>
              </div>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan transition-colors duration-300 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
