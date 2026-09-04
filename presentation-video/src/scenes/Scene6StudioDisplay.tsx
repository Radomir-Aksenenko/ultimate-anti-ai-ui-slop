import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';
import { StudioDisplay } from '../components/StudioDisplay';
import { Badge } from '../components/Badge';

export const Scene6StudioDisplay: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 18, mass: 1, stiffness: 90 },
  });

  // Slow zoom in on the monitor
  const scale = interpolate(frame, [0, 115], [0.94, 1.12], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const translateY = interpolate(frame, [0, 115], [30, -20], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const opacity = interpolate(frame, [0, 15, 105, 115], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // SVG Chart animated wave
  const waveOffset = Math.sin(frame / 6) * 10;
  const pathD = `M 0 120 Q 120 ${80 + waveOffset} 240 110 T 480 ${70 - waveOffset} T 720 90 L 720 180 L 0 180 Z`;
  const lineD = `M 0 120 Q 120 ${80 + waveOffset} 240 110 T 480 ${70 - waveOffset} T 720 90`;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: '#F3F4F6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity,
        overflow: 'hidden',
      }}
    >
      {/* Studio studio white backdrop lighting */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 35%, #FFFFFF 0%, #E2E8F0 100%)',
        }}
      />

      {/* 3D Studio Display Monitor Container */}
      <div
        style={{
          transform: `scale(${scale * enterSpring}) translateY(${translateY}px)`,
          transformOrigin: 'center center',
        }}
      >
        <StudioDisplay width={1160} height={690}>
          {/* Inside Monitor Screen Canvas */}
          <div
            style={{
              flex: 1,
              backgroundColor: '#F8FAFC',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            {/* Top Mockup Browser Tab Bar */}
            <div
              style={{
                height: 44,
                backgroundColor: '#FFFFFF',
                borderBottom: `1px solid ${theme.colors.border}`,
                display: 'flex',
                alignItems: 'center',
                padding: '0 20px',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#CBD5E1' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#CBD5E1' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#CBD5E1' }} />
              </div>

              <div
                style={{
                  padding: '4px 18px',
                  borderRadius: 6,
                  backgroundColor: '#F1F5F9',
                  fontFamily: theme.fonts.mono,
                  fontSize: 12,
                  color: theme.colors.textSecondary,
                }}
              >
                https://welvar-taste-craft.system/benchmarks
              </div>

              <Badge label="Verified v9.0" variant="success" size="sm" />
            </div>

            {/* Main Screen Content with Floating Settings Modal (matching reference style) */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 24,
                position: 'relative',
              }}
            >
              {/* Blurred background content */}
              <div
                style={{
                  position: 'absolute',
                  inset: 20,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: 16,
                  opacity: 0.25,
                  filter: 'blur(2px)',
                }}
              >
                {['Apple', 'Stripe', 'Notion', 'Teenage Eng', 'Aesop', 'Vercel', 'Supabase', 'Wise'].map((name) => (
                  <div key={name} style={{ backgroundColor: '#FFFFFF', borderRadius: 10, border: '1px solid #CBD5E1', padding: 16 }}>
                    <div style={{ fontWeight: 700 }}>{name}</div>
                  </div>
                ))}
              </div>

              {/* Floating Benchmark Telemetry Modal Card */}
              <div
                style={{
                  width: 780,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 18,
                  padding: 28,
                  boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.18), 0 0 0 1px rgba(15, 23, 42, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                  zIndex: 10,
                }}
              >
                {/* Modal Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontFamily: theme.fonts.sans, fontSize: 18, fontWeight: 700, color: theme.colors.textPrimary }}>
                      105 Real-World Benchmarks Telemetry
                    </div>
                    <div style={{ fontFamily: theme.fonts.sans, fontSize: 12, color: theme.colors.textSecondary }}>
                      Automated design audit across 7 global archetypes
                    </div>
                  </div>
                  <Badge label="Audit: Perfect [OK]" variant="success" size="sm" />
                </div>

                {/* 4 Metric Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
                  <MetricPill label="BENCHMARKS" value="105 Brands" status="+15 Added" />
                  <MetricPill label="CRAFT SCORE" value="99.8%" status="Staff Senior" />
                  <MetricPill label="CONTRAST" value="7.4 : 1" status="WCAG AAA" />
                  <MetricPill label="AI-SLOP" value="0.0%" status="Fully Eradicated" isAlert />
                </div>

                {/* Live SVG Telemetry Chart */}
                <div
                  style={{
                    backgroundColor: '#F8FAFC',
                    borderRadius: 12,
                    border: `1px solid ${theme.colors.border}`,
                    padding: '16px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: theme.fonts.mono, fontSize: 12, fontWeight: 600, color: theme.colors.textSecondary }}>
                      DESIGN INTENT OVER TIME
                    </span>
                    <span style={{ fontFamily: theme.fonts.mono, fontSize: 12, color: theme.colors.accentGreenDark, fontWeight: 700 }}>
                      94 BPM SYNC
                    </span>
                  </div>

                  <div style={{ height: 110, position: 'relative', overflow: 'hidden' }}>
                    <svg width="100%" height="110" viewBox="0 0 720 180" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path d={pathD} fill="url(#chartGrad)" />
                      <path d={lineD} fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StudioDisplay>
      </div>
    </div>
  );
};

interface MetricPillProps {
  label: string;
  value: string;
  status: string;
  isAlert?: boolean;
}

const MetricPill: React.FC<MetricPillProps> = ({ label, value, status, isAlert }) => {
  return (
    <div
      style={{
        padding: 12,
        borderRadius: 10,
        backgroundColor: '#F8FAFC',
        border: `1px solid ${theme.colors.border}`,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <div style={{ fontFamily: theme.fonts.mono, fontSize: 10, color: theme.colors.textMuted }}>
        {label}
      </div>
      <div style={{ fontFamily: theme.fonts.sans, fontSize: 18, fontWeight: 700, color: theme.colors.textPrimary }}>
        {value}
      </div>
      <div
        style={{
          fontFamily: theme.fonts.mono,
          fontSize: 10,
          fontWeight: 600,
          color: isAlert ? theme.colors.accentGreenDark : theme.colors.accentBlue,
        }}
      >
        {status}
      </div>
    </div>
  );
};
