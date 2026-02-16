import type { Metadata } from 'next';
import type { TradePack } from '@/lib/types';
import { TradePackTable } from './trade-packs/_components/TradePackTable';
import tradePacksData from '@/data/trade-packs.json';

export const metadata: Metadata = {
  title: 'Trade Pack Prices — ArcheAge Classic Tools',
  description: 'Browse, sort, and filter all trade pack routes with payouts and reward types.',
};

export default function Home() {
  const data = tradePacksData as TradePack[];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6">
        <h1 className="font-heading text-3xl font-bold text-text-primary">
          Trade Pack <span className="text-accent-gold">Prices</span>
        </h1>
        <p className="mt-2 text-text-secondary">
          Compare trade pack routes, payouts, and reward types across all regions.
        </p>
      </div>
      <TradePackTable data={data} />
    </div>
  );
}
