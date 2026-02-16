'use client';

import type { TradePack } from '@/lib/types';
import { COLUMNS } from '@/lib/types';
import { useFilter } from '@/hooks/useFilter';
import { useSort } from '@/hooks/useSort';
import { FilterBar } from './FilterBar';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

interface TradePackTableProps {
  data: TradePack[];
}

export function TradePackTable({ data }: TradePackTableProps) {
  const {
    filteredData,
    filterState,
    toggleSpecialtyZone,
    toggleDestination,
    toggleRewardItem,
    bulkToggleSpecialtyZones,
    bulkToggleDestinations,
    setSearchText,
    clearFilters,
  } = useFilter(data);

  const { sortedData, sortState, handleSort } = useSort(filteredData);

  return (
    <div className="space-y-4">
      <FilterBar
        filterState={filterState}
        onToggleSpecialtyZone={toggleSpecialtyZone}
        onToggleDestination={toggleDestination}
        onToggleRewardItem={toggleRewardItem}
        onBulkToggleSpecialtyZones={bulkToggleSpecialtyZones}
        onBulkToggleDestinations={bulkToggleDestinations}
        onSetSearchText={setSearchText}
        onClearFilters={clearFilters}
        totalCount={data.length}
        filteredCount={filteredData.length}
      />

      <div className="overflow-x-auto rounded-xl border border-border-primary bg-bg-card">
        <table className="w-full min-w-[640px]">
          <thead className="border-b border-border-primary bg-bg-secondary">
            <tr>
              {COLUMNS.map((col) => (
                <TableHeader
                  key={col.key}
                  column={col}
                  sortState={sortState}
                  onSort={handleSort}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((pack) => <TableRow key={pack.id} pack={pack} />)
            ) : (
              <tr>
                <td colSpan={COLUMNS.length} className="px-4 py-12 text-center">
                  <p className="text-lg font-medium text-text-secondary">No trade packs found</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Try adjusting your filters to see more results.
                  </p>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-3 text-sm font-medium text-accent-gold transition-colors hover:text-accent-gold-dim"
                  >
                    Clear all filters
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
