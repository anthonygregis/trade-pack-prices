import type { SortDirection } from '@/lib/types';

interface SortIndicatorProps {
  active: boolean;
  direction: SortDirection;
}

export function SortIndicator({ active, direction }: SortIndicatorProps) {
  return (
    <span className={`ml-1 inline-flex transition-colors ${active ? 'text-accent-gold' : 'text-text-muted'}`}>
      {active ? (
        direction === 'asc' ? (
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        ) : (
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        )
      ) : (
        <svg className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4M8 15l4 4 4-4" />
        </svg>
      )}
    </span>
  );
}
