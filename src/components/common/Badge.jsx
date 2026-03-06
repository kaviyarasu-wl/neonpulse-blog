import clsx from 'clsx';

export default function Badge({ label, color = '#00F0FF', className }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider glass-card',
        className
      )}
      style={{
        borderLeft: `3px solid ${color}`,
        color,
      }}
    >
      {label}
    </span>
  );
}
