import React from 'react';

interface CursorPointerProps {
  x: number;
  y: number;
  isClicking?: boolean;
  opacity?: number;
}

export const CursorPointer: React.FC<CursorPointerProps> = ({
  x,
  y,
  isClicking = false,
  opacity = 1,
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        opacity,
        transform: `translate(-2px, -2px) scale(${isClicking ? 0.88 : 1})`,
        transformOrigin: 'top left',
        transition: 'transform 0.08s ease',
        zIndex: 9999,
        pointerEvents: 'none',
        filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
      }}
    >
      <svg
        width="28"
        height="32"
        viewBox="0 0 24 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 2L10.5 24L14.2 14.8L23 12L3 2Z"
          fill="#0F172A"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
