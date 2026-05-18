import React, { useCallback, useEffect, useRef, forwardRef } from "react";

type Props = {
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  className?: string;
  minRows?: number;
  maxRows?: number;
  disabled?: boolean;
  style?: React.CSSProperties;
};

const calcHeight = (el: HTMLTextAreaElement, minRows = 1, maxRows?: number) => {
  const computed = getComputedStyle(el);
  const lineHeight = parseInt(computed.lineHeight || "20", 10) || 20;
  el.style.height = "auto";
  const padding = el.offsetHeight - el.clientHeight;
  const rows = Math.floor((el.scrollHeight - padding) / lineHeight);
  const clampedRows = Math.max(minRows, maxRows ? Math.min(rows, maxRows) : rows);
  el.style.height = `${clampedRows * lineHeight + padding}px`;
};

const InputField = forwardRef<HTMLTextAreaElement, Props>(
  ({ value = "", onChange, placeholder, className, minRows = 1, maxRows, disabled, style }, ref) => {
    const innerRef = useRef<HTMLTextAreaElement | null>(null);
    // expose ref
    useEffect(() => {
      if (!ref) return;
      if (typeof ref === "function") ref(innerRef.current);
      else (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = innerRef.current;
    }, [ref]);

    const resize = useCallback(() => {
      if (!innerRef.current) return;
      calcHeight(innerRef.current, minRows, maxRows);
    }, [minRows, maxRows]);

    useEffect(() => {
      resize();
    }, [value, resize]);

    return (
      <textarea
        ref={innerRef}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className={className}
        rows={minRows}
        disabled={disabled}
        style={{ resize: "none", overflow: "hidden", width: "100%", ...style }}
      />
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
