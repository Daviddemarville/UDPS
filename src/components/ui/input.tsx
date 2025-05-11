// src/components/ui/input.tsx
import type React from "react";

interface InputProps {
	id?: string;
	name: string;
	value?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	type?: string;
	required?: boolean;
	multiple?: boolean;
	className?: string; // ✅ nouvelle prop pour styliser dynamiquement
}

export const Input: React.FC<InputProps> = ({
	id,
	name,
	value,
	onChange,
	placeholder,
	type = "text",
	required = false,
	multiple = false,
	className = "", // valeur par défaut
}) => {
	return (
		<input
			id={id}
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			required={required}
			multiple={multiple}
			className={`border p-2 w-full rounded-md ${className}`} // ✅ ajout dynamique
		/>
	);
};
