import React, {useState, useRef, useEffect} from "react";

type Option = {
  label: string;
  value: string | number;
};

type DropDownProps = {
  options: Option[];
  value?: string | number | null;
  onChange?: (value: string | number | null) => void;
  placeholder?: string;
  searchable?: boolean;
  className?: string;
};

const DropDown: React.FC<DropDownProps> = ({
  options,
  value = null,
  onChange,
  placeholder = "Select...",
  searchable = true,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState(0);

  const rootRef = useRef<HTMLDivElement | null>(null);

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(query.toLowerCase())
  );

  const selected = options.find((o) => o.value === value) ?? null;

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function handleSelect(opt: Option) {
    onChange?.(opt.value);
    setOpen(false);
    setQuery("");
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter") setOpen(true);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => Math.min(h + 1, Math.max(0, filtered.length - 1)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const opt = filtered[highlight];
      if (opt) handleSelect(opt);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div
      ref={rootRef}
      className={`cg-dropdown ${className}`}
      style={{position: "relative", minWidth: 200}}
    >
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        onKeyDown={onKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          width: "100%",
          padding: "8px 10px",
          textAlign: "left",
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: 4,
        }}
      >
        {selected ? selected.label : placeholder}
      </button>

      {open && (
        <div
          role="listbox"
          tabIndex={-1}
          onKeyDown={onKeyDown}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            marginTop: 6,
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: 6,
            maxHeight: 240,
            overflow: "auto",
            zIndex: 1000,
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
          }}
        >
          {searchable && (
            <div style={{padding: 8}}>
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                style={{width: "100%", padding: 8, boxSizing: "border-box"}}
              />
            </div>
          )}

          <div>
            {filtered.length === 0 && (
              <div style={{padding: 10, color: "#666"}}>No results</div>
            )}
            {filtered.map((opt, i) => (
              <div
                key={String(opt.value)}
                role="option"
                aria-selected={value === opt.value}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleSelect(opt)}
                onMouseEnter={() => setHighlight(i)}
                style={{
                  padding: "8px 10px",
                  background: i === highlight ? "#f0f6ff" : "transparent",
                  cursor: "pointer",
                }}
              >
                {opt.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
