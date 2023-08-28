import { HTMLProps, ReactNode } from "react";

import css from "./Button.module.css";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  label: string;
  icon?: ReactNode;
}

export function Button({ label, icon, ...rest }: ButtonProps) {
  return (
    <button {...rest} type="button" className={css.container}>
      <span>{label}</span>
      <span>{icon}</span>
    </button>
  );
}
