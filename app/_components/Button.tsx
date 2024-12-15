import React, { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

// Define classes using `cva` for styling with variants
const buttonClasses = cva(
  "border h-12 rounded-full px-6 font-medium", 
  {
    variants: {
      variant: {
        primary: "bg-lime-400 text-neutral-950 border-lime-400",
        secondary: "bg-black text-white border-white/55",
      },
    },
  }
);

// Button component definition
export default function Button(
  props: {
    variant: "primary" | "secondary";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant, className, ...otherProps } = props;

  return (
    <button 
      className={buttonClasses({ variant, className })} 
      {...otherProps} 
    />
  );
}