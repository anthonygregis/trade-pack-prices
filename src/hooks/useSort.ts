'use client';

import { useState, useMemo, useCallback } from 'react';
import type { TradePack, SortKey, SortState } from '@/lib/types';

export function useSort(data: TradePack[]) {
  const [sortState, setSortState] = useState<SortState>({
    key: 'packName',
    direction: 'asc',
  });

  const handleSort = useCallback((key: SortKey) => {
    setSortState((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  }, []);

  const sortedData = useMemo(() => {
    const sorted = [...data].sort((a, b) => {
      const aVal = a[sortState.key];
      const bVal = b[sortState.key];

      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortState.direction === 'asc' ? aVal - bVal : bVal - aVal;
      }

      const aStr = String(aVal).toLowerCase();
      const bStr = String(bVal).toLowerCase();

      if (aStr < bStr) return sortState.direction === 'asc' ? -1 : 1;
      if (aStr > bStr) return sortState.direction === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [data, sortState]);

  return { sortedData, sortState, handleSort };
}
