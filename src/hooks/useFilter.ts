'use client';

import { useState, useMemo, useCallback } from 'react';
import type { TradePack, FilterState } from '@/lib/types';
import { SPECIALTY_ZONE_OPTIONS } from '@/lib/constants';

export function useFilter(data: TradePack[]) {
  const [filterState, setFilterState] = useState<FilterState>({
    specialtyZones: [],
    destinations: [],
    rewardItems: [],
    searchText: '',
  });

  const toggleSpecialtyZone = useCallback((zone: string) => {
    setFilterState((prev) => ({
      ...prev,
      specialtyZones: prev.specialtyZones.includes(zone)
        ? prev.specialtyZones.filter((z) => z !== zone)
        : [...prev.specialtyZones, zone],
    }));
  }, []);

  const toggleDestination = useCallback((destination: string) => {
    setFilterState((prev) => ({
      ...prev,
      destinations: prev.destinations.includes(destination)
        ? prev.destinations.filter((d) => d !== destination)
        : [...prev.destinations, destination],
    }));
  }, []);

  const toggleRewardItem = useCallback((reward: string) => {
    setFilterState((prev) => ({
      ...prev,
      rewardItems: prev.rewardItems.includes(reward)
        ? prev.rewardItems.filter((r) => r !== reward)
        : [...prev.rewardItems, reward],
    }));
  }, []);

  const bulkToggleSpecialtyZones = useCallback((zones: string[]) => {
    setFilterState((prev) => {
      const allSelected = zones.every((z) => prev.specialtyZones.includes(z));
      return {
        ...prev,
        specialtyZones: allSelected
          ? prev.specialtyZones.filter((z) => !zones.includes(z))
          : [...new Set([...prev.specialtyZones, ...zones])],
      };
    });
  }, []);

  const bulkToggleDestinations = useCallback((destinations: string[]) => {
    setFilterState((prev) => {
      const allSelected = destinations.every((d) => prev.destinations.includes(d));
      return {
        ...prev,
        destinations: allSelected
          ? prev.destinations.filter((d) => !destinations.includes(d))
          : [...new Set([...prev.destinations, ...destinations])],
      };
    });
  }, []);

  const setSearchText = useCallback((text: string) => {
    setFilterState((prev) => ({ ...prev, searchText: text }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilterState({ specialtyZones: [], destinations: [], rewardItems: [], searchText: '' });
  }, []);

  const filteredData = useMemo(() => {
    return data.filter((pack) => {
      // Specialty zone: substring match using the mapping (OR across selected)
      const matchZone =
        filterState.specialtyZones.length === 0 ||
        filterState.specialtyZones.some((zone) => {
          const substring = SPECIALTY_ZONE_OPTIONS[zone];
          return substring && pack.packName.includes(substring);
        });

      // Destination: exact match (OR across selected)
      const matchDestination =
        filterState.destinations.length === 0 ||
        filterState.destinations.includes(pack.destination);

      // Reward item: exact match (OR across selected)
      const matchReward =
        filterState.rewardItems.length === 0 ||
        filterState.rewardItems.includes(pack.rewardItem);

      // Text search: case-insensitive on packName
      const matchSearch =
        filterState.searchText === '' ||
        pack.packName.toLowerCase().includes(filterState.searchText.toLowerCase());

      return matchZone && matchDestination && matchReward && matchSearch;
    });
  }, [data, filterState]);

  return {
    filteredData,
    filterState,
    toggleSpecialtyZone,
    toggleDestination,
    toggleRewardItem,
    bulkToggleSpecialtyZones,
    bulkToggleDestinations,
    setSearchText,
    clearFilters,
  };
}
