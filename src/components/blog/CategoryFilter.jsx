import clsx from 'clsx';

export default function CategoryFilter({
  categories,
  activeCategory,
  onSelect,
}) {
  return (
    <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-none">
      <button
        type="button"
        onClick={() => onSelect('all')}
        className={clsx(
          'flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer',
          activeCategory === 'all'
            ? 'bg-neon-cyan/20 text-neon-cyan neon-border-cyan'
            : 'glass-card hover:bg-white/5 text-gray-400 hover:text-gray-200'
        )}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category.slug}
          type="button"
          onClick={() => onSelect(category.slug)}
          className={clsx(
            'flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer',
            activeCategory === category.slug
              ? 'bg-neon-cyan/20 text-neon-cyan neon-border-cyan'
              : 'glass-card hover:bg-white/5 text-gray-400 hover:text-gray-200'
          )}
        >
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: category.color }}
            aria-hidden="true"
          />
          {category.name}
        </button>
      ))}
    </div>
  );
}
