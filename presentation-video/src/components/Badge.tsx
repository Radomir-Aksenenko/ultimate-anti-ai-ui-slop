import React from 'react';
import { theme } from '../theme';

interface BadgeProps {
  label: string;
  variant?: 'success' | 'warning' | 'info' | 'neutral' | 'accent';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'neutral',
  size = 'md',
}) => {
  let bg = theme.colors.surfaceSubtle;
  let text = theme.colors.textSecondary;
  let border = theme.colors.border;

  if (variant === 'success') {
    bg = theme.colors.accentGreenBg;
    text = theme.colors.accentGreenDark;
    border = 'rgba(16, 185, 129, 0.25)';
  } else if (variant === 'warning') {
    bg = theme.colors.amberBg;
    text = theme.colors.amber;
    border = 'rgba(217, 119, 6, 0.25)';
  } else if (variant === 'info') {
    bg = theme.colors.accentBlueBg;
    text = theme.colors.accentBlue;
    border = 'rgba(37, 99, 235, 0.25)';
  }

  const isSmall = size === 'sm';

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: isSmall ? '2px 8px' : '4px 12px',
        borderRadius: theme.radii.full,
        backgroundColor: bg,
        color: text,
        border: `1px solid ${border}`,
        fontFamily: theme.fonts.mono,
        fontSize: isSmall ? 11 : 13,
        fontWeight: 600,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
      }}
    >
      {label}
    </span>
  );
};
