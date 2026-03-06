import { Link } from 'react-router';
import clsx from 'clsx';

const VARIANT_CLASSES = {
  primary: [
    'bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold',
    'hover:shadow-neon-cyan hover:scale-105',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/50',
    'active:scale-95',
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none',
  ].join(' '),
  secondary: [
    'bg-transparent border border-neon-cyan/50 text-neon-cyan',
    'hover:bg-neon-cyan/10 hover:border-neon-cyan hover:shadow-neon-cyan hover:scale-105',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/50',
    'active:scale-95',
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none',
  ].join(' '),
  ghost: [
    'bg-transparent text-gray-300',
    'hover:text-neon-cyan hover:scale-105',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20',
    'active:scale-95',
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100',
  ].join(' '),
};

const SIZE_CLASSES = {
  sm: 'px-4 py-1.5 text-xs rounded-lg',
  md: 'px-6 py-2.5 text-sm rounded-xl',
  lg: 'px-8 py-3.5 text-base rounded-xl',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className,
  disabled = false,
  ...rest
}) {
  const combinedClassName = clsx(
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 cursor-pointer',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className
  );

  if (href) {
    return (
      <Link to={href} className={combinedClassName} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
