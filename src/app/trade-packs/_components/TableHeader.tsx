import type { SortKey, SortState, ColumnDefinition } from '@/lib/types';
import { SortIndicator } from './SortIndicator';

interface TableHeaderProps {
  column: ColumnDefinition;
  sortState: SortState;
  onSort: (key: SortKey) => void;
}

export function TableHeader({ column, sortState, onSort }: TableHeaderProps) {
  const isActive = sortState.key === column.key;

  return (
    <th
      scope="col"
      className="sticky top-0 z-10 group cursor-pointer select-none whitespace-nowrap bg-bg-secondary px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-text-secondary transition-colors hover:text-accent-gold"
      onClick={() => onSort(column.key)}
      aria-sort={isActive ? (sortState.direction === 'asc' ? 'ascending' : 'descending') : 'none'}
    >
      <div className="flex items-center">
        <span className="hidden sm:inline">{column.label}</span>
        <span className="sm:hidden">{column.shortLabel ?? column.label}</span>
        <SortIndicator active={isActive} direction={sortState.direction} />
      </div>
    </th>
  );
}
