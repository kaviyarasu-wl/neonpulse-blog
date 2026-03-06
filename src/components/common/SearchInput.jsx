export default function SearchInput({
  value,
  onChange,
  placeholder = 'Search posts...',
}) {
  return (
    <div className="relative group">
      {/* Search icon */}
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-neon-cyan transition-colors duration-300"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-11 pr-4 py-3 rounded-xl glass-card text-sm text-gray-200 placeholder-gray-500 border border-transparent outline-none transition-all duration-300 focus:border-neon-cyan/50 focus:shadow-[0_0_15px_rgba(0,240,255,0.15)] focus:w-[105%]"
      />
    </div>
  );
}
