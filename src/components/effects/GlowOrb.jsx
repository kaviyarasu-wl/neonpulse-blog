import clsx from 'clsx';

export default function GlowOrb({
  color = '#00F0FF',
  size = 400,
  className,
  style,
}) {
  return (
    <div
      className={clsx('absolute pointer-events-none animate-float', className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(80px)',
        opacity: 0.15,
        ...style,
      }}
      aria-hidden="true"
    />
  );
}
