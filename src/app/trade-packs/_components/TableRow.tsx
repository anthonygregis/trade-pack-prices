import type { TradePack } from '@/lib/types';

interface TableRowProps {
  pack: TradePack;
}

const rewardColors: Record<string, string> = {
  'Gold': 'text-accent-gold',
  'Gilda Star': 'text-accent-teal',
  'Charcoal Stabilizer': 'text-orange-400',
};

export function TableRow({ pack }: TableRowProps) {
  const rewardColor = rewardColors[pack.rewardItem] ?? 'text-text-primary';

  return (
    <tr className="border-b border-border-subtle transition-colors hover:bg-bg-hover" style={{ contentVisibility: 'auto' }}>
      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-text-primary">
        {pack.packName}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-text-secondary">
        <span className="mr-1.5 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: pack.continent === 'West' ? '#5b8def' : '#ef5b5b' }} />
        {pack.craftingLocation}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-text-secondary">
        {pack.destination}
      </td>
      <td className={`whitespace-nowrap px-4 py-3 text-sm font-medium ${rewardColor}`}>
        {pack.rewardItem}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-right text-sm font-mono font-semibold text-text-primary">
        {pack.payout}
      </td>
    </tr>
  );
}
