import React from 'react';
import { theme } from '../theme';

interface StudioDisplayProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
}

export const StudioDisplay: React.FC<StudioDisplayProps> = ({
  children,
  width = 1120,
  height = 680,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* Monitor Display Head */}
      <div
        style={{
          width,
          height,
          backgroundColor: '#0F172A',
          borderRadius: 20,
          padding: 12,
          boxShadow:
            '0 35px 80px -20px rgba(15, 23, 42, 0.22), 0 0 0 1px rgba(0, 0, 0, 0.12), inset 0 0 0 2px rgba(255, 255, 255, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {/* Top camera bezel dot */}
        <div
          style={{
            position: 'absolute',
            top: 5,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
          }}
        />

        {/* Screen Canvas Area */}
        <div
          style={{
            flex: 1,
            backgroundColor: theme.colors.surface,
            borderRadius: 10,
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </div>
      </div>

      {/* Stand Neck */}
      <div
        style={{
          width: 130,
          height: 90,
          background: 'linear-gradient(180deg, #D4D4D8 0%, #A1A1AA 100%)',
          marginTop: -2,
          clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)',
          zIndex: -1,
          boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.6)',
        }}
      />

      {/* Stand Base */}
      <div
        style={{
          width: 280,
          height: 12,
          backgroundColor: '#E4E4E7',
          borderRadius: '4px 4px 6px 6px',
          border: '1px solid #D4D4D8',
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
          marginTop: -4,
        }}
      />

      {/* Soft floor shadow */}
      <div
        style={{
          position: 'absolute',
          bottom: -25,
          width: 800,
          height: 35,
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.14) 0%, rgba(15, 23, 42, 0) 70%)',
          zIndex: -2,
        }}
      />
    </div>
  );
};
