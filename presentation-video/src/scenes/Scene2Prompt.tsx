import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';
import { CursorPointer } from '../components/CursorPointer';

export const Scene2Prompt: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const scaleSpring = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 120 },
  });

  const fullText = 'Architect authentic enterprise platform without AI-slop';
  // Typing starts at frame 15, ends around frame 55
  const charsCount = Math.min(
    fullText.length,
    Math.max(0, Math.floor(interpolate(frame, [12, 54], [0, fullText.length], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })))
  );
  const displayedText = fullText.slice(0, charsCount);
  const cursorBlink = Math.floor(frame / 8) % 2 === 0;

  // Mouse cursor moves to submit button:
  // Submit button center coordinates relative to prompt container:
  // Container: 920px wide, centered on screen (1920x1080 -> left: 500, top: 440)
  // Button relative to screen: X = 500 + 920 - 70 = 1350, Y = 440 + 170 - 45 = 565
  const cursorStartX = 1100;
  const cursorStartY = 850;
  const targetBtnX = 1370;
  const targetBtnY = 560;

  const cursorProgress = interpolate(frame, [45, 60], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cursorX = interpolate(cursorProgress, [0, 1], [cursorStartX, targetBtnX]);
  const cursorY = interpolate(cursorProgress, [0, 1], [cursorStartY, targetBtnY]);
  const cursorOpacity = interpolate(frame, [42, 48, 72, 76], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Click happens at frame 62 to 66
  const isClicking = frame >= 61 && frame <= 68;
  const btnScale = isClicking ? 0.92 : 1;

  // Ripple effect on click
  const rippleProgress = interpolate(frame, [62, 76], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const rippleScale = interpolate(rippleProgress, [0, 1], [0.8, 2.5]);
  const rippleOpacity = interpolate(rippleProgress, [0, 0.2, 1], [0, 0.7, 0]);

  // Scene exit transition
  const exitProgress = interpolate(frame, [68, 76], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const sceneScale = interpolate(exitProgress, [0, 1], [1, 0.96]);
  const sceneTranslateY = interpolate(exitProgress, [0, 1], [0, -40]);
  const sceneOpacity = interpolate(exitProgress, [0, 1], [1, 0]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: theme.colors.bgCanvas,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `translateY(${sceneTranslateY}px) scale(${sceneScale})`,
        opacity: sceneOpacity,
      }}
    >
      {/* Background ambient light */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(243, 244, 246, 0.7) 100%)',
        }}
      />

      {/* Main Prompt Card */}
      <div
        style={{
          width: 920,
          backgroundColor: theme.colors.surface,
          borderRadius: 22,
          padding: '32px 36px 28px 36px',
          boxShadow: theme.shadows.elevated,
          border: `1px solid ${theme.colors.border}`,
          transform: `scale(${scaleSpring})`,
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
          position: 'relative',
        }}
      >
        {/* Input Text Row */}
        <div
          style={{
            minHeight: 52,
            display: 'flex',
            alignItems: 'center',
            fontFamily: theme.fonts.sans,
            fontSize: 27,
            fontWeight: 500,
            color: theme.colors.textPrimary,
            letterSpacing: '-0.02em',
          }}
        >
          <span>{displayedText}</span>
          {frame < 62 && (
            <span
              style={{
                display: 'inline-block',
                width: 2,
                height: 32,
                backgroundColor: cursorBlink ? theme.colors.textPrimary : 'transparent',
                marginLeft: 4,
                verticalAlign: 'middle',
              }}
            />
          )}
        </div>

        {/* Bottom Actions Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 12,
            borderTop: `1px solid ${theme.colors.border}`,
          }}
        >
          {/* Left Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: theme.colors.surfaceSubtle,
                border: `1px solid ${theme.colors.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: theme.fonts.sans,
                fontSize: 20,
                color: theme.colors.textSecondary,
              }}
            >
              +
            </div>

            <div
              style={{
                padding: '8px 16px',
                borderRadius: theme.radii.full,
                backgroundColor: theme.colors.surfaceSubtle,
                border: `1px solid ${theme.colors.border}`,
                fontFamily: theme.fonts.sans,
                fontSize: 14,
                fontWeight: 600,
                color: theme.colors.textSecondary,
              }}
            >
              Archetype: Modern Swiss
            </div>

            <div
              style={{
                padding: '8px 16px',
                borderRadius: theme.radii.full,
                backgroundColor: theme.colors.accentGreenBg,
                border: '1px solid rgba(16, 185, 129, 0.25)',
                fontFamily: theme.fonts.mono,
                fontSize: 13,
                fontWeight: 600,
                color: theme.colors.accentGreenDark,
              }}
            >
              105 Benchmarks
            </div>
          </div>

          {/* Right Submit Button */}
          <div style={{ position: 'relative' }}>
            {/* Ripple Wave on Click */}
            {isClicking && (
              <div
                style={{
                  position: 'absolute',
                  inset: -8,
                  borderRadius: '50%',
                  backgroundColor: theme.colors.accentGreen,
                  transform: `scale(${rippleScale})`,
                  opacity: rippleOpacity,
                  pointerEvents: 'none',
                }}
              />
            )}

            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                backgroundColor: theme.colors.accentGreen,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isClicking
                  ? theme.shadows.glowGreen
                  : '0 4px 14px rgba(16, 185, 129, 0.4)',
                transform: `scale(${btnScale})`,
                transition: 'transform 0.08s ease',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 19V5M12 5L5 12M12 5L19 12"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Mouse Cursor */}
      <CursorPointer
        x={cursorX}
        y={cursorY}
        isClicking={isClicking}
        opacity={cursorOpacity}
      />
    </div>
  );
};
