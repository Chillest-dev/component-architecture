import { ReactNode } from "react";
import classnames from "classnames";

import css from "./Tooltip.module.css";

interface TooltipProps {
  active?: boolean;
  content: ReactNode;
}

export function Tooltip({ active, content }: TooltipProps) {
  return (
    <div className={classnames(css.container, active && css.active)}>
      {content}
    </div>
  );
}
