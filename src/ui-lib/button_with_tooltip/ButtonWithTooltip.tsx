import { ComponentProps, useCallback, useState, MouseEvent } from "react";
import { Button } from "../button/Button";
import { Tooltip } from "../tooltip/Tooltip";

import css from "./ButtonWithTooltip.module.css";

interface ButtonWithTooltipProps extends ComponentProps<typeof Button> {
  tooltip: ComponentProps<typeof Tooltip>;
}

export function ButtonWithTooltip({
  tooltip,
  ...buttonProps
}: ButtonWithTooltipProps) {
  const [active, setActive] = useState<boolean>();

  const onMouseEnter = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      setActive(true);
      buttonProps.onMouseEnter?.(event);
    },
    [buttonProps]
  );

  const onMouseLeave = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      setActive(false);
      buttonProps.onMouseLeave?.(event);
    },
    [buttonProps]
  );
  return (
    <div className={css.container}>
      <Button
        {...buttonProps}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <Tooltip content={tooltip.content} active={tooltip.active ?? active} />
    </div>
  );
}
