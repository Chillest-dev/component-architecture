import React, { useState, ReactNode, useRef } from "react";
import ReactDOM from "react-dom";

interface AiTooltipProps {
  text: string;
  children: ReactNode;
}

const AiTooltip: React.FC<AiTooltipProps> = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleFocus = () => {
    setShowTooltip(true);
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };

  const tooltipContainer = document.getElementById("tooltip-container");

  if (!tooltipContainer) {
    return null;
  }

  const buttonRect = buttonRef.current?.getBoundingClientRect();
  const scrollY = window.scrollY;

  return (
    <>
      <button
        ref={buttonRef}
        className="ai-tooltip-trigger"
        onClick={handleCloseTooltip}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
      >
        {children}
      </button>
      {ReactDOM.createPortal(
        showTooltip && (
          <div
            className="ai-tooltip-text"
            style={{
              position: "absolute",
              top: (buttonRect?.top ?? 0) + scrollY,
              left: buttonRect?.left,
            }}
          >
            {text}
          </div>
        ),
        tooltipContainer
      )}
    </>
  );
};

export default AiTooltip;
