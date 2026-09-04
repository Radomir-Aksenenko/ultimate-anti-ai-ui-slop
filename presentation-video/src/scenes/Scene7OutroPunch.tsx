import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';

export const Scene7OutroPunch: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Words cut precisely on the 94 BPM beats (every ~19 frames at 30 fps)
  // 0 - 18: KILL
  // 19 - 37: THE
  // 38 - 56: SLOP.
  // 57 - 75: BUILD
  // 76 - 84: WITH TASTE.
  // 85 - 110: FINAL LOGO & REPO

  const currentWordIndex = Math.floor(frame / 19);

  // Punch scale spring for each word hit
  const wordLocalFrame = frame % 19;
  const punchScale = spring({
    frame: wordLocalFrame,
    fps,
    config: { damping: 10, mass: 0.5, stiffness: 200 },
  });

  const isFinalScreen = frame >= 84;

  const finalSpring = spring({
    frame: frame - 84,
    fps,
    config: { damping: 16, mass: 0.8, stiffness: 100 },
  });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: isFinalScreen ? '#090B0E' : theme.colors.bgCanvas,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        transition: 'background-color 0.1s ease',
      }}
    >
      {/* Beat Words (0 - 83) */}
      {!isFinalScreen && (
        <div style={{ textAlign: 'center' }}>
          {currentWordIndex === 0 && (
            <div
              style={{
                fontFamily: theme.fonts.sans,
                fontSize: 140,
                fontWeight: 900,
                letterSpacing: '-0.05em',
                color: '#0F172A',
                transform: `scale(${punchScale})`,
              }}
            >
              KILL
            </div>
          )}

          {currentWordIndex === 1 && (
            <div
              style={{
                fontFamily: theme.fonts.sans,
                fontSize: 130,
                fontWeight: 800,
                letterSpacing: '-0.04em',
                color: '#475569',
                transform: `scale(${punchScale})`,
              }}
            >
              THE
            </div>
          )}

          {currentWordIndex === 2 && (
            <div
              style={{
                fontFamily: theme.fonts.sans,
                fontSize: 150,
                fontWeight: 900,
                letterSpacing: '-0.05em',
                color: theme.colors.alertRed,
                transform: `scale(${punchScale})`,
              }}
            >
              SLOP.
            </div>
          )}

          {currentWordIndex === 3 && (
            <div
              style={{
                fontFamily: theme.fonts.sans,
                fontSize: 140,
                fontWeight: 900,
                letterSpacing: '-0.05em',
                color: '#0F172A',
                transform: `scale(${punchScale})`,
              }}
            >
              BUILD
            </div>
          )}

          {currentWordIndex >= 4 && (
            <div
              style={{
                fontFamily: theme.fonts.sans,
                fontSize: 120,
                fontWeight: 900,
                letterSpacing: '-0.04em',
                color: theme.colors.accentGreenDark,
                transform: `scale(${punchScale})`,
              }}
            >
              WITH TASTE.
            </div>
          )}
        </div>
      )}

      {/* Final Cinematic Branding Screen (84 - 110) */}
      {isFinalScreen && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            transform: `scale(${finalSpring})`,
            gap: 16,
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              backgroundColor: '#FFFFFF',
              color: '#090B0E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: theme.fonts.sans,
              fontWeight: 900,
              fontSize: 28,
              marginBottom: 8,
              boxShadow: '0 0 40px rgba(255, 255, 255, 0.2)',
            }}
          >
            W
          </div>

          <div
            style={{
              fontFamily: theme.fonts.serif,
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              lineHeight: 1.1,
            }}
          >
            Welvar Taste Craft
          </div>

          <div
            style={{
              fontFamily: theme.fonts.sans,
              fontSize: 22,
              fontWeight: 400,
              color: '#94A3B8',
              letterSpacing: '-0.01em',
              maxWidth: 700,
            }}
          >
            Human Senior Web Architecture Framework • 105 Benchmarks
          </div>

          <div
            style={{
              marginTop: 20,
              padding: '10px 24px',
              borderRadius: 30,
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: theme.colors.accentGreen }} />
            <span
              style={{
                fontFamily: theme.fonts.mono,
                fontSize: 15,
                color: '#E2E8F0',
                letterSpacing: '0.02em',
              }}
            >
              github.com/Radomir-Aksenenko/ultimate-anti-ai-ui-slop
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
