'use client';

import { useState, useRef, useEffect } from 'react';

interface FilterDropdownProps {
  label: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
  groups?: Record<string, string[]>;
  onBulkToggle?: (items: string[]) => void;
}

export function FilterDropdown({ label, options, selected, onToggle, groups, onBulkToggle }: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors ${
          selected.length > 0
            ? 'border-accent-gold bg-accent-gold-glow text-accent-gold'
            : 'border-border-primary bg-bg-secondary text-text-secondary hover:border-accent-gold-dim hover:text-text-primary'
        }`}
      >
        {label}
        {selected.length > 0 && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-gold text-xs font-bold text-bg-primary">
            {selected.length}
          </span>
        )}
        <svg className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 z-40 mt-2 w-56 rounded-lg border border-border-primary bg-bg-secondary shadow-xl shadow-black/40">
          {groups && onBulkToggle && (
            <div className="flex flex-wrap gap-1.5 border-b border-border-primary p-2">
              {Object.entries(groups).map(([groupName, items]) => {
                const allSelected = items.every((item) => selected.includes(item));
                const someSelected = !allSelected && items.some((item) => selected.includes(item));
                return (
                  <button
                    key={groupName}
                    type="button"
                    onClick={() => onBulkToggle(items)}
                    className={`rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors ${
                      allSelected
                        ? 'border-accent-gold bg-accent-gold text-bg-primary'
                        : someSelected
                          ? 'border-accent-gold text-accent-gold-dim'
                          : 'border-border-primary text-text-muted hover:border-accent-gold-dim hover:text-text-secondary'
                    }`}
                  >
                    {groupName}
                  </button>
                );
              })}
            </div>
          )}
          <div className="max-h-60 overflow-y-auto p-2">
            {options.map((option) => {
              const isSelected = selected.includes(option);
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => onToggle(option)}
                  className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                    isSelected
                      ? 'bg-accent-gold-glow text-accent-gold'
                      : 'text-text-secondary hover:bg-bg-hover hover:text-text-primary'
                  }`}
                >
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                      isSelected
                        ? 'border-accent-gold bg-accent-gold'
                        : 'border-border-primary'
                    }`}
                  >
                    {isSelected && (
                      <svg className="h-3 w-3 text-bg-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
