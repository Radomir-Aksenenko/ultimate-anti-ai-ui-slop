import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Sub-phases:
  // 0 - 36: "AI code looks great."
  // 37 - 75: "AI design is slop."
  // 76 - 115: "Taste Craft / makes it human."

  // Phase 1 spring
  const spring1 = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 120 },
  });

  const opacity1 = interpolate(frame, [0, 10, 32, 37], [0, 1, 1, 0], {
    extrapolateRight: 'clamp',
  });
  const translateY1 = interpolate(frame, [0, 15, 32, 37], [20, 0, 0, -25], {
    extrapolateRight: 'clamp',
  });
  const blur1 = interpolate(frame, [30, 37], [0, 8], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Phase 2: "AI design is slop."
  const frame2 = frame - 37;
  const spring2 = spring({
    frame: frame2,
    fps,
    config: { damping: 12, mass: 0.7, stiffness: 140 },
  });
  const opacity2 = interpolate(frame, [37, 44, 70, 76], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const translateY2 = interpolate(frame, [37, 46, 70, 76], [25, 0, 0, -25], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const blur2 = interpolate(frame, [70, 76], [0, 10], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Phase 3: "Taste Craft makes it human." (Beat Drop at frame 77)
  const frame3 = frame - 76;
  const spring3 = spring({
    frame: frame3,
    fps,
    config: { damping: 16, mass: 0.9, stiffness: 110 },
  });
  const opacity3 = interpolate(frame, [76, 84, 110, 115], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const scale3 = interpolate(frame, [76, 115], [0.94, 1.03], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: theme.colors.bgCanvas,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Subtle radial studio light */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(243, 244, 246, 0.8) 100%)',
        }}
      />

      {/* Phase 1: AI code looks great. */}
      {frame < 40 && (
        <div
          style={{
            position: 'absolute',
            opacity: opacity1,
            transform: `translateY(${translateY1}px)`,
            filter: `blur(${blur1}px)`,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <span
            style={{
              fontFamily: theme.fonts.sans,
              fontSize: 68,
              fontWeight: 600,
              letterSpacing: '-0.03em',
              color: theme.colors.textPrimary,
            }}
          >
            AI code looks great.
          </span>
        </div>
      )}

      {/* Phase 2: AI design is slop. */}
      {frame >= 35 && frame < 78 && (
        <div
          style={{
            position: 'absolute',
            opacity: opacity2,
            transform: `translateY(${translateY2}px)`,
            filter: `blur(${blur2}px)`,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <span
            style={{
              fontFamily: theme.fonts.sans,
              fontSize: 68,
              fontWeight: 600,
              letterSpacing: '-0.03em',
              color: theme.colors.textPrimary,
            }}
          >
            AI design is{' '}
            <span
              style={{
                color: theme.colors.alertRed,
                fontWeight: 800,
                textDecoration: 'underline',
                textDecorationColor: 'rgba(220, 38, 38, 0.4)',
                textUnderlineOffset: 8,
              }}
            >
              slop.
            </span>
          </span>
        </div>
      )}

      {/* Phase 3: Taste Craft / makes it human. */}
      {frame >= 74 && (
        <div
          style={{
            position: 'absolute',
            opacity: opacity3,
            transform: `scale(${scale3})`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: theme.fonts.serif,
              fontSize: 104,
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: theme.colors.textPrimary,
              lineHeight: 1.05,
              marginBottom: 12,
            }}
          >
            Taste Craft
          </div>
          <div
            style={{
              fontFamily: theme.fonts.sans,
              fontSize: 34,
              fontWeight: 400,
              color: theme.colors.textSecondary,
              letterSpacing: '-0.01em',
            }}
          >
            makes it human.
          </div>
        </div>
      )}
    </div>
  );
};
