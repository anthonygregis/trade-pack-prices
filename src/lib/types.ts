export interface TradePack {
  id: string;
  packName: string;
  craftingLocation: string;
  continent: 'West' | 'East' | 'Auroria' | 'Other';
  destination: string;
  rewardItem: string;
  payout: string;
  payoutSortValue: number;
}

export type SortKey = keyof Pick<
  TradePack,
  'packName' | 'craftingLocation' | 'destination' | 'rewardItem' | 'payoutSortValue'
>;

export type SortDirection = 'asc' | 'desc';

export interface SortState {
  key: SortKey;
  direction: SortDirection;
}

export interface FilterState {
  specialtyZones: string[];
  destinations: string[];
  rewardItems: string[];
  searchText: string;
}


export interface ColumnDefinition {
  key: SortKey;
  label: string;
  shortLabel?: string;
}

export const COLUMNS: ColumnDefinition[] = [
  { key: 'packName', label: 'Specialty Name' },
  { key: 'craftingLocation', label: 'Crafting Location', shortLabel: 'Origin' },
  { key: 'destination', label: 'Destination', shortLabel: 'Dest.' },
  { key: 'rewardItem', label: 'Reward', shortLabel: 'Reward' },
  { key: 'payoutSortValue', label: 'Payout' },
];
