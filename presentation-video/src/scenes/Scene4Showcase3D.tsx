import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';
import { Badge } from '../components/Badge';

export const Scene4Showcase3D: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 16, mass: 0.9, stiffness: 100 },
  });

  // 3D camera pan & tilt
  const rotateX = interpolate(frame, [0, 115], [12, 6], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const rotateY = interpolate(frame, [0, 115], [-9, -3], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const scale = interpolate(frame, [0, 115], [0.92, 1.02], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(frame, [0, 15, 105, 115], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Interactive slider inside the card moves
  const sliderPos = interpolate(frame, [25, 75], [20, 85], {
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
        perspective: 1400,
        opacity,
      }}
    >
      {/* 3D Canvas Container */}
      <div
        style={{
          width: 1320,
          height: 780,
          backgroundColor: theme.colors.surface,
          borderRadius: 20,
          boxShadow:
            '0 30px 70px -15px rgba(15, 23, 42, 0.16), 0 0 0 1px rgba(15, 23, 42, 0.08)',
          transform: `scale(${scale * enterSpring}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformOrigin: 'center center',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Navigation Bar */}
        <div
          style={{
            height: 64,
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${theme.colors.border}`,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                backgroundColor: theme.colors.textPrimary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontFamily: theme.fonts.sans,
                fontWeight: 800,
                fontSize: 16,
              }}
            >
              W
            </div>
            <span
              style={{
                fontFamily: theme.fonts.sans,
                fontSize: 18,
                fontWeight: 700,
                color: theme.colors.textPrimary,
                letterSpacing: '-0.02em',
              }}
            >
              Welvar Taste Craft
            </span>
            <Badge label="Archetype: Modern Swiss" variant="neutral" size="sm" />
          </div>

          {/* Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <span style={{ fontFamily: theme.fonts.sans, fontSize: 14, fontWeight: 500, color: theme.colors.textSecondary }}>
              Manifesto
            </span>
            <span style={{ fontFamily: theme.fonts.sans, fontSize: 14, fontWeight: 600, color: theme.colors.textPrimary }}>
              7 Archetypes
            </span>
            <span style={{ fontFamily: theme.fonts.sans, fontSize: 14, fontWeight: 500, color: theme.colors.textSecondary }}>
              105 Benchmarks
            </span>
            <span style={{ fontFamily: theme.fonts.sans, fontSize: 14, fontWeight: 500, color: theme.colors.textSecondary }}>
              Tokens CSS
            </span>
          </div>

          {/* Action Button */}
          <div
            style={{
              padding: '8px 18px',
              borderRadius: 8,
              backgroundColor: theme.colors.textPrimary,
              color: '#FFFFFF',
              fontFamily: theme.fonts.sans,
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Deploy Architecture
          </div>
        </div>

        {/* Content Body */}
        <div style={{ flex: 1, padding: 36, display: 'flex', flexDirection: 'column', gap: 28, backgroundColor: '#F8FAFC' }}>
          {/* Hero Statement */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div
                style={{
                  fontFamily: theme.fonts.sans,
                  fontSize: 36,
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: theme.colors.textPrimary,
                  marginBottom: 8,
                }}
              >
                Human Craft. Zero AI-Slop.
              </div>
              <div
                style={{
                  fontFamily: theme.fonts.sans,
                  fontSize: 16,
                  color: theme.colors.textSecondary,
                  maxWidth: 620,
                }}
              >
                Engineered with 105 world-class digital benchmarks. Asymmetrical compositional rhythm, 1px hairlines, and living sandboxes.
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <div
                style={{
                  padding: '12px 20px',
                  backgroundColor: theme.colors.surface,
                  borderRadius: 12,
                  border: `1px solid ${theme.colors.border}`,
                  boxShadow: theme.shadows.soft,
                }}
              >
                <div style={{ fontFamily: theme.fonts.mono, fontSize: 11, color: theme.colors.textMuted }}>WCAG AAA CONTRAST</div>
                <div style={{ fontFamily: theme.fonts.mono, fontSize: 20, fontWeight: 700, color: theme.colors.accentGreenDark }}>7.4 : 1 [PASS]</div>
              </div>

              <div
                style={{
                  padding: '12px 20px',
                  backgroundColor: theme.colors.surface,
                  borderRadius: 12,
                  border: `1px solid ${theme.colors.border}`,
                  boxShadow: theme.shadows.soft,
                }}
              >
                <div style={{ fontFamily: theme.fonts.mono, fontSize: 11, color: theme.colors.textMuted }}>RADII PRECISION</div>
                <div style={{ fontFamily: theme.fonts.mono, fontSize: 20, fontWeight: 700, color: theme.colors.textPrimary }}>4px - 8px</div>
              </div>
            </div>
          </div>

          {/* Two Interactive Grid Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24, flex: 1 }}>
            {/* Left Card: Living Sandbox */}
            <div
              style={{
                backgroundColor: theme.colors.surface,
                borderRadius: 14,
                border: `1px solid ${theme.colors.border}`,
                padding: 24,
                boxShadow: theme.shadows.card,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: theme.fonts.sans, fontSize: 16, fontWeight: 600, color: theme.colors.textPrimary }}>
                  Living Hero Sandbox: Spatial Density
                </span>
                <Badge label="Interactive [OK]" variant="success" size="sm" />
              </div>

              {/* Slider Track */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontFamily: theme.fonts.sans, fontSize: 13, color: theme.colors.textSecondary }}>Grid Ratio Clamp</span>
                  <span style={{ fontFamily: theme.fonts.mono, fontSize: 13, fontWeight: 600 }}>{Math.round(sliderPos)}% / 1.618</span>
                </div>
                <div
                  style={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: '#E2E8F0',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: `${sliderPos}%`,
                      backgroundColor: theme.colors.accentGreen,
                    }}
                  />
                </div>
              </div>

              {/* Data Rows */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginTop: 8 }}>
                <div style={{ padding: 12, backgroundColor: '#F8FAFC', borderRadius: 8, border: `1px solid ${theme.colors.border}` }}>
                  <div style={{ fontSize: 11, fontFamily: theme.fonts.mono, color: theme.colors.textMuted }}>LATENCY</div>
                  <div style={{ fontSize: 18, fontFamily: theme.fonts.mono, fontWeight: 700, color: theme.colors.textPrimary }}>1.2 ms</div>
                </div>
                <div style={{ padding: 12, backgroundColor: '#F8FAFC', borderRadius: 8, border: `1px solid ${theme.colors.border}` }}>
                  <div style={{ fontSize: 11, fontFamily: theme.fonts.mono, color: theme.colors.textMuted }}>COMPOSITION</div>
                  <div style={{ fontSize: 18, fontFamily: theme.fonts.mono, fontWeight: 700, color: theme.colors.accentGreenDark }}>Asymmetric</div>
                </div>
                <div style={{ padding: 12, backgroundColor: '#F8FAFC', borderRadius: 8, border: `1px solid ${theme.colors.border}` }}>
                  <div style={{ fontSize: 11, fontFamily: theme.fonts.mono, color: theme.colors.textMuted }}>AI SLOP</div>
                  <div style={{ fontSize: 18, fontFamily: theme.fonts.mono, fontWeight: 700, color: theme.colors.alertRed }}>0.0%</div>
                </div>
              </div>
            </div>

            {/* Right Card: Design Tokens */}
            <div
              style={{
                backgroundColor: '#0F172A',
                borderRadius: 14,
                padding: 24,
                boxShadow: theme.shadows.card,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                color: '#E2E8F0',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: theme.fonts.mono, fontSize: 13, color: '#94A3B8' }}>
                  tokens.css (Modern Swiss)
                </span>
                <span style={{ fontSize: 11, fontFamily: theme.fonts.mono, color: theme.colors.accentGreen }}>
                  [COMPILED]
                </span>
              </div>

              <div
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: '#CBD5E1',
                }}
              >
                <div><span style={{ color: '#F43F5E' }}>--radius-card</span>: <span style={{ color: '#38BDF8' }}>4px</span>;</div>
                <div><span style={{ color: '#F43F5E' }}>--hairline</span>: <span style={{ color: '#38BDF8' }}>1px solid rgba(15,23,42,0.08)</span>;</div>
                <div><span style={{ color: '#F43F5E' }}>--font-display</span>: <span style={{ color: '#A7F3D0' }}>'Plus Jakarta Sans'</span>;</div>
                <div><span style={{ color: '#F43F5E' }}>--tracking-hero</span>: <span style={{ color: '#38BDF8' }}>-0.035em</span>;</div>
                <div><span style={{ color: '#F43F5E' }}>--motion-spring</span>: <span style={{ color: '#FBBF24' }}>cubic-bezier(0.16, 1, 0.3, 1)</span>;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
