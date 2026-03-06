import { useScrollProgress } from '@hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px]">
      <div
        className="h-full bg-gradient-to-r from-neon-cyan to-neon-magenta"
        style={{
          width: `${progress}%`,
          boxShadow:
            '0 0 8px rgba(0, 240, 255, 0.6), 0 0 20px rgba(0, 240, 255, 0.3)',
          transition: 'width 100ms linear',
        }}
      />
    </div>
  );
}
