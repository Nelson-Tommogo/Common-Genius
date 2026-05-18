import React, { KeyboardEvent } from 'react';

export type TabItem = {
  id: string;
  label: string;
  badge?: number;
  disabled?: boolean;
};

export interface TabBarProps {
  tabs: TabItem[];
  activeTabId: string;
  onTabChange: (id: string) => void;
  className?: string;
}

export function TabBar({
  tabs,
  activeTabId,
  onTabChange,
  className = '',
}: TabBarProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTabId);
    if (currentIndex < 0) {
      return;
    }

    let nextIndex = currentIndex;

    if (event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    }

    if (nextIndex !== currentIndex) {
      const nextTab = tabs[nextIndex];
      if (!nextTab.disabled) {
        onTabChange(nextTab.id);
        event.preventDefault();
      }
    }
  };

  return (
    <div
      className={["tab-bar", className].filter(Boolean).join(' ')}
      role="tablist"
      aria-label="Tab bar"
      onKeyDown={handleKeyDown}
    >
      {tabs.map((tab) => {
        const isSelected = tab.id === activeTabId;

        return (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={isSelected}
            aria-controls={`panel-${tab.id}`}
            disabled={tab.disabled}
            className={[
              'tab-bar__tab',
              isSelected ? 'tab-bar__tab--active' : '',
              tab.disabled ? 'tab-bar__tab--disabled' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => !tab.disabled && onTabChange(tab.id)}
          >
            <span className="tab-bar__label">{tab.label}</span>
            {typeof tab.badge === 'number' ? (
              <span className="tab-bar__badge">{tab.badge}</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

export default TabBar;
