import clsx from 'clsx';

const BORDER_CLASSES = {
  cyan: 'neon-border-cyan',
  magenta: 'neon-border-magenta',
  purple: 'neon-border-purple',
};

export default function NeonBorder({
  color = 'cyan',
  children,
  className,
}) {
  return (
    <div
      className={clsx(
        'rounded-2xl transition-shadow duration-300 hover:shadow-lg',
        BORDER_CLASSES[color],
        color === 'cyan' && 'hover:shadow-neon-cyan',
        color === 'magenta' && 'hover:shadow-neon-magenta',
        color === 'purple' && 'hover:shadow-neon-purple',
        className
      )}
    >
      {children}
    </div>
  );
}
