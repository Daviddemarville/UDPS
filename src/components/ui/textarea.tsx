// src/components/ui/textarea.tsx
import type React from "react";

interface TextareaProps {
	name: string;
	value: string;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	placeholder: string;
	required?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
	name,
	value,
	onChange,
	placeholder,
	required = false,
}) => {
	return (
		<textarea
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			required={required}
			className="border p-2 w-full rounded-md"
		/>
	);
};
