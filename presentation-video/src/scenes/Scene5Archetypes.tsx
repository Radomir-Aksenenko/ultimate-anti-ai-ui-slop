import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';
import { Badge } from '../components/Badge';
import { CursorPointer } from '../components/CursorPointer';

export const Scene5Archetypes: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 120 },
  });

  // Archetype active tab based on frame
  // Frame 0-35: Swiss
  // Frame 36-75: FinTech
  // Frame 76-115: Industrial
  let activeTab = 0;
  if (frame >= 35 && frame < 75) activeTab = 1;
  else if (frame >= 75) activeTab = 2;

  // Mouse cursor moves to switch tabs
  const cursorX = interpolate(frame, [15, 35, 55, 75, 95], [600, 750, 750, 930, 930], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cursorY = interpolate(frame, [15, 35, 55, 75, 95], [400, 270, 270, 270, 270], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cursorClick = (frame >= 33 && frame <= 37) || (frame >= 73 && frame <= 77);

  // Exit transition
  const opacity = interpolate(frame, [0, 15, 105, 115], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const archetypes = [
    { name: 'Modern Swiss', brand: 'Vercel, Linear', font: 'Plus Jakarta Sans', radius: '4px' },
    { name: 'High-End FinTech', brand: 'Stripe, Ramp', font: 'Outfit + Inter', radius: '10px' },
    { name: 'Warm Humanist', brand: 'Notion, Stripe Press', font: 'Manrope + Onest', radius: '12px' },
  ];

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
        gap: 24,
        opacity,
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 1) 0%, rgba(241, 245, 249, 0.6) 100%)',
        }}
      />

      {/* Card 1: 7 Archetypes Switcher */}
      <div
        style={{
          width: 860,
          backgroundColor: theme.colors.surface,
          borderRadius: 20,
          padding: 28,
          boxShadow: theme.shadows.elevated,
          border: `1px solid ${theme.colors.border}`,
          transform: `scale(${enterSpring})`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: theme.fonts.sans, fontSize: 20, fontWeight: 700, color: theme.colors.textPrimary }}>
              Intent-Driven Archetype Engine
            </div>
            <div style={{ fontFamily: theme.fonts.sans, fontSize: 13, color: theme.colors.textSecondary }}>
              Never force dark Linear clones on every product. Match true brand DNA.
            </div>
          </div>
          <Badge label="7 Archetypes Live" variant="success" size="sm" />
        </div>

        {/* Tab Buttons */}
        <div
          style={{
            display: 'flex',
            backgroundColor: '#F1F5F9',
            padding: 6,
            borderRadius: 14,
            gap: 6,
          }}
        >
          {archetypes.map((arch, idx) => {
            const isActive = activeTab === idx;
            return (
              <div
                key={arch.name}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: 10,
                  backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                  boxShadow: isActive ? '0 2px 8px rgba(15, 23, 42, 0.08)' : 'none',
                  border: isActive ? `1px solid ${theme.colors.border}` : '1px solid transparent',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  transition: 'all 0.2s ease',
                }}
              >
                <span
                  style={{
                    fontFamily: theme.fonts.sans,
                    fontSize: 14,
                    fontWeight: 700,
                    color: isActive ? theme.colors.textPrimary : theme.colors.textSecondary,
                  }}
                >
                  {arch.name}
                </span>
                <span
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: 11,
                    color: isActive ? theme.colors.accentGreenDark : theme.colors.textMuted,
                  }}
                >
                  {arch.brand}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Card 2: System Guards & Toggles */}
      <div
        style={{
          width: 860,
          backgroundColor: theme.colors.surface,
          borderRadius: 20,
          padding: 24,
          boxShadow: theme.shadows.card,
          border: `1px solid ${theme.colors.border}`,
          transform: `scale(${enterSpring})`,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 16,
        }}
      >
        <ToggleCard
          title="Zero AI-Slop Filter"
          subtitle="Blocks purple neon glows"
          isOn={true}
        />
        <ToggleCard
          title="Humanizer-Pro Copy"
          subtitle="Strict verifiable facts"
          isOn={true}
        />
        <ToggleCard
          title="Optical Typography"
          subtitle="Cyrillic + Latin verified"
          isOn={true}
        />
      </div>

      {/* Mouse Cursor Pointer */}
      <CursorPointer
        x={cursorX}
        y={cursorY}
        isClicking={cursorClick}
        opacity={1}
      />
    </div>
  );
};

interface ToggleCardProps {
  title: string;
  subtitle: string;
  isOn: boolean;
}

const ToggleCard: React.FC<ToggleCardProps> = ({ title, subtitle, isOn }) => {
  return (
    <div
      style={{
        padding: 16,
        borderRadius: 12,
        backgroundColor: '#F8FAFC',
        border: `1px solid ${theme.colors.border}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 12,
      }}
    >
      <div>
        <div style={{ fontFamily: theme.fonts.sans, fontSize: 14, fontWeight: 600, color: theme.colors.textPrimary }}>
          {title}
        </div>
        <div style={{ fontFamily: theme.fonts.sans, fontSize: 12, color: theme.colors.textSecondary }}>
          {subtitle}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: theme.fonts.mono, fontSize: 11, fontWeight: 700, color: theme.colors.accentGreenDark }}>
          [ENFORCED]
        </span>

        {/* Toggle switch */}
        <div
          style={{
            width: 44,
            height: 24,
            borderRadius: 12,
            backgroundColor: isOn ? theme.colors.accentGreen : '#CBD5E1',
            padding: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: isOn ? 'flex-end' : 'flex-start',
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          />
        </div>
      </div>
    </div>
  );
};
