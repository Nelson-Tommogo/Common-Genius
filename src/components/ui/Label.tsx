import * as React from "react";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  htmlFor: string;
  text: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export function Label({ htmlFor, text, inputProps, className = "", ...props }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 ${className}`} {...props}>
      <span>{text}</span>
      <input
        id={htmlFor}
        className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...inputProps}
      />
    </label>
  );
}
