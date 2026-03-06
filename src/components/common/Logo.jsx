import { Link } from 'react-router';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span className="font-display font-bold text-xl md:text-2xl gradient-text tracking-tight">
        NeonPulse
      </span>
    </Link>
  );
}
