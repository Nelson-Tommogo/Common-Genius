import React from "react";

type CardVariant = "default" | "elevated" | "outlined";
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  variant = "default",
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "rounded-lg p-4 transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles: Record<CardVariant, string> = {
    default: "bg-white shadow-sm",
    elevated: "bg-white shadow-md hover:shadow-lg focus:ring-gray-300",
    outlined: "border border-gray-300 bg-white",
  };

  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <div className={finalClassName} {...props}>
      {children}
    </div>
  );
};

export default Card;