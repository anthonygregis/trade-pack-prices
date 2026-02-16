'use client';

import { FilterDropdown } from './FilterDropdown';
import {
  SPECIALTY_ZONE_OPTIONS,
  DESTINATION_OPTIONS,
  SPECIALTY_ZONE_CONTINENTS,
  DESTINATION_CONTINENTS,
  REWARD_OPTIONS,
} from '@/lib/constants';
import type { FilterState } from '@/lib/types';

interface FilterBarProps {
  filterState: FilterState;
  onToggleSpecialtyZone: (zone: string) => void;
  onToggleDestination: (destination: string) => void;
  onToggleRewardItem: (reward: string) => void;
  onBulkToggleSpecialtyZones: (zones: string[]) => void;
  onBulkToggleDestinations: (destinations: string[]) => void;
  onSetSearchText: (text: string) => void;
  onClearFilters: () => void;
  totalCount: number;
  filteredCount: number;
}

const specialtyZoneNames = Object.keys(SPECIALTY_ZONE_OPTIONS);

export function FilterBar({
  filterState,
  onToggleSpecialtyZone,
  onToggleDestination,
  onToggleRewardItem,
  onBulkToggleSpecialtyZones,
  onBulkToggleDestinations,
  onSetSearchText,
  onClearFilters,
  totalCount,
  filteredCount,
}: FilterBarProps) {
  const hasFilters =
    filterState.specialtyZones.length > 0 ||
    filterState.destinations.length > 0 ||
    filterState.rewardItems.length > 0 ||
    filterState.searchText !== '';

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-3">
        <FilterDropdown
          label="Specialty Zone"
          options={specialtyZoneNames}
          selected={filterState.specialtyZones}
          onToggle={onToggleSpecialtyZone}
          groups={SPECIALTY_ZONE_CONTINENTS}
          onBulkToggle={onBulkToggleSpecialtyZones}
        />
        <FilterDropdown
          label="Destination"
          options={DESTINATION_OPTIONS}
          selected={filterState.destinations}
          onToggle={onToggleDestination}
          groups={DESTINATION_CONTINENTS}
          onBulkToggle={onBulkToggleDestinations}
        />
        <FilterDropdown
          label="Reward"
          options={REWARD_OPTIONS}
          selected={filterState.rewardItems}
          onToggle={onToggleRewardItem}
        />
        <div className="relative">
          <input
            type="text"
            value={filterState.searchText}
            onChange={(e) => onSetSearchText(e.target.value)}
            placeholder="Search by name..."
            className="h-[38px] w-48 rounded-lg border border-border-primary bg-bg-secondary px-3 pr-8 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent-gold focus:outline-none"
          />
          {filterState.searchText !== '' && (
            <button
              type="button"
              onClick={() => onSetSearchText('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-text-muted transition-colors hover:text-text-primary"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        {hasFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="text-sm text-text-muted transition-colors hover:text-accent-gold"
          >
            Clear filters
          </button>
        )}
      </div>
      <p className="text-sm text-text-muted">
        {hasFilters ? (
          <>
            Showing <span className="font-medium text-text-secondary">{filteredCount}</span> of{' '}
            {totalCount} packs
          </>
        ) : (
          <>
            <span className="font-medium text-text-secondary">{totalCount}</span> trade packs
          </>
        )}
      </p>
    </div>
  );
}
