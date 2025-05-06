// src/components/ui/button.tsx

import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "outline";
	children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = "default",
	className = "",
	...props
}) => {
	const baseStyle =
		"px-4 py-2 rounded font-medium transition-colors duration-200";
	const variants = {
		default: "bg-blue-950 text-white hover:bg-blue-700",
		outline: "border border-blue-950 text-blue-950 hover:bg-blue-50",
	};

	return (
		<button
			className={`${baseStyle} ${variants[variant]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};
