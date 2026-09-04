import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';
import { Badge } from '../components/Badge';

export const Scene3Directives: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 120 },
  });

  // Task completion frames (synced to 94 BPM beats)
  // Beat 1 (~20 frames into scene)
  // Beat 2 (~40 frames)
  // Beat 3 (~60 frames)
  // Beat 4 (~80 frames)
  const task1Done = frame >= 22;
  const task2Done = frame >= 44;
  const task3Done = frame >= 66;
  const task4Done = frame >= 88;

  // Scroll phase upward from frame 100 to 140
  const scrollY = interpolate(frame, [98, 140], [0, -320], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Motion blur during scroll
  const scrollBlur = interpolate(frame, [98, 110, 130, 145], [0, 4, 4, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Camera tilt towards end
  const rotateX = interpolate(frame, [110, 154], [0, 10], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const sceneScale = interpolate(frame, [110, 154], [1, 1.05], {
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
        perspective: 1200,
      }}
    >
      <div
        style={{
          width: 820,
          backgroundColor: theme.colors.surface,
          borderRadius: 24,
          padding: 36,
          boxShadow: theme.shadows.elevated,
          border: `1px solid ${theme.colors.border}`,
          transform: `scale(${enterSpring * sceneScale}) rotateX(${rotateX}deg)`,
          transformOrigin: 'center center',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: 740,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span
              style={{
                fontFamily: theme.fonts.sans,
                fontSize: 22,
                fontWeight: 700,
                color: theme.colors.textPrimary,
                letterSpacing: '-0.02em',
              }}
            >
              System Directives Pipeline
            </span>
            <Badge label="105 Benchmarks Active" variant="info" size="sm" />
          </div>
          <Badge
            label={task4Done ? 'All Passed [OK]' : 'Compiling...'}
            variant={task4Done ? 'success' : 'warning'}
            size="sm"
          />
        </div>

        {/* Soft Lavender Info Banner (matching reference aesthetic) */}
        <div
          style={{
            backgroundColor: '#F5F3FF',
            border: '1px solid #DDD6FE',
            borderRadius: 14,
            padding: '16px 20px',
            marginBottom: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <div
            style={{
              fontFamily: theme.fonts.sans,
              fontSize: 15,
              fontWeight: 600,
              color: '#6D28D9',
            }}
          >
            Senior Human Web Architecture v9.0 Enforced
          </div>
          <div
            style={{
              fontFamily: theme.fonts.sans,
              fontSize: 13,
              color: '#7C3AED',
              lineHeight: 1.4,
            }}
          >
            Reverse-engineered from Apple, Stripe, Wise, Notion, Teenage Engineering & Vercel. Eradicating AI-slop.
          </div>
        </div>

        {/* Scrolling Tasks Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            transform: `translateY(${scrollY}px)`,
            filter: `blur(${scrollBlur}px)`,
            transition: 'filter 0.1s ease',
          }}
        >
          {/* Phase 1 */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  color: theme.colors.textSecondary,
                }}
              >
                PHASE 1: FOUNDATION & METRICS
              </span>
              <Badge
                label={task4Done ? 'Complete [OK]' : 'Enforcing'}
                variant={task4Done ? 'success' : 'info'}
                size="sm"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {/* Task 1 */}
              <TaskRow
                title="1. Eradicate purple neon glows & 24px bubble cards"
                isDone={task1Done}
                isStrikethrough
              />

              {/* Task 2 */}
              <TaskRow
                title="2. Lock 1px hairline precision & 8px spatial grid"
                isDone={task2Done}
              />

              {/* Task 3 */}
              <TaskRow
                title="3. Inject fluid golden ratio typography scale"
                isDone={task3Done}
              />

              {/* Task 4 */}
              <TaskRow
                title="4. Verify Cyrillic + Latin optical tracking"
                isDone={task4Done}
              />
            </div>
          </div>

          {/* Phase 2 */}
          <div style={{ marginTop: 12 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  color: theme.colors.textSecondary,
                }}
              >
                PHASE 2: 7 INTENT-DRIVEN ARCHETYPES
              </span>
              <Badge label="Up Next" variant="warning" size="sm" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <TaskRow title="1. Modern Swiss (Vercel, Linear, Raycast)" isDone={false} />
              <TaskRow title="2. High-End FinTech (Stripe, Ramp, Mercury)" isDone={false} />
              <TaskRow title="3. Warm Humanist (Notion, Stripe Press)" isDone={false} />
              <TaskRow title="4. Industrial Tactile (Teenage Eng, Nothing)" isDone={false} />
            </div>
          </div>

          {/* Phase 3 */}
          <div style={{ marginTop: 12 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  color: theme.colors.textSecondary,
                }}
              >
                PHASE 3: HUMANIZER-PRO COPYWRITING
              </span>
              <Badge label="Queued" variant="neutral" size="sm" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <TaskRow title="1. Ban buzzwords: 'seamless', 'unleash', 'supercharge'" isDone={false} />
              <TaskRow title="2. Enforce concrete verifiable numbers & latency metrics" isDone={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TaskRowProps {
  title: string;
  isDone: boolean;
  isStrikethrough?: boolean;
}

const TaskRow: React.FC<TaskRowProps> = ({ title, isDone, isStrikethrough }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '12px 16px',
        borderRadius: 12,
        backgroundColor: isDone ? 'rgba(16, 185, 129, 0.05)' : theme.colors.surfaceSubtle,
        border: `1px solid ${isDone ? 'rgba(16, 185, 129, 0.2)' : theme.colors.border}`,
        transition: 'all 0.2s ease',
      }}
    >
      {/* Checkbox box */}
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: 6,
          backgroundColor: isDone ? theme.colors.accentGreen : '#E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease',
        }}
      >
        {isDone ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 7L5.8 10L11 4"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#94A3B8' }} />
        )}
      </div>

      <span
        style={{
          fontFamily: theme.fonts.sans,
          fontSize: 15,
          fontWeight: 500,
          color: isDone ? theme.colors.textPrimary : theme.colors.textSecondary,
          textDecoration: isDone && isStrikethrough ? 'line-through' : 'none',
          opacity: isDone && isStrikethrough ? 0.7 : 1,
        }}
      >
        {title}
      </span>
    </div>
  );
};
